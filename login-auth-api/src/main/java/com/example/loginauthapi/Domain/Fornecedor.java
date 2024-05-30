package com.example.loginauthapi.Domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.NotBlank;

import java.util.Date;

@Entity
@Table(name = "fornecedores")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class Fornecedor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;

    @NotBlank(message = "O campo nome não pode estar em branco")
    String nomeFantasia;

    @NotBlank(message = "O campo nome não pode estar em branco")
    String razaoSocial;

    @NotBlank(message = "O campo nome não pode estar em branco")
    String cpfOuCNPJ;

    @NotBlank(message = "O campo nome não pode estar em branco")
    String inscricaoEstadual;

    @NotBlank(message = "O campo nome não pode estar em branco")
    String tipo;

    @NotBlank(message = "O campo nome não pode estar em branco")
    String representante;

    @NotBlank(message = "O campo nome não pode estar em branco")
    String numeroRepresentante;

    @NotBlank(message = "O campo nome não pode estar em branco")
    String email;

    @NotBlank(message = "O campo nome não pode estar em branco")
    String emailFinanceiro ;

    @NotBlank(message = "O campo nome não pode estar em branco")
    String  dadosBancarios;

    @NotBlank(message = "O campo nome não pode estar em branco")
    String outros;
}
