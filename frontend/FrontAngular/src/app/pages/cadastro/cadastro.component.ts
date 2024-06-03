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
      nome:['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]],
      confirmaSenha: new FormControl('', [Validators.required])
    }, { validators: this.senhasCombinam });

  }

  senhasCombinam(group: FormGroup) {
    const senha = group.get('senha')?.value;
    const confirmaSenha = group.get('confirmaSenha')?.value;
    return senha === confirmaSenha ? null : { senhasNaoCombinam: true };
  }
  
  submitCadastro()
  {
    debugger
    this.toastr.success('Cadastro realizado com sucesso!', 'Sucesso');
    var dadosLogin = this.cadastroForm.getRawValue() as CadastrarModel;
    console.log(dadosLogin);
    this.loginService.CadastrarUsuario(dadosLogin).subscribe(
    )
  }
}
