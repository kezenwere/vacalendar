# Innovation Task Submission (Kingsley Ezenwere)
## Server: This project is the backend RESTful Service for vaCalendar, the Vacation Calendar. 


## Core Features
Request a vacation:
Edit or Delete vacation: 
Approve or Reject vacation: 
Sends Google Calendar Notification: 


## Other Feature 
* API Documentation with Swagger2
    * Available at the base url (/api-doc)
* Database migration with liquibase


## System Requirements
* Java 8
* Mysql >= 5.6
* Maven >= 3.5

## Before Building and Running the application
* Make sure to move the built frontend artifacts to the "src/main/resources/static" folder
* Change the file "src/main/resources/templates/index.html" with the "index.html" from the built frontend artifacts
* Change the database connection details accordingly in the file "src/main/resources/application.yml"
## Building and Running the application
* Once in the project folder, run the following, in the given order.
  
       // TO BUILD
       > mvn clean process-resources package
       
       // TO RUN (Follow any of the two. No.2 require Docker to be running on your loal system)
       1. > java -jar target/vaCalendar.jar
       2. > docker-compose -f docker/common/docker-compose.yml up
       
       // TO Web View (On your browser)
       http://localhost:9000