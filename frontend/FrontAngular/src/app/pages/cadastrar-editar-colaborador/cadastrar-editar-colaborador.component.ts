import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { ColaboradorService } from 'path/to/ColaboradorService'; // Import the ColaboradorService class from its appropriate location
import { Router } from '@angular/router'; // Import the Router class from the appropriate location
import { ColaboradorModel } from '../../Models/ColaboradorModel';
import { ColaboradorService } from '../../services/colaborador';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cadastrar-editar-colaborador',
  templateUrl: './cadastrar-editar-colaborador.component.html',
  styleUrl: './cadastrar-editar-colaborador.component.css'
})

export class CadastrarEditarColaboradorComponent implements OnInit {
  cadastroForm: FormGroup;
  escolaridadeOptions: string[] = ['Ensino Fundamental', 'Ensino Médio', 'Ensino Superior'];

  constructor(private fb: FormBuilder, private colaboradorService: ColaboradorService, private router: Router, private toastr: ToastrService) {
    this.cadastroForm = this.fb.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      rg: ['', Validators.required],
      dataNascimento: ['', Validators.required],
      nis: ['', Validators.required],
      cbo: ['', Validators.required],
      ctps: ['', Validators.required],
      tituloEleitor: ['', Validators.required],
      escolaridade: ['', Validators.required],
      dataAdmissao: ['', Validators.required],
      salario: ['', Validators.required],
      transporte: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  // onSubmit(): void {
  //   if (this.cadastroForm.valid) {
  //     console.log('Form Submitted', this.cadastroForm.value);
  //   }
  // }

  onSubmit() {
    const token = localStorage.getItem("token");

    // Exibe o token no console
    console.log("Token:", token);
    const dadosLogin = this.cadastroForm.getRawValue() as ColaboradorModel;
    debugger;
    this.colaboradorService.CadastrarColaborador(dadosLogin).subscribe(
      response => {
        console.log('Resposta da API:', response);
        this.toastr.success('Cadastro realizado com sucesso!', 'Sucesso');
        this.cadastroForm.reset();
        this.router.navigate(['/home']);
      },
      error => {
        this.toastr.error('Erro ao realizar cadastro!', 'Erro');
        console.error('Erro ao cadastrar usuário', error);
      }
    );
  }
}
