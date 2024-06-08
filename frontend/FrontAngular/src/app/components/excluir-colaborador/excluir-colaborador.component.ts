import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Colaborador } from '../../Models/Colaborador';
import { ColaboradorService } from '../../services/colaborador.service';


@Component({
  selector: 'app-excluir-colaborador',
  templateUrl: './excluir-colaborador.component.html',
  styleUrl: './excluir-colaborador.component.css'
})
export class ExcluirColaboradorComponent {
  
  inputdata: any;
  colaborador!: Colaborador

  constructor(
    private ColaboradorService: ColaboradorService, 
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any
  ){}

  ngOnInit(): void{
    this.inputdata = this.data;
    console.log(this.inputdata)
  }

  Excluir(){
    this.ColaboradorService.ExcluirColaborador(this.inputdata.id).subscribe((data =>{
      window.location.reload();
    }))

    
  }
}






