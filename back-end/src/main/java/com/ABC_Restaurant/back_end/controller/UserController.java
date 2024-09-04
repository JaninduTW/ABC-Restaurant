package com.ABC_Restaurant.back_end.controller;
import com.ABC_Restaurant.back_end.model.User;

import com.ABC_Restaurant.back_end.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public User registerUser(@RequestBody User user) {
        return userService.registerUser(user);
    }

    @PostMapping("/login")
    public String loginUser(@RequestBody LoginRequest loginRequest) {
        User user = userService.findByUsername(loginRequest.getUsername());
        if (user != null && user.getPassword().equals(loginRequest.getPassword())) {
            // Generate and return JWT token
            return "JWT_TOKEN";
        }
        throw new RuntimeException("Invalid credentials");
    }
}
