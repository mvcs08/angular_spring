package com.example.loginauthapi.Domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.Email;
import org.hibernate.validator.constraints.NotBlank;

import java.util.Date;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "tb_fornecedores")
public class Fornecedor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;

    @Column(columnDefinition = "TEXT")
    @NotBlank(message = "O campo nome não pode estar em branco")
    String nomeFantasia;
    @Column(columnDefinition = "TEXT")
    @NotBlank(message = "O campo nome não pode estar em branco")
    String razaoSocial;

    @NotBlank(message = "O campo nome não pode estar em branco")
    String cpfOuCNPJ;

    @NotBlank(message = "O campo nome não pode estar em branco")
    String inscricaoEstadual;

    @NotBlank(message = "O campo nome não pode estar em branco")
    String tipo;

    @Column(columnDefinition = "TEXT")
    @NotBlank(message = "O campo nome não pode estar em branco")
    String representante;

    @NotBlank(message = "O campo nome não pode estar em branco")
    String numeroRepresentante;

    @Email(message="Email deve ser valido")
    @NotBlank()
    String email;

    @NotBlank(message = "O campo nome não pode estar em branco")
    String emailFinanceiro ;

    @Column(columnDefinition = "TEXT")
    @NotBlank(message = "O campo nome não pode estar em branco")
    String dadosBancarios;

    @Column(columnDefinition = "TEXT")
    @NotBlank(message = "O campo nome não pode estar em branco")
    String outros;
}
