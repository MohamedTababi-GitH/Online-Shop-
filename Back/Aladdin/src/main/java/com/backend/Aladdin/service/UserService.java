package com.backend.Aladdin.service;


import com.backend.Aladdin.model.Users;
import com.backend.Aladdin.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;


@Service
public class UserService {

    @Autowired
    private UserRepository repo;

    @Autowired
    AuthenticationManager authManager;

    @Autowired
    private JWTService jwtService;


    private BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(12);
    public Users register(Users user) {
        user.setPassword(encoder.encode(user.getPassword()));
        return  repo.save(user);
    }

    public String verify(Users user) {

        Authentication authentication = authManager.authenticate(new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword()));
        if (authentication.isAuthenticated()) {

            Users authenticatedUser = repo.findByUsername(user.getUsername());
            if (authenticatedUser != null) {
                return jwtService.generateToken(authenticatedUser.getUsername(), authenticatedUser.getRole());
            }
            return "fail";
        }
         else {
            return "fail";
        }
    }
}
