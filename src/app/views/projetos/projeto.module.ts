import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjetoRoutingModule } from './projeto-routing.module';
import { ProjetoComponent } from './projeto/projeto.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NovoProjetoComponent } from './novo-projeto/novo-projeto.component';


@NgModule({
  declarations: [
    ProjetoComponent,
    NovoProjetoComponent
  ],
  imports: [
    CommonModule,
    ProjetoRoutingModule,
    ComponentsModule,
    MaterialModule,
    ReactiveFormsModule 
  ]
})
export class ProjetoModule { }
