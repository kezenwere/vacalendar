package com.aurea.vacationcalendar.security.auth;

import com.aurea.vacationcalendar.domain.user.User;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@JsonIgnoreProperties (ignoreUnknown = true)
@JsonInclude (JsonInclude.Include.NON_NULL)
public class AuthSuccessToken {
    private String jwtToken;
    private String access_token;
    private String token_type;
    private String refresh_token;
    private long expires_in;
    private String scope;
    private String organizationId;
    private String jti;
    private User user;

    public AuthSuccessToken(
            final String jwtToken,
            final User user) {
        this.jwtToken = jwtToken;
        this.user = user;
    }
}
