import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ColaboradorService } from '../../services/colaborador.service';
import { Colaborador } from '../../Models/Colaborador';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-editar-colaborador',
  templateUrl: './editar-colaborador.component.html',
  styleUrls: ['./editar-colaborador.component.css']
})
export class EditarColaboradorComponent implements OnInit {
  cadastroForm: FormGroup;
  colaboradorId?: number;
  // colaborador?: Colaborador;
  escolaridadeOptions: string[] = ['Ensino Fundamental', 'Ensino Médio', 'Ensino Superior'];
  // route: any;

  constructor(private fb: FormBuilder, private colaboradorService: ColaboradorService, private router: Router, private route: ActivatedRoute, private toastr: ToastrService) {
    this.cadastroForm = this.fb.group({
      name: [''],
      cpf: [''],
      rg: [''],
      dataNasc: [''],
      NIS: [''],
      CBO: [''],
      numCTPS: [''],
      numTituloEleitor: [''],
      escolaridade: [''],
      dataAdmissao: [''],
      valorSalario: [''],
      valorValeTransporte: [''],
    });
  }

  ngOnInit(): void {
    this.colaboradorId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.colaboradorId) {
      this.colaboradorService.GetColaborador(this.colaboradorId).subscribe(
        colaborador => {
          this.cadastroForm.patchValue(colaborador);
        },
        error => {
          this.toastr.error('Erro ao carregar colaborador!');
          console.error('Erro ao carregar colaborador:', error);
        }
      );
    }
  }

  onSubmit(): void {
    debugger;
    if (this.cadastroForm.valid && this.colaboradorId) {
      const updatedColaborador = this.cadastroForm.value;
      this.colaboradorService.EditarColaborador(this.colaboradorId, updatedColaborador).subscribe(
        response => {
          this.toastr.success('Colaborador editado com sucesso!');
          //this.router.navigate(['/colaboradores']); // Navega de volta para a lista de colaboradores
        },
        error => {
          console.error('Erro ao editar colaborador:', error);
          this.toastr.error('Erro ao editar colaborador!');
        }
      );
    }
  }

  // onSubmit(): void {
  //   debugger;
  //   if (this.cadastroForm.valid) {
  //     const id = 1;
  //     const updatedColaborador = this.cadastroForm.value;

  //     this.colaboradorService.EditarColaborador(id, updatedColaborador).subscribe(
  //       response => {
  //         console.log('Resposta da API:', response);
  //         this.toastr.success('Colaborador editado com sucesso!');
  //       },
  //       error => {
  //         console.error('Erro da API:', error);
  //         this.toastr.error('Erro ao editar o colaborador!');
  //       }
  //     );
  //   }
  // }
}
