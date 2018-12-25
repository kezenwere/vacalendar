package com.aurea.vacationcalendar.util;

import java.io.IOException;
import java.security.GeneralSecurityException;
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.util.Arrays;
import java.util.Collections;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import com.aurea.vacationcalendar.config.AppConfig;
import com.aurea.vacationcalendar.domain.vacation.Vacation;
import com.aurea.vacationcalendar.security.ActiveAuditor;
import com.google.api.client.auth.oauth2.Credential;
import com.google.api.client.auth.oauth2.TokenResponse;
import com.google.api.client.googleapis.auth.oauth2.GoogleAuthorizationCodeFlow;
import com.google.api.client.googleapis.auth.oauth2.GoogleClientSecrets;
import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport;
import com.google.api.client.http.HttpTransport;
import com.google.api.client.json.JsonFactory;
import com.google.api.client.json.jackson2.JacksonFactory;
import com.google.api.client.util.DateTime;
import com.google.api.services.calendar.model.Event;
import com.google.api.services.calendar.model.EventAttendee;
import com.google.api.services.calendar.model.EventDateTime;
import com.google.api.services.calendar.model.EventReminder;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * The Google Calendar Api Service
 */
@Service
public class GoogleApiUtil {

  private static final Log LOG = LogFactory.getLog(GoogleApiUtil.class);

  private static final String APPLICATION_NAME = "vaCalendar";
  private static final JsonFactory JSON_FACTORY = JacksonFactory.getDefaultInstance();
  private static final String CALENDAR_EVENT_SUMMARY = "Vacation Approval";
  private static final String CALENDAR_EVENT_LOCATION = "OFF WORK.";
  private static final String CALENDAR_EVENT_DESCRIPTION = "%s's, Vacation has just been approved.";
  private static final String CALENDAR_ID = "primary";
  private static final String TIME_ZONE_LOS_ANGELES = "America/Los_Angeles";
  private static final String GENERAL_ERROR_MSG = "Unable to create Credential.";
  private static HttpTransport httpTransport;
  private final AppConfig appConfig;
  private final ActiveAuditor activeAuditor;
  private Set<Event> events = new HashSet<>();
  private GoogleAuthorizationCodeFlow authorizationCodeFlow;

  @Autowired
  public GoogleApiUtil(AppConfig appConfig, ActiveAuditor activeAuditor) {
    this.appConfig = appConfig;
    this.activeAuditor = activeAuditor;
  }

  /**
   * Creates {@link Credential} from {@link TokenResponse}
   * @param tokenResponse
   * @return
   */
  public Credential createCredential(TokenResponse tokenResponse) {
    try {
      return createAuthCodeFlow().createAndStoreCredential(tokenResponse, "userID");
    } catch (IOException e) {
      Utils.handleException(LOG, GENERAL_ERROR_MSG, e);
    }

    return null;
  }

  /**
   * Creates the actual calendar event
   * @param vacation
   */
  public void createEvent(final Vacation vacation) {

    final Event event = new Event()
            .setSummary(CALENDAR_EVENT_SUMMARY)
            .setLocation(CALENDAR_EVENT_LOCATION)
            .setDescription(String.format(CALENDAR_EVENT_DESCRIPTION, vacation.getUser().getFullName()));

    final EventDateTime startTime =
            localDateTime2EventDateTime(vacation.getStartTime(), ZoneOffset.UTC, TIME_ZONE_LOS_ANGELES);
    final EventDateTime endTime =
            localDateTime2EventDateTime(vacation.getEndTime(), ZoneOffset.UTC, TIME_ZONE_LOS_ANGELES);
    event.setStart(startTime);
    event.setEnd(endTime);

    //      String[] recurrence = new String[]{"RRULE:FREQ=DAILY;COUNT=2"};
    //      event.setRecurrence(Arrays.asList(recurrence));

    final EventAttendee managerAttendee = new EventAttendee().setEmail(vacation.getAssignedApproverEmail());
    final EventAttendee staffAttendee = new EventAttendee().setEmail(vacation.getUser().getEmail());
    final EventAttendee vaCalendarAttendee = new EventAttendee().setEmail(activeAuditor.getDefaultUser().getEmail());
    event.setAttendees(Arrays.asList(managerAttendee, staffAttendee, vaCalendarAttendee));

    final EventReminder[] reminderOverrides =
            new EventReminder[]{
                    new EventReminder().setMethod("popup").setMinutes(2 * 24 * 60),
                    new EventReminder().setMethod("email").setMinutes(24 * 60),
                    new EventReminder().setMethod("popup").setMinutes(60),
                    new EventReminder().setMethod("email").setMinutes(30),
                    new EventReminder().setMethod("popup").setMinutes(10)};

    final Event.Reminders reminders =
            new Event.Reminders().setUseDefault(false).setOverrides(Arrays.asList(reminderOverrides));
    event.setReminders(reminders);

    try {
      buildCalendarApiClient().events().insert(CALENDAR_ID, event).setSendNotifications(true).execute();
    } catch (IOException e) {
      final String errMsg = "Unable to send Calendar notification.";
      LOG.info(errMsg);
      LOG.trace(errMsg + " Trace: {}", e);
      throw new RuntimeException(errMsg);
    }

  }

  private static EventDateTime localDateTime2EventDateTime(
          final LocalDateTime localDateTime,
          final ZoneOffset timeZoneOffset,
          final String timeZone) {
    Instant instant = localDateTime.toInstant(timeZoneOffset);
    DateTime dateTime = new DateTime(Date.from(instant));
    return new EventDateTime().setDateTime(dateTime).setTimeZone(timeZone);
  }

  private com.google.api.services.calendar.Calendar buildCalendarApiClient() {
    final TokenResponse tokenResponse = activeAuditor.getUser().getTokenResponseObj();
    final Credential credential = createCredential(tokenResponse);
    return new com.google.api.services.calendar.Calendar.Builder(httpTransport, JSON_FACTORY, credential)
            .setApplicationName(APPLICATION_NAME).build();
  }

  public String buildAuthUrl() {
    return createAuthCodeFlow()
            .newAuthorizationUrl()
            .setRedirectUri(appConfig.getGoogleRedirectURI())
            .build().replace("%2B", "+");
  }

  public GoogleAuthorizationCodeFlow createAuthCodeFlow() {
    try {
      if (authorizationCodeFlow == null) {
        GoogleClientSecrets.Details web = new GoogleClientSecrets.Details()
                .setAuthUri(appConfig.getGoogleUserAuthURI())
                .setClientId(appConfig.getGoogleClientId())
                .setClientSecret(appConfig.getGoogleClientSecret());

        final GoogleClientSecrets clientSecrets = new GoogleClientSecrets().setWeb(web);
        httpTransport = GoogleNetHttpTransport.newTrustedTransport();
        authorizationCodeFlow = new GoogleAuthorizationCodeFlow
                .Builder(httpTransport, JSON_FACTORY, clientSecrets, Collections.unmodifiableCollection(getScope()))
                .build();
      }
    } catch (GeneralSecurityException | IOException e) {
      Utils.handleException(LOG, GENERAL_ERROR_MSG, e);
    }
    return authorizationCodeFlow;
  }

  public List<String> getScope() {
    String scope = appConfig.getGoogleClientScope()
            .replace(",", "+").replace(" ", "");

    return Collections.unmodifiableList(Arrays.asList(scope));
  }

  public Set<Event> getEvents() throws IOException {
    return this.events;
  }

  public void setEvents(final Set<Event> events) {
    this.events = events;
  }
}
