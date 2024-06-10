package com.example.loginauthapi.DTO;

import com.example.loginauthapi.Enum.userAdm;

public record RespondeDTO (String name, String id, userAdm typeUserAdm, String token){

}
