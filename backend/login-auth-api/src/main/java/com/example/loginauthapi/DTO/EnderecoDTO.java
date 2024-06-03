package com.example.loginauthapi.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class EnderecoDTO {

    private String rua;

    private String numero;

    private String complemento;

    private String CEP;

    private String UF;

    private String cidade;

}
