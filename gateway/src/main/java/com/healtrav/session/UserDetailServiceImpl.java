package com.healtrav.session;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailServiceImpl implements UserDetailsService {

    private final UserRepository userRepo;

    @Autowired
    public UserDetailServiceImpl(UserRepository userRepo) {
        this.userRepo = userRepo;
    }

    @Override
    public UserDetails loadUserByUsername(String username)
            throws UsernameNotFoundException {
        return this.userRepo.findByUsername(username)
                .map(user -> new User(
                        user.getUsername(),
                        user.getPassword(),
                        !user.getState().equals("expired"),
                        !user.getState().equals("locked"),
                        !user.getState().equals("credentialExpired"),
                        !user.getState().equals("disabled"),
                        AuthorityUtils.createAuthorityList(user.getRoles())))
                .orElseThrow(() -> new UsernameNotFoundException(username));
    }

}
