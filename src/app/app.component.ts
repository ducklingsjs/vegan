import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RestaurantService } from './services/restaurant/restaurant.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'vegan-js-hackathon';

  constructor(private restaurants: RestaurantService) {}

  refreshLucky(): void {
    this.restaurants.refreshLucky$.next(void 0);
  }
}
