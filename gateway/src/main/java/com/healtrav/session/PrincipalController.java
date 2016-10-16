package com.healtrav.session;

import java.security.Principal;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PrincipalController {

    @RequestMapping("/user")
    Principal principal(Principal principal) {
        return principal;
    }

}
