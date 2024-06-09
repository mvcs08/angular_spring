import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FornecedorService } from '../../services/fornecedor.service';
import { Fornecedor } from '../../Models/Fornecedor';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editar-fornecedor',
  templateUrl: './editar-fornecedor.component.html',
  styleUrl: './editar-fornecedor.component.css'
})
export class EditarFornecedorComponent implements OnInit {
  cadastroForm: FormGroup;
  fornecedorId?: number;
  tipoProdutoOptions: string[] = ['Produto 1', 'Produto 2', 'Produto 3'];

  constructor(private fb: FormBuilder, private fornecedorService: FornecedorService, private router: Router, private route: ActivatedRoute, private toastr: ToastrService) {
    this.cadastroForm = this.fb.group({
      razaoSocial: [''],
      nomeFantasia: [''],
      cpfOuCNPJ: [''],
      inscricaoEstadual: [''],
      endereco: [''],
      tipo: [''],
      representante: [''],
      numeroRepresentante: [''],
      email: [''],
      dadosBancarios: [''],
    });
  }

  ngOnInit(): void {
    this.fornecedorId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.fornecedorId) {
      this.fornecedorService.GetFornecedor(this.fornecedorId).subscribe(
        fornecedor => {
          this.cadastroForm.patchValue(fornecedor);
        },
        error => {
          this.toastr.error('Erro ao carregar fornecedor!');
          console.error('Erro ao carregar fornecedor:', error);
        }
      );
    }
  }

  onSubmit(): void {
    debugger;
    if (this.cadastroForm.valid && this.fornecedorId) {
      const updatedfornecedor = this.cadastroForm.value;
      this.fornecedorService.EditarFornecedor(this.fornecedorId, updatedfornecedor).subscribe(
        response => {
          this.toastr.success('fornecedor editado com sucesso!');
          //this.router.navigate(['/fornecedores']); // Navega de volta para a lista de fornecedores
        },
        error => {
          console.error('Erro ao editar fornecedor:', error);
          this.toastr.error('Erro ao editar fornecedor!');
        }
      );
    }
  }
}
