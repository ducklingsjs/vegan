import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionareeComponent } from './questionaree.component';

const routes: Routes = [{ path: '', component: QuestionareeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionareeRoutingModule { }
