package com.aurea.vacationcalendar.util;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

import com.aurea.vacationcalendar.domain.user.User;
import com.aurea.vacationcalendar.security.jwt.CustomTokenResponse;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.api.client.auth.oauth2.TokenResponse;
import org.apache.commons.logging.Log;

public final class Utils {

  private Utils() {
    throw new UnsupportedOperationException("This class cannot be instantiated!");
  }

  public static String getRequestUrl(final HttpServletRequest request) {
    return request.getRequestURL().toString();
  }


  public static String objToJsonString(final Object obj) {
    try {
      return new ObjectMapper().findAndRegisterModules().writeValueAsString(obj);
    } catch (JsonProcessingException e) {
      throw new RuntimeException("Unable to parse request.", e);
    }
  }

  public static User jsonString2UserObj(final String str) {
    try {
      return new ObjectMapper().findAndRegisterModules().readValue(str, new TypeReference<User>() {});
    } catch (IOException e) {
      throw new RuntimeException("Unable to parse request.", e);
    }
  }

  public static TokenResponse jsonString2TokenResponseObj(String tokenResponseStr) {
    try {
      return ((CustomTokenResponse)
              new ObjectMapper().findAndRegisterModules().readValue(tokenResponseStr,
                      new TypeReference<CustomTokenResponse>() {})).buildTokenResponse();
    } catch (IOException e) {
      throw new RuntimeException("Unable to parse request.", e);
    }
  }

  public static void handleException(final Log LOG, final String errMsg, final Exception exc){
    LOG.info(errMsg);
    LOG.trace(errMsg + " Trace: {}", exc);
    throw new RuntimeException(errMsg);
  }
}
