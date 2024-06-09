import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Fornecedor } from '../../Models/Fornecedor';
import { FornecedorService } from '../../services/fornecedor.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cadastrar-editar-fornecedor',
  templateUrl: './cadastrar-editar-fornecedor.component.html',
  styleUrl: './cadastrar-editar-fornecedor.component.css'
})
export class CadastrarEditarFornecedorComponent implements OnInit {
  cadastroForm: FormGroup;
  tipoProdutoOptions: string[] = ['Produto 1', 'Produto 2', 'Produto 3'];

  constructor(private fb: FormBuilder, private fornecedorService: FornecedorService, private router: Router, private toastr: ToastrService) {
    this.cadastroForm = this.fb.group({
      razaoSocial: ['', Validators.required],
      nomeFantasia: ['', Validators.required],
      cpfOuCNPJ: ['', Validators.required],
      inscricaoEstadual: ['', Validators.required],
      endereco: ['', Validators.required],
      tipo: ['', Validators.required],
      representante: ['', Validators.required],
      numeroRepresentante: ['', Validators.required],
      email: ['', Validators.required],
      dadosBancarios: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const token = localStorage.getItem("token");

    // Exibe o token no console
    console.log("Token:", token);
    const dadosFornecedor = this.cadastroForm.getRawValue() as Fornecedor;
    debugger;
    this.fornecedorService.CadastrarFornecedor(dadosFornecedor).subscribe(
      response => {
        console.log('Resposta da API:', response);
        this.toastr.success('Cadastro realizado com sucesso!', 'Sucesso');
        this.cadastroForm.reset();
        this.router.navigate(['/home']);
      },
      error => {
        this.toastr.error('Erro ao realizar cadastro!', 'Erro');
        console.error('Erro ao cadastrar fornecedor', error);
      }
    );
  }
}


