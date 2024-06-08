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


    public User update(String id, User updatedUser) {
        User existingUser = userRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found"));

        // Atualizar campos apenas se forem fornecidos no updatedUser
        if (updatedUser.getName() != null) {
            existingUser.setName(updatedUser.getName());
        }
        if (updatedUser.getEmail() != null) {
            existingUser.setEmail(updatedUser.getEmail());
        }
        if (updatedUser.getPassword() != null) {
            existingUser.setPassword(passwordEncoder.encode(updatedUser.getPassword()));
        }

        return userRepository.save(existingUser);
    }

    public void delete(String id) {
        userRepository.deleteById(id);
    }

    public Optional<User> getById(String id) {
        return userRepository.findById(id);

    }
}
