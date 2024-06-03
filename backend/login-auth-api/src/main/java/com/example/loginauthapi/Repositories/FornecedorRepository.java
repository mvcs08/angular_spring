package com.example.loginauthapi.Repositories;

import com.example.loginauthapi.Domain.Fornecedor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FornecedorRepository extends JpaRepository <Fornecedor, Long> {
}
