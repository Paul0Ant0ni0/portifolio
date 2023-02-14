import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeuPerfilRoutingModule } from './meu-perfil-routing.module';
import { MeuPerfilComponent } from './meu-perfil/meu-perfil.component';


@NgModule({
  declarations: [
    MeuPerfilComponent
  ],
  imports: [
    CommonModule,
    MeuPerfilRoutingModule
  ]
})
export class MeuPerfilModule { }
