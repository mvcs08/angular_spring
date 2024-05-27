import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from '../../Models/LoginModel';
import { LoginService } from '../../services/login.service';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})



export class LoginComponent {
  loginForm!: FormGroup;

  constructor (private formBuilder :FormBuilder, private router: Router, private loginService: LoginService)
  {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]]
    });
  }

  submitLogin()
  {
    debugger
    var dadosLogin = this.loginForm.getRawValue() as LoginModel;

    this.loginService.LoginUsuario(dadosLogin).subscribe(
      token =>
        {
          debugger
          var nossoToken = Token
        },
        erro =>{
          
        }
    )
  }

  

}
