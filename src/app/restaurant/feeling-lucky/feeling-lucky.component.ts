import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant/restaurant.service';

@Component({
  selector: 'app-feeling-lucky',
  templateUrl: './feeling-lucky.component.html',
  styleUrls: ['./feeling-lucky.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeelingLuckyComponent {

  restaurant$ = this.restaurant.restaurants();

  constructor(private restaurant: RestaurantService) { }
}
