import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ColaboradorService } from '../../services/colaborador.service';
import { ToastrService } from 'ngx-toastr';
import { Colaborador } from '../../Models/Colaborador';

@Component({
  selector: 'app-cadastrar-editar-colaborador',
  templateUrl: './cadastrar-editar-colaborador.component.html',
  styleUrls: ['./cadastrar-editar-colaborador.component.css']
})
export class CadastrarEditarColaboradorComponent implements OnInit {
  cadastroForm: FormGroup;
  escolaridadeOptions: string[] = ['Ensino Fundamental', 'Ensino Médio', 'Ensino Superior'];

  constructor(
    private fb: FormBuilder,
    private colaboradorService: ColaboradorService,
    private router: Router,
    private route: ActivatedRoute, // Adicione ActivatedRoute aqui
    private toastr: ToastrService
  ) {
    this.cadastroForm = this.fb.group({
      name: ['', Validators.required],
      cpf: ['', Validators.required],
      rg: ['', Validators.required],
      dataNasc: ['', Validators.required],
      NIS: ['', Validators.required],
      CBO: ['', Validators.required],
      numCTPS: ['', Validators.required],
      numTituloEleitor: ['', Validators.required],
      escolaridade: ['', Validators.required],
      dataAdmissao: ['', Validators.required],
      valorSalario: ['', Validators.required],
      valorValeTransporte: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const token = localStorage.getItem("token");

    // Exibe o token no console
    console.log("Token:", token);
    const dadosLogin = this.cadastroForm.getRawValue() as Colaborador;
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

  // onSubmit(): void {
  //   if (this.cadastroForm.valid) {
  //     console.log('Form Submitted', this.cadastroForm.value);
  //   }
  // }

  // onSubmit() {
  //   const token = localStorage.getItem("token");

  //   // Exibe o token no console
  //   console.log("Token:", token);
  //   const dadosLogin = this.cadastroForm.getRawValue() as ColaboradorModel;
  //   debugger;
  //   this.colaboradorService.CadastrarColaborador(dadosLogin).subscribe(
  //     response => {
  //       console.log('Resposta da API:', response);
  //       this.toastr.success('Cadastro realizado com sucesso!', 'Sucesso');
  //       this.cadastroForm.reset();
  //       this.router.navigate(['/home']);
  //     },
  //     error => {
  //       this.toastr.error('Erro ao realizar cadastro!', 'Erro');
  //       console.error('Erro ao cadastrar usuário', error);
  //     }
  //   );
  // }


