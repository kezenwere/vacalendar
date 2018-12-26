package com.aurea.vacationcalendar.domain.user;

import com.aurea.vacationcalendar.domain.common.abstractservice.AbstractService;
import com.google.api.client.auth.oauth2.Credential;

public abstract class UserService extends AbstractService<User, UserRepository> {
  public abstract User getByExtId(String extId);
  public abstract User createIfNotExisted(Credential credential, String tokenResponseStr);
  public abstract User getByEmail(String email);
}
