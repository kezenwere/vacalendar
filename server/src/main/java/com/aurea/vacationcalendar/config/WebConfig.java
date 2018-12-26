package com.aurea.vacationcalendar.config;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableAutoConfiguration
public class WebConfig implements WebMvcConfigurer {

    /**
     * Enables Caching of Resources
     * @param registry
     */
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/resources/**")
                .addResourceLocations("/resources/");
//                .setCachePeriod(887878); // Comment to use last-modified timestamps only
    }
}
