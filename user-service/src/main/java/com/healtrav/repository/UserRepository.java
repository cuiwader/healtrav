package com.healtrav.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.healtrav.domain.User;

@RepositoryRestResource(collectionResourceRel = "", path = "")
public interface UserRepository extends JpaRepository<User, Long> {

    User findByUsername(@Param("username") String username);
}
