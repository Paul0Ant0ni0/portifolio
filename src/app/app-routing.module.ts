import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: 'login', 
    loadChildren: () => import('./views/login/login.module')
    .then(m => m.LoginModule)
  },

  { path: 'projetos',
    loadChildren: () => import('./views/projetos/projeto.module')
    .then(m => m.ProjetoModule) 
  },

  { path: 'contato',
   loadChildren: () => import('./views/contato/contato.module')
   .then(m => m.ContatoModule) 
  },

  { path: 'meu-perfil', loadChildren: () => import('./views/meu-perfil/meu-perfil.module').then(m => m.MeuPerfilModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
