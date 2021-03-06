import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'restaurants',
  loadChildren: () => import('./restaurant/restaurant.module').then((m) => m.RestaurantModule),
}, {
  path: '',
  loadChildren: () => import('./questionaree/questionaree.module').then((m) => m.QuestionareeModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
