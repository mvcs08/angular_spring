package com.example.loginauthapi.Service;


import com.example.loginauthapi.Domain.Colaborador;
import com.example.loginauthapi.Domain.User;
import com.example.loginauthapi.Infra.Security.TokenService;
import com.example.loginauthapi.Repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
@RequiredArgsConstructor
public class UserService {

    private final PasswordEncoder passwordEncoder;
    @Autowired
    private UserRepository userRepository;


    public User update(String id, User user) {
        User user1 = userRepository.findById(id).orElseThrow(()-> new RuntimeException());
        user1.setName(user.getName());
        user1.setEmail(user.getEmail());
        user1.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user1);
    }

    public void delete(String id) {
        userRepository.deleteById(id);
    }

    public Optional<User> getById(String id) {
        return userRepository.findById(id);

    }
}
