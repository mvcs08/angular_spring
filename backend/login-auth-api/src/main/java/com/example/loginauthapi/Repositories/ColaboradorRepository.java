package com.example.loginauthapi.Repositories;

import com.example.loginauthapi.Domain.Colaborador;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ColaboradorRepository extends JpaRepository <Colaborador, Long> {

}
