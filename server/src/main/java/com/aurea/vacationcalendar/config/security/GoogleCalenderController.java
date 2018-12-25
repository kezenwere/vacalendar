//package com.aurea.vacationcalendar.config.security;
//
//import com.google.api.client.auth.oauth2.AuthorizationCodeRequestUrl;
//import com.google.api.client.auth.oauth2.Credential;
//import com.google.api.client.auth.oauth2.StoredCredential;
//import com.google.api.client.auth.oauth2.TokenResponse;
//import com.google.api.client.googleapis.auth.oauth2.GoogleAuthorizationCodeFlow;
//import com.google.api.client.googleapis.auth.oauth2.GoogleClientSecrets;
//import com.google.api.client.googleapis.auth.oauth2.GoogleClientSecrets.Details;
//import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport;
//import com.google.api.client.http.HttpTransport;
//import com.google.api.client.json.JsonFactory;
//import com.google.api.client.json.jackson2.JacksonFactory;
//import com.google.api.client.util.DateTime;
//import com.google.api.services.calendar.CalendarScopes;
//import com.google.api.services.calendar.model.Event;
//import com.google.api.services.calendar.model.Event.Reminders;
//import com.google.api.services.calendar.model.EventAttendee;
//import com.google.api.services.calendar.model.EventDateTime;
//import com.google.api.services.calendar.model.EventReminder;
//
//import java.io.IOException;
//import java.util.Arrays;
//import java.util.Collections;
//import java.util.Date;
//import java.util.HashSet;
//import java.util.Set;
//import javax.servlet.http.HttpServletRequest;
//
//import org.apache.commons.logging.Log;
//import org.apache.commons.logging.LogFactory;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.http.ResponseEntity;
//import org.springframework.stereotype.Controller;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMethod;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RestController;
//import org.springframework.web.servlet.view.RedirectView;
//
//@RestController
//@RequestMapping
//public class GoogleCalenderController {
//
//  private final static Log logger = LogFactory.getLog(GoogleCalenderController.class);
//  private static final String APPLICATION_NAME = "CalenderNotifier";
//  private static final JsonFactory JSON_FACTORY = JacksonFactory.getDefaultInstance();
//  private static HttpTransport httpTransport;
//
//  @Autowired
//  private static com.google.api.services.calendar.Calendar client;
//  final DateTime date1 = new DateTime("2017-05-05T16:30:00.000+05:30");
//  final DateTime date2 = new DateTime(new Date());
//  GoogleClientSecrets clientSecrets;
//  GoogleAuthorizationCodeFlow flow;
//  Credential credential;
//  @Value ("${google.client.client-id}")
//  private String clientId;
//  @Value ("${google.client.client-secret}")
//  private String clientSecret;
//  @Value ("${google.client.redirectUri}")
//  private String redirectURI;
//  private Set<Event> events = new HashSet<>();
//
//  public GoogleCalenderController() throws Exception {
//
//  }
//
//  @GetMapping ("/login/google")
//  public RedirectView googleConnectionStatus(HttpServletRequest request) throws Exception {
//    String authorize = authorize();
//    return new RedirectView(authorize);
//  }
//
//  private String authorize() throws Exception {
//    AuthorizationCodeRequestUrl authorizationUrl;
//    flow = createFlow();
//    authorizationUrl = flow.newAuthorizationUrl().setRedirectUri(redirectURI);
//    logger.debug("cal authorizationUrl->" + authorizationUrl);
//    return authorizationUrl.build();
//  }
//
//  private GoogleAuthorizationCodeFlow createFlow() throws Exception {
//    if (flow == null) {
//      Details web = new Details();
//      web.setClientId(clientId);
//      web.setClientSecret(clientSecret);
//      clientSecrets = new GoogleClientSecrets().setWeb(web);
//      httpTransport = GoogleNetHttpTransport.newTrustedTransport();
//      flow = new GoogleAuthorizationCodeFlow.Builder(httpTransport, JSON_FACTORY, clientSecrets, Collections.singleton(CalendarScopes.CALENDAR)).build();
//    }
//    return flow;
//  }
//
//  @RequestMapping (value = "/login/google", method = RequestMethod.GET, params = "code")
//  public ResponseEntity<String> oauth2Callback(@RequestParam (value = "code") String code) {
//    com.google.api.services.calendar.model.Events eventList;
//    String message;
//    try {
//      TokenResponse response = flow.newTokenRequest(code).setRedirectUri(redirectURI).execute();
//      credential = flow.createAndStoreCredential(response, "userID");
//      client = new com.google.api.services.calendar.Calendar.Builder(httpTransport, JSON_FACTORY, credential).setApplicationName(APPLICATION_NAME).build();
//      //            Events events = client.events();
//      //            eventList = events.list("primary").setTimeMin(date1).setTimeMax(date2).execute();
//      //            message = eventList.getItems().toString();
//      //            logger.debug("My:" + eventList.getItems());
//    } catch (Exception e) {
//      logger.warn("Exception while handling OAuth2 callback (" + e.getMessage() + ")." + " Redirecting to google connection status page.");
//      message = "Exception while handling OAuth2 callback (" + e.getMessage() + ")." + " Redirecting to google connection status page.";
//    }
//
//    //        logger.debug("cal message:" + message);
//    //        return new ResponseEntity<>(message, HttpStatus.OK);
//    return ResponseEntity.ok("Authenticated Successfully");
//  }
//
//  @RequestMapping (value = "/api/google/calender", method = RequestMethod.GET, params = "code")
//  public void createEvent(@RequestParam (value = "code") String code) throws Exception {
//
//    Event event = new Event().setSummary("Testing Meeting").setLocation("5 Ayetoro St.,Ajah, Lagos Nigeria").setDescription("A chance to hear more about Google's developer products.");
//
//    DateTime startDateTime = new DateTime("2018-12-22T00:00:00-00:00");
//    EventDateTime start = new EventDateTime().setDateTime(startDateTime).setTimeZone("America/Los_Angeles");
//    event.setStart(start);
//
//    DateTime endDateTime = new DateTime("2018-12-27T00:30:00-00:00");
//    EventDateTime end = new EventDateTime().setDateTime(endDateTime).setTimeZone("America/Los_Angeles");
//    event.setEnd(end);
//
//    String[] recurrence = new String[]{"RRULE:FREQ=DAILY;COUNT=2"};
//    event.setRecurrence(Arrays.asList(recurrence));
//
//    EventAttendee eventAttendee = new EventAttendee().setEmail("kingsley.ezenwere@gmail.com");
//    EventAttendee[] attendees = new EventAttendee[]{new EventAttendee().setEmail("kingsley.ezenwere@gmail.com"), new EventAttendee().setEmail("maryannbnj@gmail.com"), new EventAttendee().setEmail("cykeromens@gmail.com"),};
//    event.setAttendees(Arrays.asList(attendees));
//
//    EventReminder[] reminderOverrides = new EventReminder[]{new EventReminder().setMethod("popup").setMinutes(2 * 24 * 60), new EventReminder().setMethod("email").setMinutes(24 * 60), new EventReminder().setMethod("popup").setMinutes(60), new EventReminder().setMethod("email").setMinutes(30), new EventReminder().setMethod("popup").setMinutes(10),};
//    Event.Reminders reminders = new Event.Reminders().setUseDefault(false).setOverrides(Arrays.asList(reminderOverrides));
//    event.setReminders(reminders);
//
//    String calendarId = "primary";
//    event = client.events().insert(calendarId, event).execute();
//    System.out.printf("Event created: %s\n", event.getHtmlLink());
//  }
//
//  public Set<Event> getEvents() throws IOException {
//    return this.events;
//  }
//
//  public void setEvents(Set<Event> events) {
//    this.events = events;
//  }
//
//}