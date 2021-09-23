import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { RestaurantComponent } from './restaurant.component';

const routes: Routes = [
  {
    path: '',
    component: RestaurantComponent,
    children: [
      {
        path: '',
        component: ListComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantRoutingModule { }
