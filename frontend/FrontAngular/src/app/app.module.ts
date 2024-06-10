import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AuthInterceptor } from './services/auth.interceptor';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { EditarUsuarioComponent } from './pages/editar-usuario/editar-usuario.component';
import { ConfirmacaoExclusaoModalComponent } from './components/header/confirmacao-exclusao-modal/confirmacao-exclusao-modal.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ListagemFormComponent } from './components/listagem-form/listagem-form.component';
import {MatTableModule} from '@angular/material/table';
import { DetalhesComponent } from './pages/detalhes/detalhes.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { ExcluirComponent } from './components/excluir/excluir.component';
import { ColaboradorComponent } from './pages/colaborador/colaborador.component';
import { ServicoComponent } from './pages/servico/servico.component';
import { DetalhesColaboradorComponent } from './pages/detalhes-colaborador/detalhes-colaborador.component';
import { ExcluirColaboradorComponent } from './components/excluir-colaborador/excluir-colaborador.component';
import { ExcluirServicoComponent } from './components/excluir-servico/excluir-servico.component';
import { DetalhesServicoComponent } from './pages/detalhes-servico/detalhes-servico.component';
import { EditarColaboradorComponent } from './pages/editar-colaborador/editar-colaborador.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
// import { CadastrarComponent } from './pages/cadastrar/cadastrar.component';
import { CadastrarEditarColaboradorComponent } from './pages/cadastrar-editar-colaborador/cadastrar-editar-colaborador.component';
import { CadastrarEditarFornecedorComponent } from './pages/cadastrar-editar-fornecedor/cadastrar-editar-fornecedor.component';
import { CadastrarEditarServicoComponent } from './pages/cadastrar-editar-servico/cadastrar-editar-servico.component';
import { EditarFornecedorComponent } from './pages/editar-fornecedor/editar-fornecedor.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    HeaderComponent,
    HomeComponent,
    EditarUsuarioComponent,
    ConfirmacaoExclusaoModalComponent,
    ListagemFormComponent,
    DetalhesComponent,
    ExcluirComponent,
    ColaboradorComponent,
    ExcluirColaboradorComponent,
    ServicoComponent,
    DetalhesColaboradorComponent,
    ExcluirServicoComponent,
    DetalhesServicoComponent,
    EditarColaboradorComponent,
    CadastrarEditarColaboradorComponent,
    CadastrarEditarFornecedorComponent,
    CadastrarEditarServicoComponent,
    EditarFornecedorComponent

  ],
  imports: [
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    BrowserModule,
    MatSelectModule,
    MatTableModule,
    AppRoutingModule,
    MatCardModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      closeButton: true,
      progressBar: true,
      progressAnimation: 'increasing',
      tapToDismiss: true,
      newestOnTop: true
    })

  ],
  providers: [
    provideAnimationsAsync(),
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
