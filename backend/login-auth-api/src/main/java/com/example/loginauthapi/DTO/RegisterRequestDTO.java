package com.example.loginauthapi.DTO;


import com.example.loginauthapi.Enum.userAdm;

public record RegisterRequestDTO (String name, String email, String password, userAdm adm){


}
