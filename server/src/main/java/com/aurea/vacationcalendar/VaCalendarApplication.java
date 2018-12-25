package com.aurea.vacationcalendar;

import java.util.Collections;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@EnableSwagger2
public class VaCalendarApplication {

	public static void main(String[] args) {
		SpringApplication.run(VaCalendarApplication.class, args);
	}

	/**
	 * Api Documentation Docket
	 *
	 * @return
	 */
	@Bean
	public Docket docket()
	{
		return new Docket(DocumentationType.SWAGGER_2)
						.select()
						.apis(RequestHandlerSelectors.basePackage(getClass().getPackage().getName()))
						.paths(PathSelectors.any())
						.build()
						.apiInfo(generateApiInfo());
	}

	/**
	 * Api Details
	 *
	 * @return
	 */
	private ApiInfo generateApiInfo()
	{
		return new ApiInfo("VaCalendar API", "Vacation Calendar APP, VaCalendar, provides a central point of entry and report of team members vacation plan.", "Version 0.0.1",
						"urn:tos", new Contact("Kingsley Ezenwere", "http://", "kingsley.ezenwere(at)gmail.com"), "Apache 2.0", "http://www.apache.org/licenses/LICENSE-2.0", Collections.emptyList());
	}
}

