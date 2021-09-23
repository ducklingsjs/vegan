import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-questionaree',
  templateUrl: './questionaree.component.html',
  styleUrls: ['./questionaree.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionareeComponent {

  constructor() { }

  start(): void {
    alert('started');
  }
}
