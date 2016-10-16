package com.healtrav;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;
import org.springframework.context.annotation.Bean;
import org.springframework.session.data.redis.RedisFlushMode;
import org.springframework.session.data.redis.config.annotation.web.http.EnableRedisHttpSession;

import com.healtrav.session.SessionPreFilter;

@EnableZuulProxy
@SpringBootApplication
@EnableRedisHttpSession(redisFlushMode = RedisFlushMode.IMMEDIATE)
public class GatewayApplication {

    public static void main(String[] args) {
        SpringApplication.run(GatewayApplication.class, args);
    }

    @Bean
    public SessionPreFilter sessionPreFilter() {
        return new SessionPreFilter();
    }
}
