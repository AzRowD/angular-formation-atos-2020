import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatesModule } from '../templates/templates.module';
import { TextModule } from '../text/text.module';
import { ButtonComponent } from './components/button/button.component';
import { RouterModule } from '@angular/router';
import { TableauLightComponent } from './components/tableau-light/tableau-light.component';
import { TotalPipe } from './pipes/total.pipe';
import { StateDirective } from './directives/state.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { TableauDarkComponent } from './components/tableau-dark/tableau-dark.component';
import { SubnavComponent } from './components/subnav/subnav.component';



@NgModule({
  declarations: [ButtonComponent, TableauLightComponent, TotalPipe, StateDirective, TableauDarkComponent, SubnavComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    TemplatesModule,
    TextModule,
    ButtonComponent,
    TableauLightComponent,
    TotalPipe,
    StateDirective,
    ReactiveFormsModule,
    TableauDarkComponent,
    SubnavComponent
  ]
})
export class SharedModule { }
