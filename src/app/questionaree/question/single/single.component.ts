import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { MatListOption } from '@angular/material/list';

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

  submit(opts: Array<MatListOption>) {
    this.answer.emit(opts.map(x => x.value));
  }
}
