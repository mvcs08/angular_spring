import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
