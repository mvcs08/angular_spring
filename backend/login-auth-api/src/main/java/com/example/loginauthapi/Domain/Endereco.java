package com.example.loginauthapi.Domain;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.NotBlank;


@Entity
@Table(name="enderecos")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Endereco {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;
    @Column(columnDefinition = "TEXT")
    @NotBlank(message = "O campo nome não pode estar em branco")
    String rua;

    @NotBlank(message = "O campo nome não pode estar em branco")
    String CEP;

    @NotBlank(message = "O campo nome não pode estar em branco")
    String UF;

    @NotBlank(message = "O campo nome não pode estar em branco")
    String cidade;

    @Column(columnDefinition = "TEXT")
    @NotBlank(message = "O campo nome não pode estar em branco")
    String complemento;

    String numero;
}
