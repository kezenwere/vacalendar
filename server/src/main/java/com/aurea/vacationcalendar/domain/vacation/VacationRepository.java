package com.aurea.vacationcalendar.domain.vacation;

import com.aurea.vacationcalendar.domain.abstraction.abstractservice.AbstractDao;
import com.aurea.vacationcalendar.domain.user.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface VacationRepository extends AbstractDao<Vacation> {
  Page<Vacation> findByDeletedFalse(Pageable pageable);
//
//  @Query("SELECT v FROM Vacation v WHERE v.deleted = false AND (v.rejected = true OR v.approved = true OR v.expired = true) AND ")
//  Page<Vacation> findByDeleted(@Param ("user") User user, @Param ("userEmail") String userEmail, Pageable pageable);
}
