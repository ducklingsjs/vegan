import { Component, ChangeDetectionStrategy } from '@angular/core';
import { bufferCount, map, shareReplay, tap } from 'rxjs/operators';
import { RestaurantService } from 'src/app/services/restaurant/restaurant.service';

@Component({
  selector: 'app-feeling-lucky',
  templateUrl: './feeling-lucky.component.html',
  styleUrls: ['./feeling-lucky.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeelingLuckyComponent {

  restaurant$ = this.restaurant.restaurants().pipe(
    map((restaurants) => restaurants.restaurants[Math.floor(Math.random() * restaurants.restaurants?.length)]),
    shareReplay(1),
  );

  meal$ = this.restaurant$.pipe(
    map((restaurant) => restaurant.meals[Math.floor(Math.random() * restaurant.meals?.length)]),
    shareReplay(1),
  );

  constructor(private restaurant: RestaurantService) { }
}
