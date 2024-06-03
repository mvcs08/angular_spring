package com.example.loginauthapi.DTO;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class FornecedorDTO {
    long id;

    String nomeFantasia;

    String razaoSocial;

    String cpfOuCNPJ;

    String inscricaoEstadual;

    //TODO Endereco endereco;

    String tipo;

    String representante;

    String numeroRepresentante;

    String email;

    String emailFinanceiro;

    String dadosBancarios;

    String outros;

}
