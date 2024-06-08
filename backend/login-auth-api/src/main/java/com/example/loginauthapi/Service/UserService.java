package com.example.loginauthapi.Service;


import com.example.loginauthapi.Domain.Colaborador;
import com.example.loginauthapi.Domain.User;
import com.example.loginauthapi.Infra.Security.TokenService;
import com.example.loginauthapi.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TokenService tokenService;

    public User update(String id, User user) {
        User user1 = userRepository.findById(id).orElseThrow(()-> new RuntimeException());
        user1.setName(user.getName());
        user1.setEmail(user.getEmail());
        String token = this.tokenService.generateToken(user);
        user1.setPassword(token);
        return userRepository.save(user);
    }

    public void delete(String id) {
        userRepository.deleteById(id);
    }

    public User getById(String id) {
        return userRepository.getById(id);
    }
}
