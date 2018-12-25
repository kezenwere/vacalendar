package com.aurea.vacationcalendar.security;

import com.aurea.vacationcalendar.security.jwt.JWTAuthenticationFilter;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

//@Primary
@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    @Override
    public void configure(final HttpSecurity http) throws Exception {
        /**
         *Prevent the HTTP response header of "Pragma: no-cache".
         */
        http.headers().cacheControl().disable();

        // Disable CSRF
        http.csrf().disable();

        http.authorizeRequests()
            .antMatchers( "/api-doc", "/swagger-ui.html", "/swagger-resources/**").permitAll()
            .antMatchers(
                        "/",
                        "/index**", "/index/**",
                        "/login/google",
                        "/v1/auth/**", "/auth/**",
//                        "/**/auth/login**", "/**/auth/login**/**", // Login
                        "/webjars/**", "/**.css", "/**.js", "/**.map", "/**.eot", "/**.ttf", "/**.woff", "/**.woff2", "/**.svg", "/**.ico",
                        "/assets/**",
                        "/vaCalendar-websocket/**", // Allow Websocket
                        "/portal/**" // Allow direct linking (from external links or browser refresh)
                ).permitAll()
                .anyRequest().permitAll()//.authenticated()
                .and()
                .addFilterBefore(new JWTAuthenticationFilter(),
                        UsernamePasswordAuthenticationFilter.class);
    }
}