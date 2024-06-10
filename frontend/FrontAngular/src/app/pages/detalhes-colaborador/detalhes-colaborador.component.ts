import { Component, OnInit } from '@angular/core';
import { FornecedorService } from '../../services/fornecedor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Fornecedor } from '../../Models/Fornecedor';
import { Colaborador } from '../../Models/Colaborador';
import { ColaboradorService } from '../../services/colaborador.service';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-detalhes-colaborador',
  templateUrl: './detalhes-colaborador.component.html',
  styleUrl: './detalhes-colaborador.component.css',
  providers: [DatePipe]
})
export class DetalhesColaboradorComponent implements OnInit {
  colaborador? : Colaborador;
  dataNascFormatada?: string | null;
  dataAdmissaoFormatada?: string | null;

  constructor( private colaboradorService: ColaboradorService, private route:ActivatedRoute, private router: Router, private datePipe: DatePipe){}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.colaboradorService.GetColaborador(id).subscribe(data => {
      this.colaborador = data;
      debugger;
      if (this.colaborador?.dataNasc) {
        const date = new Date(this.colaborador.dataNasc);
        this.dataNascFormatada = this.datePipe.transform(date, 'yyyy-MM-dd');
      }
      if (this.colaborador?.dataAdmissao) {
        const date = new Date(this.colaborador.dataAdmissao);
        this.dataAdmissaoFormatada = this.datePipe.transform(date, 'yyyy-MM-dd');
      }
    });
  }
}





