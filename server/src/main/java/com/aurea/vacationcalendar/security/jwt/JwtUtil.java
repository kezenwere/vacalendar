package com.aurea.vacationcalendar.security.jwt;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Collections;
import java.util.Date;

import com.aurea.vacationcalendar.config.ServiceConfig;
import com.aurea.vacationcalendar.domain.user.User;
import com.aurea.vacationcalendar.util.Utils;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.SignatureException;
import io.jsonwebtoken.UnsupportedJwtException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

@Component
public class JwtUtil {
  private final static Logger log = LoggerFactory.getLogger(JwtUtil.class);
  private final ServiceConfig serviceConfig;
  public final static long JWT_TOKEN_EXPIRES_MILLIS =  1000 * 60 * 60 * 24 * 20; // 20Days
  private static String JWT_SIGNING_KEY = "";
  private static String JWT_PREFIX = "";
  private static String JWT_HEADER_KEY = "";

  @Autowired
  public JwtUtil(final ServiceConfig serviceConfig) {
    this.serviceConfig = serviceConfig;
    JWT_SIGNING_KEY = serviceConfig.getJwtSigningKey();
    JWT_PREFIX = serviceConfig.getJwtPrefix();
            JWT_HEADER_KEY = serviceConfig.getJwtHeaderParamKey();
  }

  public static String createJwtTokenObjParam(final Object subject) {

    final String _subject = Utils.objToJsonString(subject);

    return createJwtToken(_subject);
  }

  public static String createJwtToken(final String subject){
    return Jwts.builder()
            .setSubject(subject)
            .setExpiration(new Date(System.currentTimeMillis() + JWT_TOKEN_EXPIRES_MILLIS))
            .signWith(SignatureAlgorithm.HS512, JWT_SIGNING_KEY)
            .compact();
  }

  public static String removeJwtPrefix(final String token) {
    return token.replace(JWT_PREFIX, "");
  }

  public String addJwtPrefix(final String token) {
    return JWT_PREFIX + token;
  }

  public static Object getSubject(final String jwtToken){
    return Jwts.parser()
            .setSigningKey(JWT_SIGNING_KEY)
            .parseClaimsJws(removeJwtPrefix(jwtToken))
            .getBody().getSubject();
  }

  public static Authentication getAuthenticationFromHeader(final HttpServletRequest request,
                                                           final HttpServletResponse response) {
    final String jwtToken = resolveToken(request, response);

    System.out.println("getAuthenticationFromHeader: " + jwtToken);
    if (StringUtils.hasText(jwtToken) && validateToken(jwtToken)) {
      return buildAuthentication(jwtToken, request);
    }
    return null;
  }

  private static boolean validateToken(final String authToken) {
    try {
      Jwts.parser().setSigningKey(JWT_SIGNING_KEY).parseClaimsJws(authToken);
      return true;
    } catch (SignatureException e) {
      log.info("Invalid JWT signature.");
      log.trace("Invalid JWT signature trace: {}", e);
    } catch (MalformedJwtException e) {
      log.info("Invalid JWT token.");
      log.trace("Invalid JWT token trace: {}", e);
    } catch (ExpiredJwtException e) {
      log.info("Expired JWT token.");
      log.trace("Expired JWT token trace: {}", e);
    } catch (UnsupportedJwtException e) {
      log.info("Unsupported JWT token.");
      log.trace("Unsupported JWT token trace: {}", e);
    } catch (IllegalArgumentException e) {
      log.info("JWT token compact of handler are invalid.");
      log.trace("JWT token compact of handler are invalid trace: {}", e);
    }

    return false;
  }
  public static String resolveToken(final HttpServletRequest request, final HttpServletResponse response) {
    String token = getTokenFromRequestHeader(request);

    if (StringUtils.isEmpty(token) || (StringUtils.hasText(token) && !token.startsWith(JWT_PREFIX))) {
      token = getTokenFromResponseHeader(response);
    }

    if (StringUtils.hasText(token) && token.startsWith(JWT_PREFIX)) {
      return removeJwtPrefix(token);
    }

    return null;
  }
  public static Authentication buildAuthentication(final String jwtToken, final HttpServletRequest request) {
    // parse the token.
    final String subject = (String) getSubject(jwtToken);
    final User user = Utils.jsonString2UserObj(subject);

    final UsernamePasswordAuthenticationToken authentication =
              new UsernamePasswordAuthenticationToken(user.getEmail(), jwtToken, Collections.emptyList());
      authentication.setDetails(user);

      return authentication;
    }

  private static String getTokenFromResponseHeader(final HttpServletResponse response) {
    final String token = response.getHeader(JWT_HEADER_KEY);

    System.out.println("token from response Header: " + token);
    return token;
  }

  private static String getTokenFromRequestHeader(final HttpServletRequest request) {
    final String token = request.getHeader(JWT_HEADER_KEY);

    System.out.println("token from request Header: " + token);
    return token;
  }
}
