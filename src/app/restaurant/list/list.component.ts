import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant/restaurant.service';
import { map } from 'rxjs/operators'
import { QuestionsService } from 'src/app/services/questions/questions.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {
  questionarre$ = this.questions.completedQuestionnaire$;
  restaurants$ = this.restaurant.restaurants().pipe(map(x => x.restaurants));

  constructor(private restaurant: RestaurantService, private questions: QuestionsService) { }
}
