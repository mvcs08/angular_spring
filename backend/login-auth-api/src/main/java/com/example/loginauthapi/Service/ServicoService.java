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

    public Servico update(Long id, Servico servico) {
        Servico servico1 = servicoRepository.findById(id).orElseThrow(()-> new RuntimeException());
        servico1.setTitulo(servico.getTitulo());
        servico1.setFornecedor(servico.getFornecedor());
        servico1.setNumeroNota(servico.getNumeroNota());
        servico1.setFormaPagamento(servico.getFormaPagamento());
        servico1.setParcelas(servico.getParcelas());
        servico1.setVencimento(servico.getVencimento());
        servico1.setCentroCusto(servico.getCentroCusto());
        servico1.setStatusPagamento(servico.getStatusPagamento());
        return servicoRepository.save(servico);
    }

    public List<Servico> create(Servico servico) {
        servicoRepository.save(servico);

        return getAll();
    }

    public void delete(long id) {
        servicoRepository.deleteById(id);
    }
}