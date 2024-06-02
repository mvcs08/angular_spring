package com.example.loginauthapi.Domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Getter;
import lombok.Setter;

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

    String tipo;

    float valor;

    String descricao;

    int attribute;
}
