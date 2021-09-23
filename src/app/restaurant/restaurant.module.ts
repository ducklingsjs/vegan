import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantRoutingModule } from './restaurant-routing.module';
import { RestaurantComponent } from './restaurant.component';
import { ListComponent } from './list/list.component';

import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    RestaurantComponent,
    ListComponent,
  ],
  imports: [
    CommonModule,
    RestaurantRoutingModule,
    MatListModule,
  ]
})
export class RestaurantModule { }
