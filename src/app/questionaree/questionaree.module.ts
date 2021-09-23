import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionareeRoutingModule } from './questionaree-routing.module';
import { QuestionareeComponent } from './questionaree.component';
import { MatButtonModule } from '@angular/material/button';
import { ContainerModule } from '../components/container/container.module';
import { QuestionComponent } from './question/question.component';
import { SingleComponent } from './question/single/single.component';
import { MultiComponent } from './question/multi/multi.component';


@NgModule({
  declarations: [
    QuestionareeComponent,
    QuestionComponent,
    SingleComponent,
    MultiComponent,
  ],
  imports: [
    CommonModule,
    QuestionareeRoutingModule,
    MatButtonModule,
    ContainerModule,
  ]
})
export class QuestionareeModule { }
