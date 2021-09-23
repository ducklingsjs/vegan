import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { QuestionsService } from '../services/questions/questions.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RestaurantComponent {}
