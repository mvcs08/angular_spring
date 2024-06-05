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
    public List<Endereco> list(){
        return enderecoService.getALl();
    }

    @PostMapping
    public Endereco create(@RequestBody @Valid Endereco endereco){
        return enderecoService.create(endereco);
    }

    @PutMapping("/{id}")
    public Endereco update(@PathVariable("id") Long id, @RequestBody Endereco endereco){
        return enderecoService.update(id, endereco);
    }
    @DeleteMapping("{id}")
    public void delete(@PathVariable("id")Long id){
        enderecoService.delete(id);
    }

}
