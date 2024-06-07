import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './auth.guard';
import { CadastrarEditarColaboradorComponent } from './pages/cadastrar-editar-colaborador/cadastrar-editar-colaborador.component';
import { CadastrarEditarFornecedorComponent } from './pages/cadastrar-editar-fornecedor/cadastrar-editar-fornecedor.component';
import { CadastrarEditarServicoComponent } from './pages/cadastrar-editar-servico/cadastrar-editar-servico.component';


const routes: Routes = [
  {
    path:"", pathMatch:"full",redirectTo:"/login"
  },
  {
    path:"login",component:LoginComponent
  },
  {
    path: "cadastro",
    component: CadastroComponent
  },
  {
    path: "home",
    component: HomeComponent, canActivate: [AuthGuard]
  },
  {
    path: "cadastrarEditarColaborador",
    component: CadastrarEditarColaboradorComponent, canActivate: [AuthGuard]
  },
  {
    path: "cadastrarEditarFornecedor",
    component: CadastrarEditarFornecedorComponent, canActivate: [AuthGuard]
  },
  {
    path: "cadastrarEditarServiço",
    component: CadastrarEditarServicoComponent, canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
