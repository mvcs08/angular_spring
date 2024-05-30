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
    List<Fornecedor> getAll(){
        return fornecedorService.getALl();
    }

    @PostMapping
    List<Fornecedor> create(@RequestBody @Valid Fornecedor fornecedor){
        return fornecedorService.create(fornecedor);
    }

    @PutMapping
    List<Fornecedor> update(@RequestBody Fornecedor fornecedor){
        return fornecedorService.update(fornecedor);
    }

    @DeleteMapping("{id}")
    List<Fornecedor> delete(@PathVariable("id") Long id){
        return fornecedorService.delete(id);
    }

}
