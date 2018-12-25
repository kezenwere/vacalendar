package com.aurea.vacationcalendar.domain.vacation;

import javax.servlet.http.HttpServletRequest;
import java.util.Optional;

import com.aurea.vacationcalendar.domain.ServerResponse;
import com.aurea.vacationcalendar.events.EventObj;
import com.aurea.vacationcalendar.events.OnVacationModifiedEvent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping ("v1/vacations")
public class VacationController {
  private final VacationService vacationService;
  private final ApplicationEventPublisher eventPublisher;
  private static ServerResponse sResponse;
  private final static String VACATION_ID_VAR_NAME = "vacationId";
  private final static String VACATION_ID_VAR_NAME_INTERPOLATION = "{vacationId}";
  private final static String VACATION_APPROVE_API = VACATION_ID_VAR_NAME_INTERPOLATION + "/approve";
  private final static String VACATION_REJECT_API = VACATION_ID_VAR_NAME_INTERPOLATION + "/reject";

  @Autowired
  public VacationController(VacationService vacationService, ApplicationEventPublisher eventPublisher) {
    this.vacationService = vacationService;
    this.eventPublisher = eventPublisher;
  }
  ///////////// CREATE ///////////////////////////////////////////////////////////////////////////////////
  @PostMapping ()
  public ResponseEntity<ServerResponse> create(
          @RequestBody Vacation vacation,
          final HttpServletRequest request) {

    final Vacation _vacation = vacationService.create(vacation);

        eventPublisher.publishEvent(
                new OnVacationModifiedEvent(
                        new EventObj(EventObj.EventType.CREATE, _vacation), this.getClass()));

    sResponse = new ServerResponse(_vacation, request);

    return new ResponseEntity<>(sResponse, HttpStatus.CREATED);
  }

  ///////////// READ   ///////////////////////////////////////////////////////////////////////////////////
  @GetMapping ()
  public ResponseEntity<ServerResponse> getAll(
          final @PageableDefault (page = 0,size = 100) Pageable pageable,
          final HttpServletRequest request) {
    final Page<Vacation> vacationList = vacationService.getAllNonDeletedPaginated(pageable);

    sResponse = new ServerResponse(vacationList, request);

    return new ResponseEntity<>(sResponse, HttpStatus.OK);
  }

  @GetMapping(VACATION_ID_VAR_NAME_INTERPOLATION)
  public ResponseEntity<ServerResponse> getById(
          final @PathVariable (VACATION_ID_VAR_NAME) String vacationId,
          final HttpServletRequest request) {

    final Optional<Vacation> vacationOptional = vacationService.getById(vacationId);

    if (vacationOptional.isPresent()) {
      sResponse = new ServerResponse(vacationOptional.get(), request);
      return new ResponseEntity<>(sResponse, HttpStatus.OK);
    }else {
      return new ResponseEntity<>(sResponse, HttpStatus.NOT_FOUND);
    }

  }

  ///////////// UPDATE ///////////////////////////////////////////////////////////////////////////////////
  @PutMapping (VACATION_ID_VAR_NAME_INTERPOLATION)
  public ResponseEntity<ServerResponse> update(
          final @PathVariable(VACATION_ID_VAR_NAME) String vacationId,
          final @RequestBody Vacation vacation,
          final HttpServletRequest request) {

    final Vacation updatedVacation = vacationService.update(vacationId, vacation);
        eventPublisher.publishEvent(
                new OnVacationModifiedEvent(
                        new EventObj(EventObj.EventType.UPDATE, updatedVacation), this.getClass()));

    sResponse = new ServerResponse(updatedVacation, request);

    return new ResponseEntity<>(sResponse, HttpStatus.OK);
  }

  @PutMapping (VACATION_APPROVE_API)
  public ResponseEntity<ServerResponse> approve(
          final @PathVariable(VACATION_ID_VAR_NAME) String vacationId,
          final HttpServletRequest request) {

    final Vacation updatedVacation = vacationService.approve(vacationId);
        eventPublisher.publishEvent(
                new OnVacationModifiedEvent(
                        new EventObj(EventObj.EventType.APPROVE, updatedVacation), this.getClass()));

    sResponse = new ServerResponse(updatedVacation, request);

    return new ResponseEntity<>(sResponse, HttpStatus.OK);
  }

  @PutMapping (VACATION_REJECT_API)
  public ResponseEntity<ServerResponse> reject(
          final @PathVariable(VACATION_ID_VAR_NAME) String vacationId,
          final HttpServletRequest request) {

    final Vacation updatedVacation = vacationService.reject(vacationId);
        eventPublisher.publishEvent(
                new OnVacationModifiedEvent(
                        new EventObj(EventObj.EventType.REJECT, updatedVacation), this.getClass()));

    sResponse = new ServerResponse(updatedVacation, request);

    return new ResponseEntity<>(sResponse, HttpStatus.OK);
  }
  ///////////// DELETE ///////////////////////////////////////////////////////////////////////////////////
  @DeleteMapping (VACATION_ID_VAR_NAME_INTERPOLATION)
  public ResponseEntity<ServerResponse> delete(
          final @PathVariable(VACATION_ID_VAR_NAME) String vacationId,
          final HttpServletRequest request) {

    final Optional<Vacation> vacationOptional = vacationService.delete(vacationId);
        eventPublisher.publishEvent(
                new OnVacationModifiedEvent(
                        new EventObj(EventObj.EventType.DELETE, vacationOptional.get()), this.getClass()));

    sResponse = new ServerResponse(vacationOptional.get(), request);

    return new ResponseEntity<>(sResponse, HttpStatus.OK);
  }
}
