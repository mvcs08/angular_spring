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
    public List<Servico> getAll() {
        return servicoService.getAll();
    }

    @GetMapping("/{id}")
    public Servico buscaPorId(@PathVariable("id") Long id) {
        return servicoService.buscaPorId(id);
    }

    @PostMapping
    public List<Servico> create(@RequestBody Servico servico) {
        return servicoService.create(servico);
    }

    @PutMapping("/{id}")
    public Servico update(@PathVariable("id") Long id, @RequestBody Servico servico) {
        return servicoService.update(id, servico);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Long id) {
      servicoService.delete(id);
    }
}