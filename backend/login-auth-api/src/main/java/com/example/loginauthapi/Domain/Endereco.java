package com.example.loginauthapi.Domain;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.NotBlank;


@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name="tb_enderecos")
public class Endereco {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(columnDefinition = "TEXT")
    @NotBlank(message = "O campo nome não pode estar em branco")
    private String rua;

    @NotBlank(message = "O campo nome não pode estar em branco")
    private String CEP;

    @NotBlank(message = "O campo nome não pode estar em branco")
    private String UF;

    @NotBlank(message = "O campo nome não pode estar em branco")
    private String cidade;

    @Column(columnDefinition = "TEXT")
    @NotBlank(message = "O campo nome não pode estar em branco")
    private String complemento;

    private String numero;
}
