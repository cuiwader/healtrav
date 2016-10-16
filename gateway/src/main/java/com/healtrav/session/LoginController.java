package com.healtrav.session;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class LoginController {

    @RequestMapping("/login")
    @CrossOrigin(origins = "*", maxAge = 3600)
    public String login() {
        return "forward:/";
    }

}
