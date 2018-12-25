package com.aurea.vacationcalendar.index;

import org.springframework.boot.web.server.ErrorPage;
import org.springframework.boot.web.server.WebServerFactoryCustomizer;
import org.springframework.boot.web.servlet.server.ConfigurableServletWebServerFactory;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;

@Configuration
public class RequestErrorRedirectConfig implements WebServerFactoryCustomizer<ConfigurableServletWebServerFactory> {

    @Override
    public void customize(final ConfigurableServletWebServerFactory factory) {
        factory.addErrorPages(new ErrorPage(HttpStatus.NOT_FOUND, "/index"));
        factory.addErrorPages(new ErrorPage(HttpStatus.UNAUTHORIZED, "/authorization-failure"));
        factory.addErrorPages(new ErrorPage(HttpStatus.FORBIDDEN, "/authorization-failure"));
        factory.addErrorPages(new ErrorPage(HttpStatus.METHOD_NOT_ALLOWED, "/authorization-failure"));
    }
}