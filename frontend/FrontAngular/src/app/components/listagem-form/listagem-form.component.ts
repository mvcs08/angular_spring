

import {Component, OnInit} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { FornecedorService } from '../../services/fornecedor.service';
import { Fornecedor } from '../../Models/Fornecedor';




/*
export interface Fornecedor {
  nome: string;
  CNPJ: number;
  TipoProduto: string;
}

const FORNECEDORES_LIST: Fornecedor[] = [
  {nome: 'UFBA', CNPJ: 1.0079, TipoProduto: 'Limpeza'},
  {nome: 'UFBA', CNPJ: 4.0026, TipoProduto: 'Limpeza'},
  {nome: 'UFBA', CNPJ: 6.941, TipoProduto: 'Limpeza'},
  {nome: 'UFBA', CNPJ: 9.0122, TipoProduto: 'Limpeza'},
  {nome: 'UFBA', CNPJ: 10.811, TipoProduto: 'Limpeza'},
  {nome: 'UFBA', CNPJ: 12.0107, TipoProduto: 'Limpeza'},
  {nome: 'UFBA', CNPJ: 14.0067, TipoProduto: 'Limpeza'},
  {nome: 'UFBA', CNPJ: 15.9994, TipoProduto: 'Limpeza'},
  {nome: 'UFBA', CNPJ: 18.9984, TipoProduto: 'Limpeza'},
  {nome: 'UFBA', CNPJ: 20.1797, TipoProduto: 'Limpeza'},
];
*/

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-fornecedores-list',
  templateUrl: './listagem-form.component.html',
  styleUrls: ['./listagem-form.component.scss']
})
export class ListagemFormComponent implements OnInit{

  fornecedores: Fornecedor[] = [];
  fornecedorGeral: Fornecedor[] = [];

  colunas = ['Nome', 'CNPJ', 'Tipo de Serviço', 'Ações'];

  constructor( private fornecedorService: FornecedorService){}

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
}
