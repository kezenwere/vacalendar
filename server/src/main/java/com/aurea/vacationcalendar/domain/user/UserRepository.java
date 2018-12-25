package com.aurea.vacationcalendar.domain.user;

import com.aurea.vacationcalendar.domain.abstraction.abstractservice.AbstractDao;

public interface UserRepository extends AbstractDao<User> {
  User findByExtId(String extId);
  User findByEmail(String email);
}
