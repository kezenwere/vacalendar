package com.aurea.vacationcalendar.domain.vacation;

import com.aurea.vacationcalendar.domain.abstraction.abstractservice.AbstractService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public abstract class VacationService extends AbstractService<Vacation, VacationRepository> {
  public abstract Vacation reject(String vacationId);

  public abstract Vacation approve(String vacationId);

  public abstract Page<Vacation> getAllNonDeletedPaginated(Pageable pageable);

  public abstract void calendarNotify(Vacation vacation);
}
