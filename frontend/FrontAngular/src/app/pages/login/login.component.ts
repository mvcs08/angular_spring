import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from '../../Models/LoginModel';
import { LoginService } from '../../services/login.service';
import { Token } from '@angular/compiler';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})



export class LoginComponent {
  loginForm!: FormGroup;

  constructor (private formBuilder :FormBuilder, private router: Router, private loginService: LoginService, private toastr: ToastrService)
  {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  submitLogin() {
    debugger;
    const dadosLogin = this.loginForm.getRawValue() as LoginModel;
    console.log('Dados enviados para a API de login:', dadosLogin);

    this.loginService.LoginUsuario(dadosLogin).subscribe(
      response => {
        debugger;
        const admValue = response.adm;
        console.log(response);
        localStorage.setItem('token', response.token);
        localStorage.setItem('userId', response.id);
        localStorage.setItem('adm', admValue !== undefined ? admValue : 'false');
        console.log('Token recebido da API:', response.token);


        this.router.navigate(['/home']);
        this.toastr.success('Login realizado com sucesso!', 'Sucesso');
      },
      erro => {
        this.toastr.error('Erro ao fazer login!', 'Erro');
      }
    );
  }



}
