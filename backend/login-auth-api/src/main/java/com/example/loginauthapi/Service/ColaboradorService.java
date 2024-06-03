package com.example.loginauthapi.Service;

import com.example.loginauthapi.Domain.Colaborador;
import com.example.loginauthapi.Repositories.ColaboradorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ColaboradorService {

    @Autowired
    private ColaboradorRepository colaboradorRepository;

    public List<Colaborador> create(Colaborador colaborador){
        colaboradorRepository.save(colaborador);
        return getAll();
    }

    public List<Colaborador> getAll(){
        Sort sort = Sort.by("id").ascending();
        return colaboradorRepository.findAll(sort);
    }
    public Colaborador update(Long id, Colaborador colaborador){
        Optional<Colaborador> colaborador1 = this.colaboradorRepository.findById(id);
        colaboradorRepository.save(colaborador);
        return colaborador1;
    }
    public List<Colaborador> delete(Long id) {
        colaboradorRepository.deleteById(id);
        return getAll();
    }
}
