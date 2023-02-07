import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '../shared/material/material.module';
import { PopupComponent } from './popup/popup.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    PopupComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule // Ativa o routerLink no componente
    
  ],
  exports: [ // Exportando para os que os outros módulos tbm possa utiliza-los
    HeaderComponent
  ]
})
export class ComponentsModule { }
