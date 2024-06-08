import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Colaborador } from '../../Models/Colaborador';
import { ColaboradorService } from '../../services/colaborador.service';
import { Servico } from '../../Models/Servico';
import { ServicoService } from '../../services/servico.service';



@Component({
  selector: 'app-detalhes-servico',
  templateUrl: './detalhes-servico.component.html',
  styleUrl: './detalhes-servico.component.css'
})
export class DetalhesServicoComponent implements OnInit {

  servico? : Servico;
  constructor( private servicoService: ServicoService, private route:ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.servicoService.GetServico(id).subscribe(data => {
    this.servico = data;
    })
  }
}