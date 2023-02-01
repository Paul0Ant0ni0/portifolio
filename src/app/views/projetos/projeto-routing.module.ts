import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProjetoComponent } from './edit-projeto/edit-projeto.component';
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
  },
  {
    path: 'editprojeto/:id',
    component: EditProjetoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjetoRoutingModule { }
