import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantRoutingModule } from './restaurant-routing.module';
import { RestaurantComponent } from './restaurant.component';
import { ListComponent } from './list/list.component';
import { ContainerModule } from '../components/container/container.module';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatChipsModule } from '@angular/material/chips';
import { FeelingLuckyComponent } from './feeling-lucky/feeling-lucky.component';

@NgModule({
  declarations: [
    RestaurantComponent,
    ListComponent,
    FeelingLuckyComponent,
  ],
  imports: [
    CommonModule,
    RestaurantRoutingModule,
    MatListModule,
    ContainerModule,
    MatTooltipModule,
    MatChipsModule,
  ]
})
export class RestaurantModule { }
