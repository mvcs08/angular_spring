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
        Sort sort = Sort.by("id").ascending();
        return enderecoRepository.findAll(sort);
    }

    public Endereco update(Long id, Endereco endereco){
        Endereco endereco1 = enderecoRepository.findById(id).orElseThrow(()-> new RuntimeException());
        endereco1.setRua(endereco.getRua());
        endereco1.setCEP(endereco.getCEP());
        endereco1.setUF(endereco.getUF());
        endereco1.setCidade(endereco.getCidade());
        endereco1.setComplemento(endereco.getComplemento());
        endereco1.setNumero(endereco.getNumero());

        return enderecoRepository.save(endereco1);
    }

    public Endereco create(Endereco endereco){
       return enderecoRepository.save(endereco);
    }

    public void delete (Long id){
        enderecoRepository.deleteById(id);
    }
}
