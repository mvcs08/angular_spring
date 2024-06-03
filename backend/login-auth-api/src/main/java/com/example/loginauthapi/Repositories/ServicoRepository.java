package com.example.loginauthapi.Repositories;

import com.example.loginauthapi.Domain.Servico;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ServicoRepository extends JpaRepository <Servico, Long> {}