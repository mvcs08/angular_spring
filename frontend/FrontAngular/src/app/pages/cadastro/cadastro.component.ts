import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { LoginModel } from '../../Models/LoginModel';
import { CadastrarModel } from '../../Models/CadastrarModel';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {
  
  cadastroForm!: FormGroup;

  constructor (private formBuilder :FormBuilder, private router: Router, private loginService: LoginService, private toastr: ToastrService)
  {
    this.cadastroForm = this.formBuilder.group({
      name:['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmaSenha: new FormControl('', [Validators.required])
    }, { validators: this.senhasCombinam });

  }

  senhasCombinam(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmaSenha = group.get('confirmaSenha')?.value;
    return password === confirmaSenha ? null : { senhasNaoCombinam: true };
  }
  
  submitCadastro() {
    debugger;
    const dadosLogin = this.cadastroForm.getRawValue() as CadastrarModel;

    this.loginService.CadastrarUsuario(dadosLogin).subscribe(
      response => {
        console.log('Resposta da API:', response); 
        this.toastr.success('Cadastro realizado com sucesso!', 'Sucesso');
        this.cadastroForm.reset(); 
        this.router.navigate(['/login']); 
      },
      error => {
        this.toastr.error('Erro ao realizar cadastro!', 'Erro');
        console.error('Erro ao cadastrar usuário', error);
      }
    );
  }
}
