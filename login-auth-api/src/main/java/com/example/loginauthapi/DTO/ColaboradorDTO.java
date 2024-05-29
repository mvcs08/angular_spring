package com.example.loginauthapi.DTO;



import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ColaboradorDTO {

    long id;

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

