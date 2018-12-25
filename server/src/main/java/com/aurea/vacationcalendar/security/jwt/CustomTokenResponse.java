package com.aurea.vacationcalendar.security.jwt;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.google.api.client.auth.oauth2.TokenResponse;
import lombok.Getter;
import lombok.Setter;

/**
 *  Just a helper class to help deserialize {@link com.google.api.client.auth.oauth2.TokenResponse}
 */
@Getter
@Setter
@JsonIgnoreProperties (ignoreUnknown = true)
public class CustomTokenResponse {
  private String id_token;
  private String access_token;

  private String token_type;

  private Long expires_in;

  private String refresh_token;

  private String scope;

  public TokenResponse buildTokenResponse() {
    return new TokenResponse()
            .setAccessToken(getAccess_token())
            .setTokenType(getToken_type())
            .setExpiresInSeconds(getExpires_in())
            .setRefreshToken(getRefresh_token())
            .setScope(getScope())
            .set("id_token", getId_token());
  }
}
