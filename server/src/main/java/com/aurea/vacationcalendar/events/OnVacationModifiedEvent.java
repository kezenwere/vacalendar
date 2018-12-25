package com.aurea.vacationcalendar.events;

import org.springframework.context.ApplicationEvent;

public class OnVacationModifiedEvent extends ApplicationEvent {
    private EventObj eventObj;

    public OnVacationModifiedEvent(EventObj eventObj, Object source) {
        super(source);
        this.eventObj = eventObj;
    }

    public EventObj getEventObj() {
        return eventObj;
    }
}
