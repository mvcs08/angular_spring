package com.example.loginauthapi.Repositories;

import com.example.loginauthapi.Domain.Despesas;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface DespesaRepository extends JpaRepository<Despesa, Long> {
}
