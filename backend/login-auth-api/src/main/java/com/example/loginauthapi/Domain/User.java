package com.example.loginauthapi.Domain;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.validator.constraints.Email;

import javax.validation.constraints.Size;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name="tb_users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;
    private String name;
    @Email(message="Email deve ser valido")
    private String email;
    @Size(min = 8, message = "A senha deve ter no mínimo 8 caracteres")
    private String password;


}
