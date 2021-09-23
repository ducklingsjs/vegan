import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from './question/question.component';
import { QuestionareeComponent } from './questionaree.component';

const routes: Routes = [{
  path: '',
  component: QuestionareeComponent
}, {
  path: 'question/:index',
  component: QuestionComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionareeRoutingModule { }
