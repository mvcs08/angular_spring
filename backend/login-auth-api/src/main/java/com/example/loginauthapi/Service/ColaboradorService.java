package com.example.loginauthapi.Service;

import com.example.loginauthapi.DTO.CollaboratorRequest;
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

    public Colaborador create(Colaborador colaborador){
         return colaboradorRepository.save(colaborador);
    }

    public List<Colaborador> getAll(){
        Sort sort = Sort.by("id").ascending();
        return colaboradorRepository.findAll(sort);
    }
    public Colaborador update(Long id, CollaboratorRequest c){
        Colaborador collaborator = colaboradorRepository.findById(id).orElseThrow(()-> new RuntimeException());
        collaborator.setName(c.getName());
        collaborator.setDataNasc(c.getDataNasc());
        collaborator.setFuncao(c.getFuncao());
        collaborator.setNIS(c.getNIS());
        collaborator.setCBO(c.getCBO());
        collaborator.setNumCTPS(c.getNumCTPS());
        collaborator.setNumTituloEleitor(c.getNumTituloEleitor());
        collaborator.setEscolaridade(c.getEscolaridade());
        collaborator.setDataAdmissao(c.getDataAdmissao());
        collaborator.setValorValeTransporte(c.getValorValeTransporte());
        collaborator.setValorSalario(c.getValorSalario());
        return colaboradorRepository.save(collaborator);
    }
    public List<Colaborador> delete(Long id) {
        colaboradorRepository.deleteById(id);
        return getAll();
    }
}
