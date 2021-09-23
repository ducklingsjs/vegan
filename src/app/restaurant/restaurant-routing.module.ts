import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeelingLuckyComponent } from './feeling-lucky/feeling-lucky.component';
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
      },
      {
        path: 'feeling-lucky',
        component: FeelingLuckyComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantRoutingModule { }
