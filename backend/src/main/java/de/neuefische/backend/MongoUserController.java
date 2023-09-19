package de.neuefische.backend;


import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor

public class MongoUserController {

    private final MongoUserService service;

    @PostMapping("/login")
    public String login(){
        return SecurityContextHolder.getContext().getAuthentication().getName();
    }

    @PostMapping("/register")
    public String saveNewUser(@RequestBody MongoUser m){
        return service.saveUser(m).getUsername();
    }

    @PostMapping("/logout")
    public String logout(HttpSession httpSession){
        httpSession.invalidate();
        SecurityContextHolder.clearContext();
        return "logged out";
    }

    @GetMapping("/me")
    public String getMe1(Principal principal){
        if (principal != null) {
            return principal.getName();
        }
        return "AnonymousUser";
    }

    @GetMapping("/me2")
    public String getMe2(){
        return SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getName();
    }
}
