package com.example.loginauthapi.Service;

import com.example.loginauthapi.Domain.Despesas;
import com.example.loginauthapi.Repositories.DespesasRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class DespesaService {

    @Autowired
    private DespesaRepository despesaRepository;

    public Despesa addDespesa(Despesa despesa) {
        despesa.setData(despesa.getData());
        despesa.setDescricao(despesa.getDescricao());
        despesa.setValor(despesa.getValor());

        
        Colaborador colaborador = new Colaborador();
        colaborador.setId(despesa.getColaborador().getId());
        despesa.setColaborador(colaborador);
        return despesaRepository.save(despesa);
    }

    public void deleteDespesa(Long id) {
        despesaRepository.deleteById(id);
    }

    public Despesa atualizarDespesa(Despesa despesa) {
        Despesa despesaPersistida = despesaRepository.findById(despesa.getId()).get();

        despesaPersistida.setData(despesa.getData());
        despesaPersistida.setDescricao(despesa.getDescricao());
        despesaPersistida.setValor(despesa.getValor());

        
        Colaborador colaborador = despesaPersistida.getColaborador();
        colaborador.setId(despesa.getColaborador().getId());
        despesaPersistida.setColaborador(colaborador);

        return despesaRepository.save(despesaPersistida);
    }

    public List<Despesa> listarDespesas() {
        return despesaRepository.findAll();
    }

    public List<Despesa> buscarDespesasPorColaboradorId(Long colaboradorId) {
        return despesaRepository.findByColaboradorId(colaboradorId);
    }

    public Despesa buscarDespesaPorId(Long id) {
        return despesaRepository.findById(id).orElseThrow(() -> new DespesaNotFoundException(id));
    }
}






/*

Este é um exemplo utilizando o DTO como base por uma questão de padronização de microserviços e validações facilitadas.

@Service
public class DespesaService {

    @Autowired
    private DespesaRepository despesaRepository;

    public Despesa addDespesa(DespesaDTO despesaDTO) {
        Despesa despesa = new Despesa();
        despesa.setData(despesaDTO.getData());
        despesa.setDescricao(despesaDTO.getDescricao());
        despesa.setValor(despesaDTO.getValor());

       
        Colaborador colaborador = new Colaborador();
        colaborador.setId(despesaDTO.getColaboradorId());
        despesa.setColaborador(colaborador);
        return despesaRepository.save(despesa);
    }

    public void deleteDespesa(Long id) {
        despesaRepository.deleteById(id);
    }

    public Despesa atualizarDespesa(DespesaDTO despesaDTO) {
        Despesa despesa = despesaRepository.findById(despesaDTO.getId()).get();
        despesa.setData(despesaDTO.getData());
        despesa.setDescricao(despesaDTO.getDescricao());
        despesa.setValor(despesaDTO.getValor());

       
        Colaborador colaborador = despesa.getColaborador();
        colaborador.setId(despesaDTO.getColaboradorId());
        despesa.setColaborador(colaborador);
        return despesaRepository.save(despesa);
    }

    public List<Despesa> listarDespesas() {
        return despesaRepository.findAll();
    }

    public List<Despesa> buscarDespesasPorColaboradorId(Long colaboradorId) {
        return despesaRepository.findByColaboradorId(colaboradorId);
    }

    public Despesa buscarDespesaPorId(Long id) {
        return despesaRepository.findById(id).orElseThrow(() -> new DespesaNotFoundException(id));
    }
}*/ 

