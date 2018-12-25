package com.aurea.vacationcalendar.events;

public class EventObj {
    private String entity;
    private EventType eventType;
    private Object object;

    public EventObj(EventType eventType, Object object) {
        this.entity = object != null ? object.getClass().getSimpleName() : "";
        this.eventType = eventType;
        this.object = object;
    }

    public String getEntity() {
        return entity;
    }

    public EventType getEventType() {
        return eventType;
    }

    public Object getObject() {
        return object;
    }

    public EventObj annulObj() {
        this.object = null;

        return this;
    }

    @Override
    public String toString() {
        return "EventObj{" +
                "entity='" + entity + '\'' +
                ", eventType='" + eventType + '\'' +
                '}';
    }

    public enum EventType {
        CREATE("CREATE"),
        READ("READ"),
        UPDATE("UPDATE"),
        DELETE("DELETE"),
        APPROVE("APPROVE"),
        REJECT("REJECT");

        private String type;

        EventType(String type) {
            this.type = type;
        }

        public String getType() {
            return type;
        }
    }
}