package com.aurea.vacationcalendar.domain.user;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Optional;

import com.aurea.vacationcalendar.domain.ServerResponse;
import com.aurea.vacationcalendar.domain.user.User;
import com.aurea.vacationcalendar.util.Utils;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.hateoas.Link;
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
@RequestMapping ("v1/users")
@Api (value="Users", description="Operations pertaining to users.")
public class UserController {
  private final UserService userService;
  private final ApplicationEventPublisher eventPublisher;
  private ServerResponse sResponse;

  @Autowired
  public UserController(final UserService userService, final ApplicationEventPublisher eventPublisher) {
    this.userService = userService;
    this.eventPublisher = eventPublisher;
  }
  ///////////// CREATE ///////////////////////////////////////////////////////////////////////////////////
  @PostMapping ()
  public ResponseEntity<ServerResponse> create(final @RequestBody User user, final HttpServletRequest request) {

    User _user = userService.create(user);

    //    eventPublisher.publishEvent(new OnUsersModifiedEvent(new EventObj(EventObj.EventType.CREATE.getType(), _user), this.getClass()));

    sResponse = new ServerResponse(_user, request);

    return new ResponseEntity<>(sResponse, HttpStatus.CREATED);
  }

  ///////////// READ   ///////////////////////////////////////////////////////////////////////////////////
  @GetMapping ()
  public ResponseEntity<ServerResponse> getAll(final HttpServletRequest request) {
    List<User> userList = userService.getAll();

    sResponse = new ServerResponse(userList, request);

    return new ResponseEntity<>(sResponse, HttpStatus.OK);
  }

  @GetMapping("{userId}")
  public ResponseEntity<ServerResponse> getById(final @PathVariable ("userId") String userId, final HttpServletRequest request) {
    Optional<User> userOptional = userService.getById(userId);

    if (userOptional.isPresent()) {
      sResponse = new ServerResponse(userOptional.get(), request);

      return new ResponseEntity<>(sResponse, HttpStatus.OK);
    }else {
      return new ResponseEntity<>(sResponse, HttpStatus.NOT_FOUND);
    }

  }
  ///////////// UPDATE ///////////////////////////////////////////////////////////////////////////////////
  @PutMapping ("{userId}")
  public ResponseEntity<ServerResponse> update(
          final @PathVariable("userId") String userId,
          final @RequestBody User user,
          final HttpServletRequest request) {

    User updatedUser = userService.update(userId, user);

    //    eventPublisher.publishEvent(new OnUsersModifiedEvent(new EventObj(EventObj.EventType.UPDATE.getType(), updatedUser), this.getClass()));

    sResponse = new ServerResponse(updatedUser, request);

    return new ResponseEntity<>(sResponse, HttpStatus.OK);
  }
  ///////////// DELETE ///////////////////////////////////////////////////////////////////////////////////
  @DeleteMapping ("{userId}")
  public ResponseEntity<ServerResponse> delete(
          final @PathVariable("userId") String userId,
          final HttpServletRequest request) {

    Optional<User> userOptional = userService.delete(userId);

    //    eventPublisher.publishEvent(new OnUsersModifiedEvent(new EventObj(EventObj.EventType.DELETE.getType(), deletedUser), this.getClass()));

    sResponse = new ServerResponse(userOptional.get(), request);

    return new ResponseEntity<>(sResponse, HttpStatus.OK);
  }
}
