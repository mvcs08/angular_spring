package com.example.loginauthapi.Controllers;

import com.example.loginauthapi.DTO.RespondeRegisterDTO;
import com.example.loginauthapi.Infra.Security.TokenService;
import com.example.loginauthapi.Domain.User;
import com.example.loginauthapi.DTO.LoginRequestDTO;
import com.example.loginauthapi.DTO.RegisterRequestDTO;
import com.example.loginauthapi.DTO.RespondeDTO;
import com.example.loginauthapi.Repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {
    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final TokenService tokenService;



    @PostMapping("/login")
    public ResponseEntity login(@RequestBody LoginRequestDTO body){
        User user = this.repository.findByEmail(body.email()).orElseThrow(() -> new RuntimeException("User not found"));
        if(passwordEncoder.matches(body.password(), user.getPassword())){
            String token = this.tokenService.generateToken(user);
            return ResponseEntity.ok(new RespondeDTO(user.getName(), user.getId(), user.getTypeUserAdm(), token));
        }
        return ResponseEntity.badRequest().build();
    }

    @PostMapping("/register")
    public ResponseEntity register(@RequestBody RegisterRequestDTO body){
        Optional<User> user = this.repository.findByEmail(body.email());
        if (user.isEmpty()) {
            User newUser = new User();
            newUser.setPassword(passwordEncoder.encode(body.password()));
            newUser.setEmail(body.email());
            newUser.setName(body.name());
            newUser.setTypeUserAdm(body.typeUserAdm());
            this.repository.save(newUser);

            String token = this.tokenService.generateToken(newUser);
            return ResponseEntity.ok(new RespondeRegisterDTO(newUser.getName(), token));

        }

        return ResponseEntity.badRequest().build();
    }

}
