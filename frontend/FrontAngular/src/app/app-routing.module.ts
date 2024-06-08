import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './auth.guard';
import { ListagemFormComponent } from './components/listagem-form/listagem-form.component';
import { DetalhesComponent } from './pages/detalhes/detalhes.component';
import { ColaboradorComponent } from './pages/colaborador/colaborador.component';
import { ServicoComponent } from './pages/servico/servico.component';
import { EditarUsuarioComponent } from './pages/editar-usuario/editar-usuario.component';
import { DetalhesColaboradorComponent } from './pages/detalhes-colaborador/detalhes-colaborador.component';
import { DetalhesServicoComponent } from './pages/detalhes-servico/detalhes-servico.component';
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
  },
  {
    path: "fornecedor",
    component: ListagemFormComponent
  },
  {
    path: "fornecedor/visualizar/:id",
    component: DetalhesComponent
  },
  {
    path: "colaborador",
    component: ColaboradorComponent
  },
  {
    path: "colaborador/visualizar/:id",
    component: DetalhesColaboradorComponent
  },
  {
    path: "servico",
    component: ServicoComponent
  },
  {
  path: "servico/visualizar/:id",
  component: DetalhesServicoComponent
  },
  {
    path: "editarUsuario",
    component: EditarUsuarioComponent, canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
