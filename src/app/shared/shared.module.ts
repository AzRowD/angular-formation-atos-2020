import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatesModule } from '../templates/templates.module';
import { TextModule } from '../text/text.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    TemplatesModule,
    TextModule
  ]
})
export class SharedModule { }
