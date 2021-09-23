import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-multi',
  templateUrl: './multi.component.html',
  styleUrls: ['./multi.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultiComponent implements OnInit {
  @Input()
  question: any;

  @Output()
  answer = new EventEmitter<any>();

  ngOnInit() {
    console.log(this);
  }
}
