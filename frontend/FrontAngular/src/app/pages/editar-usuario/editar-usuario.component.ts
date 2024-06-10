import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';
import { ConfirmacaoExclusaoModalComponent } from '../../components/header/confirmacao-exclusao-modal/confirmacao-exclusao-modal.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.scss']
})
export class EditarUsuarioComponent implements OnInit {
  editarForm!: FormGroup;
  userId!: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService,
    private toastr: ToastrService,
    private dialog: MatDialog
  ) {
    this.editarForm = this.formBuilder.group({
      name: [''],
      email: ['', [Validators.email]],
      password: [''],
      confirmaSenha: ['']
    }, { validators: this.checkPasswords });
  }

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId') || '';
    if (this.userId) {
      this.loadUserData();
    } else {
      this.toastr.error('Usuário não autenticado');
      this.router.navigate(['/login']);
    }
  }

  loadUserData(): void {
    debugger;
    this.loginService.BuscarUsuarioPorId(this.userId).subscribe((user: any) => {
      this.editarForm.patchValue({
        name: user.name,
        email: user.email,
        password: '',
        confirmaSenha: ''
      });
    }, error => {
      this.toastr.error('Erro ao carregar dados do usuário');
    });
  }

  checkPasswords(group: FormGroup) {
    const pass = group.get('password')?.value;
    const confirmPass = group.get('confirmaSenha')?.value;
    return pass === confirmPass ? null : { senhasNaoCombinam: true };
  }

  excluirUsuario(): void {
    const dialogRef = this.dialog.open(ConfirmacaoExclusaoModalComponent, {
      width: '250px',
      data: { mensagem: 'Tem certeza de que deseja excluir este usuário?' }
    });

    dialogRef.afterClosed().subscribe(confirmado => {
      if (confirmado) {
        debugger;

        this.loginService.ExcluirUsuario(this.userId).subscribe(
          response => {
            console.log('Resposta da API:', response);
            if (response === 'Usuário deletado com sucesso!') {
              this.toastr.success('Usuário excluído com sucesso!');
              localStorage.setItem('token', '');
              this.router.navigate(['/login']);
            } else {
              this.toastr.error('Erro ao excluir o Usuário!');
            }
          },
          error => {
            console.error('Erro da API:', error);
            this.toastr.error('Erro ao excluir o Usuário!');
          }
        );
      }
    });
}
editarUsuario(): void {
  if (this.editarForm.valid) {
    debugger;
    const userData = {
      name: this.editarForm.get('name')?.value,
      email: this.editarForm.get('email')?.value,
      password: this.editarForm.get('password')?.value
    };
    console.log(userData);

    this.loginService.EditarUsuario(this.userId, userData).subscribe(
      response => {
        debugger;
        console.log('Resposta da API:', response);
          this.toastr.success('Usuário editado com sucesso!');
          localStorage.setItem('token', '');
          this.router.navigate(['/login']);
      },
      error => {
        console.error('Erro da API:', error);
        this.toastr.error('Erro ao editar o Usuário!');
      }
    );
  }
}




}
