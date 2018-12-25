package com.aurea.vacationcalendar.domain.user;

import java.io.IOException;

import com.aurea.vacationcalendar.util.Utils;
import com.google.api.client.auth.oauth2.Credential;
import com.google.api.services.oauth2.Oauth2;
import com.google.api.services.oauth2.model.Userinfoplus;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceDefault extends UserService {

  private static final Log LOG = LogFactory.getLog(UserServiceDefault.class);
  private final UserRepository userRepository;

  @Autowired
  public UserServiceDefault(UserRepository userRepository) {
    this.userRepository = userRepository;
  }

  @Override
  public User update(String userId, User user) {
    User existingUser = getByIdOrThrow(userId).get();
    existingUser.setFirstName(user.getFirstName());
    existingUser.setLastName(user.getLastName());
    existingUser.setEmail(user.getEmail());
    existingUser.setManagerEmail(user.getManagerEmail());

    return existingUser;
  }


  @Override
  public User createIfNotExisted(final Credential credential, String tokenResponseStr) {
    final User userInfo = getUserInfo(credential);
    final User existingUser = getByExtId(userInfo.getExtId());

    final User user = existingUser == null ? super.create(userInfo) : existingUser;

    user.setTokenResponse(tokenResponseStr);

    return user;
  }

  @Override
  public User getByExtId(final String extId) {
    return userRepository.findByExtId(extId);
  }

  @Override
  public User getByEmail(final String email) {
    return userRepository.findByEmail(email);
  }

  private User getUserInfo(final Credential credential){
    Userinfoplus userInfo = null;
    try {
      userInfo = getOauth2Service(credential).userinfo().get().execute();
    } catch (IOException e) {
      Utils.handleException(LOG, "Unable to construct user info.", e);
    }
    return new User(
            userInfo.getId(),
            userInfo.getEmail(),
            userInfo.getFamilyName(),
            userInfo.getGivenName(),
            userInfo.getName()
    );
  }

  private Oauth2 getOauth2Service(final Credential credential) {
    return new Oauth2.Builder(credential.getTransport(), credential.getJsonFactory(), credential)
            .setApplicationName("vaCalendar").build();
  }
}
