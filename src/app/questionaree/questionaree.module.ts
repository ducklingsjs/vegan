import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionareeRoutingModule } from './questionaree-routing.module';
import { QuestionareeComponent } from './questionaree.component';
import { MatButtonModule } from '@angular/material/button';
import { ContainerModule } from '../components/container/container.module';


@NgModule({
  declarations: [
    QuestionareeComponent
  ],
  imports: [
    CommonModule,
    QuestionareeRoutingModule,
    MatButtonModule,
    ContainerModule,
  ]
})
export class QuestionareeModule { }
