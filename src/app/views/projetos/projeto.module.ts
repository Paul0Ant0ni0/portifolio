import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjetoRoutingModule } from './projeto-routing.module';
import { ProjetoComponent } from './projeto/projeto.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NovoProjetoComponent } from './novo-projeto/novo-projeto.component';
import { EditProjetoComponent } from './edit-projeto/edit-projeto.component';


@NgModule({
  declarations: [
    ProjetoComponent,
    NovoProjetoComponent,
    EditProjetoComponent
  ],
  imports: [
    CommonModule,
    ProjetoRoutingModule,
    ComponentsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ProjetoModule { }
