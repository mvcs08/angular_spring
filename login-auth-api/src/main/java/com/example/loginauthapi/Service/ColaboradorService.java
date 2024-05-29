package com.example.loginauthapi.Service;

import com.example.loginauthapi.Domain.Colaborador;
import com.example.loginauthapi.Repositories.ColaboradorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ColaboradorService {

    @Autowired
    private ColaboradorRepository colaboradorRepository;

    public List<Colaborador> create(Colaborador colaborador){
        colaboradorRepository.save(colaborador);
        return list();
    }

    public List<Colaborador> list(){
        Sort sort = Sort.by("nome").ascending();
        return colaboradorRepository.findAll(sort);
    }
    public List<Colaborador> update(Colaborador colaborador){
        colaboradorRepository.save(colaborador);
        return list();
    }
    public List<Colaborador> delete(Long id) {
        colaboradorRepository.deleteById(id);
        return list();
    }
}
