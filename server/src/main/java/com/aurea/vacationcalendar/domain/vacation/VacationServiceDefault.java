package com.aurea.vacationcalendar.domain.vacation;

import java.time.LocalDateTime;
import java.util.Optional;

import com.aurea.vacationcalendar.domain.user.User;
import com.aurea.vacationcalendar.domain.user.UserService;
import com.aurea.vacationcalendar.security.ActiveAuditor;
import com.aurea.vacationcalendar.security.auth.GoogleApiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class VacationServiceDefault extends VacationService {

  private final static String CANT_MODIFY_STARTED = "You cannot modify a vacation that has started.";
  private final static String CANT_REJECT_APPROVED = "You cannot reject an already approved vacation.";
  private final static String CANT_APPROVE_REJECTED = "You cannot approve an already rejected vacation.";
  private final static String CANT_DELETE_STARTED_APPROVED_OR_REJECTED =
          "You cannot delete an already started, approved or rejected vacation.";

  private final VacationRepository vacationRepository;
  private final UserService userService;
  private final ActiveAuditor activeAuditor;
  private final GoogleApiService googleApiService;

  @Autowired
  public VacationServiceDefault(
          VacationRepository vacationRepository,
          UserService userService,
          ActiveAuditor activeAuditor,
          GoogleApiService googleApiService) {
    this.vacationRepository = vacationRepository;
    this.userService = userService;
    this.activeAuditor = activeAuditor;
    this.googleApiService = googleApiService;
  }

  @Override
  public Optional<Vacation> delete(String vacationId) {
    Vacation _vacation = getByIdOrThrow(vacationId).get();

    if (_vacation.getStartTime().isBefore(LocalDateTime.now()) ||
            _vacation.isApproved() ||
            _vacation.isRejected()){
      throw new UnsupportedOperationException(CANT_DELETE_STARTED_APPROVED_OR_REJECTED);
    }

    return super.delete(_vacation.getId());
  }

  @Override
  public Vacation create(final Vacation vacation) {
    User newUser = vacation.getUser();
    User existingUser = userService.getByExtId(newUser.getExtId());

    User user = null;
    if( existingUser == null){
      user = userService.create(newUser);
    } else {
      user = userService.update(existingUser.getId(), newUser);
    }

    vacation.setUser(user);
    vacation.setAssignedApproverEmail(user.getManagerEmail());
    return super.create(vacation);
  }

  @Override
  public Vacation update(final String vacationId, final Vacation vacation) {
    Vacation _vacation = getByIdOrThrow(vacationId).get();

    if (_vacation.getStartTime().isBefore(LocalDateTime.now())){
      throw new UnsupportedOperationException(CANT_MODIFY_STARTED);
    }

    User user = userService.upSert(vacation.getUser());
    vacation.setUser(user);

    _vacation.setAssignedApproverEmail(vacation.getAssignedApproverEmail());
    _vacation.setStartTime(vacation.getStartTime());
    _vacation.setEndTime(vacation.getEndTime());

    return super.update(_vacation);
  }

  @Override
  public Vacation reject(final String vacationId) {
    Vacation _vacation = getByIdOrThrow(vacationId).get();

    if (_vacation.isApproved()){
      throw new UnsupportedOperationException(CANT_REJECT_APPROVED);
    }

    if (activeAuditor.getCurrentAuditor().isPresent()){
      String activeUserEmail = activeAuditor.getCurrentAuditor().get();
      _vacation.setRejectedBy(activeUserEmail);
    }

    _vacation.setRejectedTime(LocalDateTime.now());

    _vacation.setRejected(true);
    return super.update(_vacation);
  }

  @Override
  public Vacation approve(final String vacationId) {
    Vacation _vacation = getByIdOrThrow(vacationId).get();

    if (_vacation.isRejected()){
      throw new UnsupportedOperationException(CANT_APPROVE_REJECTED);
    }

    if (activeAuditor.getCurrentAuditor().isPresent()){
      String activeUserEmail = activeAuditor.getCurrentAuditor().get();
      _vacation.setApprovedBy(activeUserEmail);
    }

    _vacation.setApprovedTime(LocalDateTime.now());
    _vacation.setApproved(true);
    return super.update(_vacation);
  }

  @Override
  public Page<Vacation > getAllNonDeletedPaginated(final Pageable pageable) {
    return vacationRepository.findByDeletedFalseOrderByStartTime(pageable);
  }

  @Override
  public void calendarNotify(final Vacation vacation) {
      googleApiService.createEvent(vacation);
  }
}
