package com.example.loginauthapi.Controllers;

import com.example.loginauthapi.Domain.Colaborador;
import com.example.loginauthapi.Service.ColaboradorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/colaborador")
public class ColaboradorController {
    @Autowired
    private ColaboradorService colaboradorService;

    List<Colaborador> create(@RequestBody @Valid Colaborador colaborador){
        return colaboradorService.create(colaborador);
    }
    @GetMapping
    List<Colaborador> list(){
        return colaboradorService.list();
    }
    @PutMapping
    List<Colaborador> update(@RequestBody Colaborador colaborador){
        return colaboradorService.update(colaborador);
    }

    @DeleteMapping("{id}")
    List<Colaborador> delete(@PathVariable("id")Long id){
        return colaboradorService.delete(id);
    }
}
