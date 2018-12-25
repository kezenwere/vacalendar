package com.aurea.vacationcalendar.security;

import java.util.Optional;

import com.aurea.vacationcalendar.domain.user.User;
import org.springframework.data.domain.AuditorAware;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.context.annotation.RequestScope;

@Component
public class ActiveAuditor implements AuditorAware<String> {

  public boolean isAuthenticated() {
    final Authentication authentication = getCurrentAuthentication();
    if (authentication != null) {
      return authentication.isAuthenticated();
    }

    return false;
  }

  public Authentication getCurrentAuthentication() {
    final SecurityContext securityContext = SecurityContextHolder.getContext();
    final Authentication authentication = securityContext.getAuthentication();

    return authentication;
  }

  @Override
  public Optional<String> getCurrentAuditor() {
    return Optional.of(getUserName());
  }

  public String getUserName() {
    if (getUser() != null) {
      return getUser().getEmail();
    }

    return "";
  }

  public User getUser() {
    final Authentication authentication = getCurrentAuthentication();
    if (authentication != null && authentication.getDetails() instanceof User) {
      User user = (User) authentication.getDetails();

      return user;
    }

    return getDefaultUser();
  }

  public User getDefaultUser() {
    final User user = new User();
    user.setLastName("vaCalendar");
    user.setFirstName("Aurea");
    user.setEmail("vacalendar@aurea.com");

    return user;
  }
}
