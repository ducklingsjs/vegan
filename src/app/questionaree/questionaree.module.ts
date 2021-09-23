import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionareeRoutingModule } from './questionaree-routing.module';
import { QuestionareeComponent } from './questionaree.component';


@NgModule({
  declarations: [
    QuestionareeComponent
  ],
  imports: [
    CommonModule,
    QuestionareeRoutingModule
  ]
})
export class QuestionareeModule { }
