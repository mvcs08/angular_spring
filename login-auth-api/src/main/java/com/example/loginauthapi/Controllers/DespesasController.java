package com.example.loginauthapi.Controllers;

import com.example.loginauthapi.Domain.Colaborador;
import com.example.loginauthapi.Service.ColaboradorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/despesas")
public class DespesaController {

    @Autowired
    private DespesaService despesaService;

    @PostMapping
    public ResponseEntity<Despesa> addDespesa(@RequestBody @Valid Despesa despesa) {
        Despesa despesaSalva = despesaService.addDespesa(despesa);
        return ResponseEntity.ok(despesaSalva);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteDespesa(@PathVariable Long id) {
        despesaService.deleteDespesa(id);
        return ResponseEntity.ok().build();
    }

    @PutMapping
    public ResponseEntity<Despesa> atualizarDespesa(@RequestBody @Valid Despesa despesa) {
        Despesa despesaAtualizada = despesaService.atualizarDespesa(despesa);
        return ResponseEntity.ok(despesaAtualizada);
    }

    @GetMapping
    public ResponseEntity<List<Despesa>> listarDespesas() {
        List<Despesa> despesas = despesaService.listarDespesas();
        return ResponseEntity.ok(despesas);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Despesa> buscarDespesaPorId(@PathVariable Long id) {
        Despesa despesa = despesaService.buscarDespesaPorId(id);
        return ResponseEntity.ok(despesa);
    }
}
