package com.example.loginauthapi.Controllers;


import com.example.loginauthapi.Domain.Colaborador;
import com.example.loginauthapi.Domain.User;
import com.example.loginauthapi.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping
    public ResponseEntity<String> getUser(){
        return ResponseEntity.ok("sucesso!");
    }
    @PutMapping("/{id}")
    public User update(@PathVariable("id") String id, @RequestBody User user) {
        return userService.update(id, user);
    }
    @DeleteMapping("/{id}")
    public String delete(@PathVariable("id") String id) {
        userService.delete(id);
        return "Usuário deletado com sucesso!";
    }
    @GetMapping({"/selecionaruser"})
    public User list(String id){
        return userService.getById(id);
    }
}
