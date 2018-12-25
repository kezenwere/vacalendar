package com.aurea.vacationcalendar.security.jwt;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.GenericFilterBean;

public class JWTAuthenticationFilter extends GenericFilterBean {

    @Override
    public void doFilter(final ServletRequest request,
                         final ServletResponse response,
                         final FilterChain filterChain)
            throws IOException, ServletException {

        final Authentication authentication =
                JwtUtil.getAuthenticationFromHeader((HttpServletRequest)request, (HttpServletResponse) response);

        SecurityContextHolder.getContext().setAuthentication(authentication);

        // Continue Request to Response Flow
        filterChain.doFilter(request,response);
    }
}