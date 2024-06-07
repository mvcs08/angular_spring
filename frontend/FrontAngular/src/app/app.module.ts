import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';import { ReactiveFormsModule } from '@angular/forms';
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
// import { CadastrarComponent } from './pages/cadastrar/cadastrar.component';
import { CadastrarEditarColaboradorComponent } from './pages/cadastrar-editar-colaborador/cadastrar-editar-colaborador.component';
import { CadastrarEditarFornecedorComponent } from './pages/cadastrar-editar-fornecedor/cadastrar-editar-fornecedor.component';
import { CadastrarEditarServicoComponent } from './pages/cadastrar-editar-servico/cadastrar-editar-servico.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    HeaderComponent,
    HomeComponent,
    // CadastrarComponent,
    CadastrarEditarColaboradorComponent,
    CadastrarEditarFornecedorComponent,
    CadastrarEditarServicoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatIconModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      closeButton: true,
      progressBar: true,
      progressAnimation: 'increasing',
      tapToDismiss: true,
      newestOnTop: true
    }),
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [
    provideAnimationsAsync(),
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
