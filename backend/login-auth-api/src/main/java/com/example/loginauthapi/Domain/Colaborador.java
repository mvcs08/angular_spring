package com.example.loginauthapi.Domain;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.NotBlank;


import java.util.Date;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name="tb_colaboradores")
public class Colaborador {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(columnDefinition = "TEXT")
    @NotBlank(message = "O campo nome não pode estar em branco")
    private String name;

    @NotBlank(message = "O campo nome não pode estar em branco")
    private Date dataNasc;

    @Column(columnDefinition = "TEXT")
    @NotBlank(message = "O campo nome não pode estar em branco")
    private String funcao;

    @NotBlank(message = "O campo nome não pode estar em branco")
    private String NIS;

    @NotBlank(message = "O campo nome não pode estar em branco")
    private String CBO;

    @NotBlank(message = "O campo nome não pode estar em branco")
    private String numCTPS;

    @NotBlank(message = "O campo nome não pode estar em branco")
    private String numTituloEleitor;

    @NotBlank(message = "O campo nome não pode estar em branco")
    private String escolaridade;

    @NotBlank(message = "O campo nome não pode estar em branco")
    private Date dataAdmissao;

    @NotBlank(message = "O campo nome não pode estar em branco")
    private float valorValeTransporte;

    @NotBlank(message = "O campo nome não pode estar em branco")
    private float valorSalario;

}
