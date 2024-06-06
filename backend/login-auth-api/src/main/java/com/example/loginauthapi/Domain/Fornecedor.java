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
    private long id;

    @Column(columnDefinition = "TEXT")
    @NotBlank(message = "O campo nome não pode estar em branco")
    private String nomeFantasia;
    @Column(columnDefinition = "TEXT")
    @NotBlank(message = "O campo nome não pode estar em branco")
    private String razaoSocial;

    @NotBlank(message = "O campo nome não pode estar em branco")
    private String cpfOuCNPJ;

    @NotBlank(message = "O campo nome não pode estar em branco")
    private String inscricaoEstadual;

    @NotBlank(message = "O campo nome não pode estar em branco")
    private String tipo;

    @Column(columnDefinition = "TEXT")
    @NotBlank(message = "O campo nome não pode estar em branco")
    private String representante;

    @NotBlank(message = "O campo nome não pode estar em branco")
    private String numeroRepresentante;

    @Email(message="Email deve ser valido")
    @NotBlank()
    private String email;

    @NotBlank(message = "O campo nome não pode estar em branco")
    private String emailFinanceiro ;

    @Column(columnDefinition = "TEXT")
    @NotBlank(message = "O campo nome não pode estar em branco")
    private String dadosBancarios;

    @Column(columnDefinition = "TEXT")
    @NotBlank(message = "O campo nome não pode estar em branco")
    private String outros;
}
