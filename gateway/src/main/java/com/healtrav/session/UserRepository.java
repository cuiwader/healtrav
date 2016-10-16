package com.healtrav.session;

import java.util.Optional;

import org.springframework.data.repository.Repository;
import org.springframework.data.repository.query.Param;

public interface UserRepository extends Repository<User, Long> {

    Optional<User> findByUsername(@Param("username") String username);
}
