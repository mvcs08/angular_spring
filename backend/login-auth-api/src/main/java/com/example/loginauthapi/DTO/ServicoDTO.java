package com.example.loginauthapi.DTO;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ServicoDTO {
    long id;

    String tipo;

    float valor;

    String descricao;

    int attribute;
}
