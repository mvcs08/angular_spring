import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Servico } from '../../Models/Servico';
import { ServicoService } from '../../services/servico.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cadastrar-editar-servico',
  templateUrl: './cadastrar-editar-servico.component.html',
  styleUrl: './cadastrar-editar-servico.component.css'
})
export class CadastrarEditarServicoComponent implements OnInit{
  cadastroForm: FormGroup;
  fornecedorOptions: string[] = ['Fornecedor 1', 'Fornecedor 2', 'Fornecedor 3'];
  formaPagamentoOptions: string[] = ['À Vista', 'Parcelado'];
  centroCustoOptions: string[] = ['Centro 1', 'Centro 2', 'Centro 3'];
  statusPagamentoOptions: string[] = ['Pago', 'Pendente', 'Atrasado'];

  constructor(private fb: FormBuilder, private servicoService: ServicoService, private router: Router, private toastr: ToastrService) {
    this.cadastroForm = this.fb.group({
      titulo: ['', Validators.required],
      fornecedor: ['', Validators.required],
      notaFiscal: ['', Validators.required],
      formaPagamento: ['', Validators.required],
      parcelas: ['', Validators.required],
      vencimento: ['', Validators.required],
      centroCusto: ['', Validators.required],
      statusPagamento: ['', Validators.required],
    });
  }

  ngOnInit(): void { }

  onSubmit() {
    const token = localStorage.getItem("token");

    console.log("Token:", token);
    const dadosLogin = this.cadastroForm.getRawValue() as Servico;
    this.servicoService.CadastrarServico(dadosLogin).subscribe(
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
