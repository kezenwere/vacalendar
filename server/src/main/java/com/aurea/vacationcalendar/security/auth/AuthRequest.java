package com.aurea.vacationcalendar.security.auth;

import com.aurea.vacationcalendar.domain.user.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Getter
@ToString
@NoArgsConstructor
public class AuthRequest {
    private String client;
    private String clientSecret;
    private String grant_type;
    private String scope;
    private String refresh_token;
    private User user;

}
