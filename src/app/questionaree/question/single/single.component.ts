import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-question-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleComponent {
  @Input()
  question: any;

  @Output()
  answer = new EventEmitter<any>();

  constructor() { }
}
