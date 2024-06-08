package com.example.loginauthapi.Controllers;



import com.example.loginauthapi.DTO.UserDTO;
import com.example.loginauthapi.Domain.User;
import com.example.loginauthapi.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.Optional;

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
    @GetMapping({"/selecionaruser/{id}"})
    public ResponseEntity<UserDTO> list(@PathVariable("id") String id) {
        Optional<User> userOptional = userService.getById(id);
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            UserDTO userDTO = new UserDTO(user.getName(), user.getEmail());
            return ResponseEntity.ok(userDTO);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }
}
