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
public class DespesaDTO {

    private Long id;

    @NotBlank(message = "O campo data é obrigatório")
    private String data;

    @NotBlank(message = "O campo descrição é obrigatório")
    private String descricao;

    @NotNull(message = "O campo valor é obrigatório")
    private BigDecimal valor;

    private Long colaboradorId;

}

