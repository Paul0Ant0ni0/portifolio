import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NovoProjetoComponent } from './novo-projeto/novo-projeto.component';
import { ProjetoComponent } from './projeto/projeto.component';

const routes: Routes = 
[
  { path: '', 
    component: ProjetoComponent 
  },
  {
    path: 'novoprojeto',
    component: NovoProjetoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjetoRoutingModule { }
