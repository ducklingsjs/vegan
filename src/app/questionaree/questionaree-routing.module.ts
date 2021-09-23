import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinishLineComponent } from './finish-line/finish-line.component';
import { QuestionComponent } from './question/question.component';
import { QuestionareeComponent } from './questionaree.component';

const routes: Routes = [{
  path: '',
  component: QuestionareeComponent
}, {
  path: 'question/:index',
  component: QuestionComponent,
}, {
  path: 'finish-line',
  component: FinishLineComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionareeRoutingModule { }
