package com.example.loginauthapi.Controllers;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.loginauthapi.DTO.CollaboratorRequest;
import com.example.loginauthapi.Domain.Colaborador;
import com.example.loginauthapi.Service.ColaboradorService;

@RestController
@RequestMapping("/colaborador")
public class ColaboradorController {
    @Autowired
    private ColaboradorService colaboradorService;

    @PostMapping
    public Colaborador create(@RequestBody @Valid Colaborador colaborador){

        return colaboradorService.create(colaborador);
    }
    @GetMapping
    public List<Colaborador> list(){
        return colaboradorService.getAll();
    }

    @GetMapping("/{id}")
    public Colaborador buscaPorId(@PathVariable("id") Long id) {
        return colaboradorService.buscaPorId(id);
    }

    @PutMapping("/{id}")
    public Colaborador updateCollaborator(@PathVariable("id") Long id, @RequestBody CollaboratorRequest dto) {
        return colaboradorService.update(id, dto);
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable("id")Long id){
        colaboradorService.delete(id);
    }
}
