package com.healtrav.session;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;

@Configuration
public class WebSecurityConfigurer extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        // @formatter:off
        http
            .httpBasic()
            .and()
            .logout()
            .and()
            .authorizeRequests()
                .antMatchers(
                        "/*",
                        "/login",
                        "/app/**",
                        "/node_modules/**")
                    .permitAll()
                .anyRequest()
                    .authenticated()
            .and().csrf().csrfTokenRepository(
                    CookieCsrfTokenRepository.withHttpOnlyFalse());
        // @formatter:on
    }

}
