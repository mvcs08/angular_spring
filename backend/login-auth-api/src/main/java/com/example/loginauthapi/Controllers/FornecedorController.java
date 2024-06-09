package com.example.loginauthapi.Controllers;


import com.example.loginauthapi.Domain.Fornecedor;
import com.example.loginauthapi.Service.FornecedorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/fornecedor")
public class FornecedorController {

    @Autowired
    FornecedorService fornecedorService;

    @GetMapping
    public List<Fornecedor> getAll(){
        return fornecedorService.getALl();
    }

    @GetMapping("/{id}")
    public Fornecedor getFornecedorByID(@PathVariable("id") Long id){
        return fornecedorService.getById(id);
    }

    @PostMapping
    public List<Fornecedor> create(@RequestBody @Valid Fornecedor fornecedor){
        return fornecedorService.create(fornecedor);
    }

    @PutMapping("/{id}")
    public Fornecedor update(@PathVariable("id") Long id,@RequestBody Fornecedor fornecedor){
        return fornecedorService.update(id, fornecedor);
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable("id") Long id){
        fornecedorService.delete(id);
    }

}
