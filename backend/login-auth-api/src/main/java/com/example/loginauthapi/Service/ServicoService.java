package com.example.loginauthapi.Service;

import com.example.loginauthapi.Domain.Servico;
import com.example.loginauthapi.Repositories.ServicoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServicoService {
    @Autowired
    private ServicoRepository servicoRepository;

    public List<Servico> getAll() {
        Sort sort = Sort.by("id").ascending();
        return servicoRepository.findAll(sort);
    }

    public List<Servico> update(Servico servico) {
        servicoRepository.save(servico);
        return getAll();
    }

    public List<Servico> create(Servico servico) {
        servicoRepository.save(servico);

        return getAll();
    }

    public List<Servico> delete(long id) {
        servicoRepository.deleteById(id);

        return getAll();
    }
}