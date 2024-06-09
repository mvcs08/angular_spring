import {Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Servico } from '../../Models/Servico';
import { ServicoService } from '../../services/servico.service';
import { ExcluirServicoComponent } from '../../components/excluir-servico/excluir-servico.component';
//import { ExcluirComponent } from '../excluir/excluir.component';


@Component({
  selector: 'app-servico',
  templateUrl: './servico.component.html',
  styleUrl: './servico.component.css'
})
export class ServicoComponent implements OnInit{

  servicos: Servico[] = [];
  servicosGeral: Servico[] = [];

  colunas = ['Titulo', 'Fornecedor', 'Nota', 'Pagamento', 'Parcelas', 'Vencimento', 'CC', 'Status', 'Ações'];

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
      return servicos.titulo.toLowerCase().includes(value);
    } )
  }

  OpenDialog(id : number){
      this.dialog.open(ExcluirServicoComponent, {
      width: '350px',
      height: '350px',
      data: {
        id: id
      }
    });
  }
}

