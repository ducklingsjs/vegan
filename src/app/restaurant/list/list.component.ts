import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant/restaurant.service';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {
  restaurants$ = this.restaurant.restaurants().pipe(map(x => x.restaurants));
  constructor(private restaurant: RestaurantService) { }
}
