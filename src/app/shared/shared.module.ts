import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatesModule } from '../templates/templates.module';
import { TextModule } from '../text/text.module';
import { ButtonComponent } from './components/button/button.component';
import { RouterModule } from '@angular/router';
import { TableauLightComponent } from './components/tableau-light/tableau-light.component';
import { TotalPipe } from './pipes/total.pipe';



@NgModule({
  declarations: [ButtonComponent, TableauLightComponent, TotalPipe],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    TemplatesModule,
    TextModule,
    ButtonComponent,
    TableauLightComponent,
    TotalPipe
  ]
})
export class SharedModule { }
