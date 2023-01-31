import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login', 
    loadChildren: () => import('./views/login/login.module')
    .then(m => m.LoginModule)
  },

  { path: 'projeto',
    loadChildren: () => import('./views/projetos/projeto.module')
    .then(m => m.ProjetoModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
