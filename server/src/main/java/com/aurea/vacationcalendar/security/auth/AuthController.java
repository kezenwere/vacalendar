package com.aurea.vacationcalendar.security.auth;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.Arrays;

import com.aurea.vacationcalendar.config.ServiceConfig;
import com.aurea.vacationcalendar.domain.ServerResponse;
import com.aurea.vacationcalendar.domain.user.User;
import com.aurea.vacationcalendar.domain.user.UserService;
import com.aurea.vacationcalendar.security.jwt.JwtUtil;
import com.aurea.vacationcalendar.util.GoogleApiUtil;
import com.aurea.vacationcalendar.util.Utils;
import com.google.api.client.auth.oauth2.Credential;
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
  private final static String ORG_ID = "aurea.com";
  private static com.google.api.services.calendar.Calendar client;
  private final JwtUtil jwtUtil;
  private final ServiceConfig serviceConfig;
  private final UserService userService;
  private final GoogleApiUtil googleApiUtil;
  private ServerResponse sResponse;
  private TokenResponse response;

  @Autowired
  public AuthController(
          JwtUtil jwtUtil,
          ServiceConfig serviceConfig,
          UserService userService,
          GoogleApiUtil googleApiUtil) {
    this.jwtUtil = jwtUtil;
    this.serviceConfig = serviceConfig;
    this.userService = userService;
    this.googleApiUtil = googleApiUtil;
  }

  /**
   * Returns the prepared Google Api Authorization Request URI
   *
   * @param request
   *
   * @return
   *
   * @throws Exception
   */
  @GetMapping ("google")
  public ResponseEntity<ServerResponse> getAuthRequestUri(final HttpServletRequest request) {

    sResponse = new ServerResponse(googleApiUtil.buildAuthUrl(), request);

    return new ResponseEntity<>(sResponse, HttpStatus.OK);
  }

  /**
   * Gets Auth Code from Google Api and builds credentials
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

      response = googleApiUtil.createAuthCodeFlow()
              .newTokenRequest(authCode)
              .setRedirectUri(serviceConfig.getGoogleRedirectURI())
              .setScopes(Arrays.asList("profile")) // Just a Dummy, don't remove
              .execute();
    } catch (IOException e) {
      String errMsg = "Unable to complete authentication.";
      LOG.info(errMsg);
      LOG.trace(errMsg + " Trace: {}", e);
      throw new RuntimeException(errMsg);
    }
    String tokenResponseStr = Utils.objToJsonString(response);

    final Credential credential = googleApiUtil.createCredential(response);
    final User user = userService.createIfNotExisted(credential, tokenResponseStr);

    TokenResponse tokenResponse = Utils.jsonString2TokenResponseObj(tokenResponseStr);
    AuthSuccessToken authSuccessToken = new AuthSuccessToken(JwtUtil.createJwtTokenObjParam(response), user);

    authSuccessToken.setOrganizationId(ORG_ID);
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
  public ResponseEntity<ServerResponse> refreshToken(final @RequestBody AuthRequest authRequest, final HttpServletRequest request) {

    final String jwtToken = jwtUtil.createJwtToken(authRequest.getRefresh_token());
    final AuthSuccessToken authSuccessToken = new AuthSuccessToken(jwtToken, authRequest.getUser());

    authSuccessToken.setOrganizationId(ORG_ID);
    sResponse = new ServerResponse(authSuccessToken, request);

    return new ResponseEntity<>(sResponse, HttpStatus.OK);
  }
}