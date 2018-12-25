package com.aurea.vacationcalendar.exception;

import com.aurea.vacationcalendar.domain.ServerResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice ()
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {

    private ServerResponse sResponse;

    @ExceptionHandler (value = {
            RuntimeException.class
    })
    protected ResponseEntity<ServerResponse> handleServerException(RuntimeException ex) {
        Error error = new Error(ex.getMessage());

        sResponse = new ServerResponse(error);
        return new ResponseEntity<>(sResponse, HttpStatus.EXPECTATION_FAILED);
    }
}