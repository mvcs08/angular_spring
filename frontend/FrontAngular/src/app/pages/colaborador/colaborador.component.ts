import {Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ColaboradorService } from '../../services/colaborador.service';
import { Colaborador } from '../../Models/Colaborador';
//import { ExcluirComponent } from '../excluir/excluir.component';


@Component({
  selector: 'app-colaborador',
  templateUrl: './colaborador.component.html',
  styleUrl: './colaborador.component.css'
})
export class ColaboradorComponent implements OnInit{

  colaboradores: Colaborador[] = [];
  colaboradoresGeral: Colaborador[] = [];

  colunas = ['Nome', 'Função', 'Salário', 'Ações'];

  constructor( private colaboradorService: ColaboradorService, public dialog: MatDialog){}

  ngOnInit(): void {
    this.colaboradorService.GetColaboradores().subscribe(data => {
      
      this.colaboradoresGeral = data;
      this.colaboradores = data;
      
    });

  }

  search(event : Event){
    const target = event.target as HTMLInputElement;
    const value = target.value;

    this.colaboradores = this.colaboradoresGeral.filter( colaboradores => {
      return colaboradores.name.toLowerCase().includes(value);
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




















