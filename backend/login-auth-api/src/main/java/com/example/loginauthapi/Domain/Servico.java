package com.example.loginauthapi.Domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.validator.constraints.NotBlank;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "tb_servicos")
public class Servico {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    /*@NotBlank(message = "O campo nome não pode estar em branco")
    private float valor;
    @NotBlank(message = "O campo nome não pode estar em branco")
    private String tipo;
    @Column(columnDefinition = "TEXT")
    @NotBlank(message = "O campo nome não pode estar em branco")
    private String descricao;*/
    private String titulo;
    private String fornecedor;
    private Long numeroNota;
    private String formaPagamento;
    private Long parcelas;
    private String vencimento;
    private String centroCusto;
    private String statusPagamento;


}
