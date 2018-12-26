FROM openjdk:8-jdk-alpine
MAINTAINER Kingsley Ezenwere <kingsley.ezenwere@aurea.com>
RUN  apk update && apk upgrade
RUN mkdir -p /usr/local/vacalendar
RUN echo $JAVA_HOME
ADD  target/vaCalendar.jar /usr/local/vacalendar
ADD src/main/docker/run.sh run.sh
RUN chmod +x run.sh
CMD ./run.sh
