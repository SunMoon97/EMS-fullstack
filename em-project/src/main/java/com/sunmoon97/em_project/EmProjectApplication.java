package com.sunmoon97.em_project;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories(basePackages = {"com.sunmoon97.em_project"})
public class EmProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(EmProjectApplication.class, args);
	}

}
