package com.aurea.vacationcalendar.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus (HttpStatus.NOT_FOUND)
public class RequestedContentNotFoundException extends RuntimeException {

    public RequestedContentNotFoundException(String message) {
        super(message);
    }
}