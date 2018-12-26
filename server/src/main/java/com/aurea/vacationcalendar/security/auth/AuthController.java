package com.aurea.vacationcalendar.security.auth;

import static com.aurea.vacationcalendar.util.Utils.ORG_ID;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.Arrays;

import com.aurea.vacationcalendar.config.AppConfig;
import com.aurea.vacationcalendar.domain.ServerResponse;
import com.aurea.vacationcalendar.domain.user.UserService;
import com.aurea.vacationcalendar.security.jwt.JwtUtil;
import com.aurea.vacationcalendar.util.Utils;
import com.google.api.client.auth.oauth2.TokenResponse;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping ("v1/auth")
public class AuthController {
  private final static Log LOG = LogFactory.getLog(AuthController.class);
  private final JwtUtil jwtUtil;
  private final AppConfig appConfig;
  private final UserService userService;
  private final GoogleApiService googleApiService;
  private ServerResponse sResponse;
  private TokenResponse tokenResponse;

  @Autowired
  public AuthController(
          JwtUtil jwtUtil,
          AppConfig appConfig,
          UserService userService,
          GoogleApiService googleApiService) {
    this.jwtUtil = jwtUtil;
    this.appConfig = appConfig;
    this.userService = userService;
    this.googleApiService = googleApiService;
  }

  /**
   * Returns the prepared Google Api Authorization Code Request URI
   *
   * @param request
   *
   * @return
   *
   * @throws Exception
   */
  @GetMapping ("google")
  public ResponseEntity<ServerResponse> getAuthRequestUri(final HttpServletRequest request) {

    sResponse = new ServerResponse(googleApiService.buildAuthUrl(), request);

    return new ResponseEntity<>(sResponse, HttpStatus.OK);
  }

  /**
   * Gets Auth Code from Google Api and builds credential
   *
   * @param authCode
   * @param request
   *
   * @return
   *
   * @throws IOException
   */
  @GetMapping ("auth-code")
  public ResponseEntity<ServerResponse> buildJwt(
          final @RequestParam ("authCode") String authCode,
          final HttpServletRequest request){
    try {

      tokenResponse = googleApiService.createAuthCodeFlow()
              .newTokenRequest(authCode)
              .setRedirectUri(appConfig.getGoogleRedirectURI())
              .setScopes(Arrays.asList("profile")) // Just a Dummy, don't remove
              .execute();

    } catch (IOException e) {
      Utils.handleException(LOG, "Unable to complete authentication.", e);
    }

    AuthSuccessToken authSuccessToken = googleApiService.buildAuthSuccessToken(tokenResponse);
    sResponse = new ServerResponse(authSuccessToken, request);

    return new ResponseEntity<>(sResponse, HttpStatus.OK);
  }

  /**
   * Refreshes an expired token
   *
   * @param authRequest
   * @param request
   *
   * @return
   */
  @PostMapping ("refresh")
  public ResponseEntity<ServerResponse> refreshToken(
          final @RequestBody AuthRequest authRequest, final HttpServletRequest request) {

    final String jwtToken = jwtUtil.createJwtToken(authRequest.getRefresh_token());
    final AuthSuccessToken authSuccessToken = new AuthSuccessToken(jwtToken, authRequest.getUser());

    authSuccessToken.setOrganizationId(ORG_ID);
    sResponse = new ServerResponse(authSuccessToken, request);

    return new ResponseEntity<>(sResponse, HttpStatus.OK);
  }
}