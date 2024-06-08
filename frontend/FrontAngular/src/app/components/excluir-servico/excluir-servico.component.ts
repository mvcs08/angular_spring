import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServicoService } from '../../services/servico.service';
import { Servico } from '../../Models/Servico';



@Component({
  selector: 'app-excluir-servico',
  templateUrl: './excluir-servico.component.html',
  styleUrl: './excluir-servico.component.css'
})
export class ExcluirServicoComponent {
  
  inputdata: any;
  Servico!: Servico

  constructor(
    private ServicoService: ServicoService, 
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any
  ){}

  ngOnInit(): void{
    this.inputdata = this.data;
    console.log(this.inputdata)
  }

  Excluir(){
    this.ServicoService.ExcluirServico(this.inputdata.id).subscribe((data =>{
      window.location.reload();
    }))

    
  }
}








