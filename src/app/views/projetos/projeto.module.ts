import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjetoRoutingModule } from './projeto-routing.module';
import { ProjetoComponent } from './projeto/projeto.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { MaterialModule } from 'src/app/shared/material/material.module';


@NgModule({
  declarations: [
    ProjetoComponent
  ],
  imports: [
    CommonModule,
    ProjetoRoutingModule,
    ComponentsModule,
    MaterialModule
  ]
})
export class ProjetoModule { }
