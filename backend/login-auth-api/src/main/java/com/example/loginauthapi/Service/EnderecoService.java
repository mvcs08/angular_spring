package com.example.loginauthapi.Service;

import com.example.loginauthapi.Domain.Endereco;
import com.example.loginauthapi.Repositories.EnderecoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EnderecoService {

    @Autowired
    private EnderecoRepository enderecoRepository;

    public List<Endereco> getALl(){
        Sort sort = Sort.by("Endereco").ascending();
        return enderecoRepository.findAll(sort);
    }

    public List<Endereco> update(Endereco endereco){
        enderecoRepository.save(endereco);
        return getALl();
    }

    public List<Endereco> create(Endereco endereco){
        enderecoRepository.save(endereco);
        return getALl();
    }

    public List<Endereco> delete (Endereco endereco){
        enderecoRepository.delete(endereco);
        return getALl();
    }
}
