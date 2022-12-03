import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '../shared/material/material.module';



@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [ // Exportando para os que os outros módulos tbm possa utiliza-los
    HeaderComponent
  ]
})
export class ComponentsModule { }
