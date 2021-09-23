import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantRoutingModule } from './restaurant-routing.module';
import { RestaurantComponent } from './restaurant.component';
import { ListComponent } from './list/list.component';
import { ContainerModule } from '../components/container/container.module';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    RestaurantComponent,
    ListComponent,
  ],
  imports: [
    CommonModule,
    RestaurantRoutingModule,
    MatListModule,
    ContainerModule,
  ]
})
export class RestaurantModule { }
