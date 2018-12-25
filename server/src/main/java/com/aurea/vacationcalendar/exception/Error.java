package com.aurea.vacationcalendar.exception;

public class Error {

    private int status;
    private final String message;

    public Error(String message) {
        this.message = message;
    }

    public Error(int code, String message) {
        this(message);
        this.status = code;
    }

    public int getStatus() {
        return status;
    }

    public String getMessage() {
        return message;
    }
}