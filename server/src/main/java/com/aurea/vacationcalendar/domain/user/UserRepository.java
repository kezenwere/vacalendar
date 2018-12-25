package com.aurea.vacationcalendar.domain.user;

import com.aurea.vacationcalendar.domain.abstraction.abstractservice.AbstractRepository;

public interface UserRepository extends AbstractRepository<User> {
  User findByExtId(String extId);
  User findByEmail(String email);
}
