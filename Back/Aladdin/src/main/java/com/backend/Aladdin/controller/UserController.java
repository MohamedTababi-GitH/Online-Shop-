package com.backend.Aladdin.controller;



import com.backend.Aladdin.model.Users;
import com.backend.Aladdin.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class UserController {

    @Autowired
    private UserService service;


    @PostMapping("/register")
    public Users register(@RequestBody Users user) {
        return service.register(user);

    }

//    @PostMapping("/register")
//    public ResponseEntity<Users> register(@RequestBody Users user) {
//        user.setId(null); // Ignore the supplied ID
//        Users newUser = service.register(user);
//        return ResponseEntity.status(HttpStatus.CREATED).body(newUser);
//    }


    @PostMapping("/login")
    public ResponseEntity<Map<String, String>> login(@RequestBody Users user) {

        String token = service.verify(user);
        System.out.println("login api invoked");
        if (token != null) {
            Map<String, String> response = new HashMap<>();
            response.put("token", token);
            return ResponseEntity.ok(response); // Returns JSON instead of a plain string
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
        }
    }



}