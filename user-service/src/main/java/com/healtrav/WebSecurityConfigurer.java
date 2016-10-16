package com.healtrav;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;

@Configuration
public class WebSecurityConfigurer extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        // @formatter:off
        http.httpBasic().disable()
                .authorizeRequests()
                    .antMatchers(HttpMethod.POST, "/**").hasRole("ADMIN")
                    .anyRequest()
                    .authenticated()
                .and()
                    .csrf().csrfTokenRepository(
                            CookieCsrfTokenRepository.withHttpOnlyFalse());
        // @formatter:on
    }

}
