import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ColaboradorService } from '../../services/colaborador.service';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-editar-colaborador',
  templateUrl: './editar-colaborador.component.html',
  styleUrls: ['./editar-colaborador.component.css'],
  providers: [DatePipe]
})
export class EditarColaboradorComponent implements OnInit {
  cadastroForm: FormGroup;
  colaboradorId?: number;
  escolaridadeOptions: string[] = ['Ensino Fundamental', 'Ensino Médio', 'Ensino Superior'];

  constructor(
    private fb: FormBuilder,
    private colaboradorService: ColaboradorService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private datePipe: DatePipe
  ) {
    this.cadastroForm = this.fb.group({
      name: [''],
      dataNasc: [''],
      nis: [''],
      cbo: [''],
      numCTPS: [''],
      numTituloEleitor: [''],
      escolaridade: [''],
      dataAdmissao: [''],
      funcao: [''],
      valorSalario: [''],
      valorValeTransporte: [''],
    });
  }

  ngOnInit(): void {
    this.colaboradorId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.colaboradorId) {
      this.colaboradorService.GetColaborador(this.colaboradorId).subscribe(
        colaborador => {
          this.cadastroForm.patchValue({
            ...colaborador,
            dataNasc: this.formatDate(colaborador.dataNasc),
            dataAdmissao: this.formatDate(colaborador.dataAdmissao),
          });
        },
        error => {
          this.toastr.error('Erro ao carregar colaborador!');
          console.error('Erro ao carregar colaborador:', error);
        }
      );
    }
  }

  formatDate(date: Date): string {
    return this.datePipe.transform(date, 'yyyy-MM-dd')!;
  }

  parseDate(dateString: string): Date {
    return new Date(dateString);
  }

  onSubmit(): void {
    if (this.cadastroForm.valid && this.colaboradorId) {
      const formValue = this.cadastroForm.value;
      const updatedColaborador = {
        ...formValue,
        dataNasc: this.parseDate(formValue.dataNasc),
        dataAdmissao: this.parseDate(formValue.dataAdmissao),
      };

      this.colaboradorService.EditarColaborador(this.colaboradorId, updatedColaborador).subscribe(
        response => {
          this.toastr.success('Colaborador editado com sucesso!');
          // this.router.navigate(['/colaboradores']); // Navega de volta para a lista de colaboradores
        },
        error => {
          console.error('Erro ao editar colaborador:', error);
          this.toastr.error('Erro ao editar colaborador!');
        }
      );
    }
  }
}
