package com.example.loginauthapi.Controllers;

import com.example.loginauthapi.Domain.Servico;
import com.example.loginauthapi.Service.ServicoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/servico")
public class ServicoController {

    @Autowired
    ServicoService servicoService;

    @GetMapping
    List<Servico> getAll() {
        return servicoService.getAll();
    }

    @PostMapping
    List<Servico> create(@RequestBody Servico servico) {
        return servicoService.create(servico);
    }

    @PutMapping
    List<Servico> update(@RequestBody Servico servico) {
        return servicoService.update(servico);
    }

    @DeleteMapping("{id}")
    List<Servico> delete(@PathVariable("id") Long id) {
        return servicoService.delete(id);
    }
}