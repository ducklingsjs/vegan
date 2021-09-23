import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant/restaurant.service';
import { map } from 'rxjs/operators';
import { QuestionsService } from 'src/app/services/questions/questions.service';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {
  questionarre$ = this.questions.completedQuestionnaire$;
  restaurants$ = combineLatest([
    this.questionarre$,
    this.restaurant.restaurants(),
  ]).pipe(
    map(([q, r]) => this.filterRestaurants(q, r))
  );

  constructor(
    private restaurant: RestaurantService,
    private questions: QuestionsService
  ) {}

  private filterRestaurants(q: any, r: any) {
    if (q && q.get(0)[1][0] === "Yes") {
      return r.restaurants.filter((rest: any) => rest.name === "OMMA 한식당 . Korejski Restoran");
    }

    return r.restaurants;
  }
}
