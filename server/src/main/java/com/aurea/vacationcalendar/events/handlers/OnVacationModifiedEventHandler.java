package com.aurea.vacationcalendar.events.handlers;

import com.aurea.vacationcalendar.domain.vacation.Vacation;
import com.aurea.vacationcalendar.domain.vacation.VacationService;
import com.aurea.vacationcalendar.events.EventObj;
import com.aurea.vacationcalendar.events.OnVacationModifiedEvent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

@Service
public class OnVacationModifiedEventHandler implements ApplicationListener<OnVacationModifiedEvent> {

    private final SimpMessagingTemplate simpMessagingTemplate;
    private final VacationService vacationService;

    @Autowired
    public OnVacationModifiedEventHandler(final SimpMessagingTemplate simpMessagingTemplate,
                                          final VacationService vacationService) {
        this.simpMessagingTemplate = simpMessagingTemplate;
        this.vacationService = vacationService;
    }

    @Override
    public void onApplicationEvent(final OnVacationModifiedEvent e) {
        setCalendarNotifications(e);
        reportEvent(e);
    }

    private void setCalendarNotifications(final OnVacationModifiedEvent e) {
        vacationService.calendarNotify((Vacation) e.getEventObj().getObject());
    }
    private void reportEvent(final OnVacationModifiedEvent e) {
        EventObj eventObj = e.getEventObj().annulObj(); // DON'T SEND OBJ, SET TO NULL

        simpMessagingTemplate.convertAndSend("/topic/vacations/modified", eventObj);
    }
}