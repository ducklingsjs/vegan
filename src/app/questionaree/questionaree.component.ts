import { Component, ChangeDetectionStrategy } from '@angular/core';
import { QuestionsService } from '../services/questions/questions.service';

@Component({
  selector: 'app-questionaree',
  templateUrl: './questionaree.component.html',
  styleUrls: ['./questionaree.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionareeComponent {

  constructor(private question: QuestionsService) { }

  start(): void {
    this.question.start();
  }
}
