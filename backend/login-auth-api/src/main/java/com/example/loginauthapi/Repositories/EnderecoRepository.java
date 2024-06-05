package com.example.loginauthapi.Repositories;

import com.example.loginauthapi.Domain.Endereco;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EnderecoRepository extends JpaRepository <Endereco, Long> {

}
