package com.example.loginauthapi.Controllers;

import com.example.loginauthapi.Domain.Endereco;
import com.example.loginauthapi.Service.EnderecoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/endereco")
public class EnderecoController {

    @Autowired
    EnderecoService enderecoService;

    @GetMapping
    List<Endereco> getAll(){
        return enderecoService.getALl();
    }

    @PostMapping
    List<Endereco> create(@RequestBody @Valid Endereco Endereco){
        return enderecoService.create(Endereco);
    }

    @PutMapping
    List<Endereco> update(@RequestBody Endereco Endereco){
        return enderecoService.update(Endereco);
    }

}
