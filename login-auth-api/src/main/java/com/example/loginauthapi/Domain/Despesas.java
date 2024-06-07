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
@Table(name = "despesas")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Despesa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "O campo data é obrigatório")
    private Date data;

    @NotBlank(message = "O campo descrição é obrigatório")
    private String descricao;

    @NotNull(message = "O campo valor é obrigatório")
    private BigDecimal valor;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "colaborador_id")
    private Colaborador colaborador;

    
}

