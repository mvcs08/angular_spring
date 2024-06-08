import {Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Servico } from '../../Models/Servico';
import { ServicoService } from '../../services/servico.service';
//import { ExcluirComponent } from '../excluir/excluir.component';


@Component({
  selector: 'app-servico',
  templateUrl: './servico.component.html',
  styleUrl: './servico.component.css'
})
export class ServicoComponent implements OnInit{

  servicos: Servico[] = [];
  servicosGeral: Servico[] = [];

  colunas = ['Tipo', 'Valor', 'Descrição', 'Ações'];

  constructor( private servicoService: ServicoService, public dialog: MatDialog){}

  ngOnInit(): void {
    this.servicoService.GetServicos().subscribe(data => {
      
      this.servicosGeral = data;
      this.servicos = data;
      
    });

  }

  search(event : Event){
    const target = event.target as HTMLInputElement;
    const value = target.value;

    this.servicos = this.servicosGeral.filter( servicos => {
      return servicos.tipo.toLowerCase().includes(value);
    } )
  }

  // OpenDialog(id : number){
  //     this.dialog.open(ExcluirComponent, {
  //     width: '350px',
  //     height: '350px',
  //     data: {
  //       id: id
  //     }
  //   });
  // }
}

