import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-question-multi',
  templateUrl: './multi.component.html',
  styleUrls: ['./multi.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultiComponent {
  @Input()
  question: any;

  @Output()
  answer = new EventEmitter<any>();

  constructor() { }
}
