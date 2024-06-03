package com.example.loginauthapi.Service;

import com.example.loginauthapi.Domain.Colaborador;
import com.example.loginauthapi.Domain.Fornecedor;
import com.example.loginauthapi.Repositories.FornecedorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FornecedorService {

    @Autowired
    private FornecedorRepository fornecedorRepository;

    public List<Fornecedor> getALl(){
        Sort sort = Sort.by("id").ascending();
        return fornecedorRepository.findAll(sort);
    }

    public List<Fornecedor> update(Fornecedor fornecedor){
        fornecedorRepository.save(fornecedor);
        return getALl();
    }

    public List<Fornecedor> create(Fornecedor fornecedor){
        fornecedorRepository.save(fornecedor);
        return getALl();
    }

    public List<Fornecedor> delete (long id){
        fornecedorRepository.deleteById(id);
        return getALl();
    }
}
