package com.aurea.vacationcalendar.config;

import lombok.Getter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;

@Configuration
@Getter
public class AppConfig {
    // JWT
    @Value ("${jwt.signing.key}")
    private String jwtSigningKey;
    @Value ("${jwt.header}")
    private String jwtHeaderParamKey;
    @Value ("${jwt.prefix}")
    private String jwtPrefix;

    // GOOGLE
    @Value ("${google.client.client-id}")
    private String googleClientId;
    @Value ("${google.client.client-secret}")
    private String googleClientSecret;
    @Value ("${google.client.redirectUri}")
    private String googleRedirectURI;
    @Value ("${google.client.user-authorization-uri}")
    private String googleUserAuthURI;
    @Value ("${google.client.scope}")
    private String googleClientScope;
}
