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
import { ListagemFormComponent } from './components/listagem-form/listagem-form.component';
import {MatTableModule} from '@angular/material/table';
import { DetalhesComponent } from './pages/detalhes/detalhes.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import { ExcluirComponent } from './components/excluir/excluir.component';

import { ColaboradorComponent } from './pages/colaborador/colaborador.component';
import { ServicoComponent } from './pages/servico/servico.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    HeaderComponent,
    HomeComponent,
    ListagemFormComponent,
    DetalhesComponent,
    ExcluirComponent,
    ColaboradorComponent,
    ServicoComponent
    
  ],
  imports: [
    BrowserModule,
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
