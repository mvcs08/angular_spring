

import {Component, OnInit} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { FornecedorService } from '../../services/fornecedor.service';
import { Fornecedor } from '../../Models/Fornecedor';
import { MatDialog } from '@angular/material/dialog';
import { ExcluirComponent } from '../excluir/excluir.component';







@Component({
  selector: 'app-fornecedores-list',
  templateUrl: './listagem-form.component.html',
  styleUrls: ['./listagem-form.component.scss']
})
export class ListagemFormComponent implements OnInit{

  fornecedores: Fornecedor[] = [];
  fornecedorGeral: Fornecedor[] = [];

  colunas = ['Nome', 'CNPJ', 'Tipo de Serviço', 'Ações'];

  constructor( private fornecedorService: FornecedorService, public dialog: MatDialog){}

  ngOnInit(): void {
    this.fornecedorService.GetFornecedores().subscribe(data => {
      
      this.fornecedorGeral = data;
      this.fornecedores = data;
      
    });

  }

  search(event : Event){
    const target = event.target as HTMLInputElement;
    const value = target.value;

    this.fornecedores = this.fornecedorGeral.filter( fornecedor => {
      return fornecedor.razaoSocial.toLowerCase().includes(value);
    } )
  }

  OpenDialog(id : number){
      this.dialog.open(ExcluirComponent, {
      width: '350px',
      height: '350px',
      data: {
        id: id
      }
    });
  }


}
