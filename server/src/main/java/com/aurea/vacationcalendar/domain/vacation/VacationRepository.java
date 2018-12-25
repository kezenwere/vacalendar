package com.aurea.vacationcalendar.domain.vacation;

import com.aurea.vacationcalendar.domain.abstraction.abstractservice.AbstractRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface VacationRepository extends AbstractRepository<Vacation> {
  Page<Vacation> findByDeletedFalse(Pageable pageable);
}
