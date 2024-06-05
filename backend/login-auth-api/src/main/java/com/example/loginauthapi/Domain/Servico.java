package com.example.loginauthapi.Domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.validator.constraints.NotBlank;

@Entity
@Table(name = "servicos")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Servico {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;
    @NotBlank(message = "O campo nome não pode estar em branco")
    String tipo;
    @NotBlank(message = "O campo nome não pode estar em branco")
    float valor;
    @Column(columnDefinition = "TEXT")
    @NotBlank(message = "O campo nome não pode estar em branco")
    String descricao;

}
