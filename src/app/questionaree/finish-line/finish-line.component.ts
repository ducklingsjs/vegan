import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions/questions.service';

@Component({
  selector: 'app-finish-line',
  templateUrl: './finish-line.component.html',
  styleUrls: ['./finish-line.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FinishLineComponent {
  result$ = this.question.completedQuestionnaire$;

  constructor(private question: QuestionsService) { }
}
