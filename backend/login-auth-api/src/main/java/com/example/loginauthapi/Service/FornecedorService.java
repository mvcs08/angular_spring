package com.example.loginauthapi.Service;

import com.example.loginauthapi.Domain.Colaborador;
import com.example.loginauthapi.Domain.Fornecedor;
import com.example.loginauthapi.Repositories.FornecedorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class FornecedorService {

    @Autowired
    private FornecedorRepository fornecedorRepository;

    public List<Fornecedor> getALl(){
        Sort sort = Sort.by("id").ascending();
        return fornecedorRepository.findAll(sort);
    }

    public Fornecedor update(Long id, Fornecedor fornecedor){
        Fornecedor fornecedor1 = fornecedorRepository.findById(id).orElseThrow(()-> new RuntimeException());
        fornecedor1.setNomeFantasia(fornecedor.getNomeFantasia());
        fornecedor1.setRazaoSocial(fornecedor.getRazaoSocial());
        fornecedor1.setCpfOuCNPJ(fornecedor.getCpfOuCNPJ());
        fornecedor1.setInscricaoEstadual(fornecedor.getInscricaoEstadual());
        fornecedor1.setTipo(fornecedor.getTipo());
        fornecedor1.setRepresentante(fornecedor.getRepresentante());
        fornecedor1.setNumeroRepresentante(fornecedor.getNumeroRepresentante());
        fornecedor1.setEmail(fornecedor.getEmail());
        fornecedor1.setEmailFinanceiro(fornecedor.getEmailFinanceiro());
        fornecedor1.setDadosBancarios(fornecedor.getDadosBancarios());
        fornecedor1.setOutros(fornecedor.getOutros());
        return fornecedorRepository.save(fornecedor1);
    }

    public List<Fornecedor> create(Fornecedor fornecedor){
        fornecedorRepository.save(fornecedor);
        return getALl();
    }

    public void delete (long id){
        fornecedorRepository.deleteById(id);

    }

    public Fornecedor getById(long id){
        var fornecedor = fornecedorRepository.findById(id);
        if(fornecedor.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
        return fornecedor.get();
    }
}
