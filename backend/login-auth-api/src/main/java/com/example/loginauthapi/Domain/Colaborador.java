package com.example.loginauthapi.Domain;

import jakarta.persistence.GenerationType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.NotBlank;


import java.util.Date;

@Entity
@Table(name="colaboradores")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Colaborador {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;
    @NotBlank(message = "O campo nome não pode estar em branco")
    String name;
    @NotBlank(message = "O campo nome não pode estar em branco")
    Date dataNasc;
    @NotBlank(message = "O campo nome não pode estar em branco")
    String funcao;
    @NotBlank(message = "O campo nome não pode estar em branco")
    String NIS;
    @NotBlank(message = "O campo nome não pode estar em branco")
    String CBO;
    @NotBlank(message = "O campo nome não pode estar em branco")
    String numCTPS;
    @NotBlank(message = "O campo nome não pode estar em branco")
    String numTituloEleitor;
    @NotBlank(message = "O campo nome não pode estar em branco")
    String escolaridade;
    @NotBlank(message = "O campo nome não pode estar em branco")
    Date dataAdmissao;
    @NotBlank(message = "O campo nome não pode estar em branco")
    float valorValeTransporte;
    @NotBlank(message = "O campo nome não pode estar em branco")
    float valorSalario;

}
