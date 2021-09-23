import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { MatListOption } from '@angular/material/list';

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

  submit(opts: Array<MatListOption>) {
    this.answer.emit(opts.map(x => x.value));
  }
}
