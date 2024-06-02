package com.example.loginauthapi.Repositories;

import com.example.loginauthapi.Domain.Servico;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ServicoRepository extends JpaRepository <Servico, Long> {}