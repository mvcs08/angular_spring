package com.example.loginauthapi.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CollaboratorRequest {

    String name;

    Date dataNasc;

    String funcao;

    String NIS;

    String CBO;

    String numCTPS;

    String numTituloEleitor;

    String escolaridade;

    Date dataAdmissao;

    float valorValeTransporte;

    float valorSalario;

}
