import { Component, OnInit } from '@angular/core';
import { FornecedorService } from '../../services/fornecedor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Fornecedor } from '../../Models/Fornecedor';
import { Colaborador } from '../../Models/Colaborador';
import { ColaboradorService } from '../../services/colaborador.service';



@Component({
  selector: 'app-detalhes-colaborador',
  templateUrl: './detalhes-colaborador.component.html',
  styleUrl: './detalhes-colaborador.component.css'
})
export class DetalhesColaboradorComponent implements OnInit {

  colaborador? : Colaborador;
  constructor( private colaboradorService: ColaboradorService, private route:ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.colaboradorService.GetColaborador(id).subscribe(data => {
      this.colaborador = data;
    })
  }
}





