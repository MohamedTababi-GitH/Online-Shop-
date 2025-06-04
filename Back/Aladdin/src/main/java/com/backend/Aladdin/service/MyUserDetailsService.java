package com.backend.Aladdin.service;


import com.backend.Aladdin.model.UserPrincipal;
import com.backend.Aladdin.model.Users;
import com.backend.Aladdin.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class MyUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepo;


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Users user = userRepo.findByUsername(username);
        if (user == null) {

            throw new UsernameNotFoundException("user not found");
        }

        return new UserPrincipal(user);
    }


}