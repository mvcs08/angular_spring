import { Component, Inject } from '@angular/core';
import { FornecedorService } from '../../services/fornecedor.service';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Fornecedor } from '../../Models/Fornecedor';


@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrl: './excluir.component.css'
})
export class ExcluirComponent {
  
  inputdata: any;
  fornecedor!: Fornecedor

  constructor(
    private FornecedorService: FornecedorService, 
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any
  ){}

  ngOnInit(): void{
    this.inputdata = this.data;

    this.FornecedorService.GetFornecedores()
  }
}
