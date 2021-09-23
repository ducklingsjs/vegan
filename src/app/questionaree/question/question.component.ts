import { Component, OnInit, ChangeDetectionStrategy, ComponentFactoryResolver, ViewContainerRef, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { map, switchMap, distinctUntilChanged, takeUntil, tap } from 'rxjs/operators';
import { QuestionsService } from 'src/app/services/questions/questions.service';
import { MultiComponent } from './multi/multi.component';
import { SingleComponent } from './single/single.component';

export interface IViewModel {
  question: any;
  currIndex: number;
}

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionComponent implements OnDestroy, OnInit {

  ends$ = new Subject();

  constructor(
    private activatedRoute: ActivatedRoute,
    private cfr: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef,
    private questions: QuestionsService,
    private cd: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.pipe(
      map(paramMap => parseInt(paramMap.get('index') ?? '0', 10) as number),
      distinctUntilChanged(),
      switchMap((index) => {
        return this.questions.questions$.pipe(
          map((questions) => questions[index]),
          switchMap((question) => {
            this.viewContainerRef.clear();
            const component = question.type === 'single' ? SingleComponent : MultiComponent;
            const factory = this.cfr.resolveComponentFactory(component);
            const componentInstance = this.viewContainerRef.createComponent(factory);
            componentInstance.instance.question = question;
            componentInstance.hostView.detectChanges();
            return componentInstance.instance.answer.pipe(
              tap((result) => this.questions.storeResult(index, [question, result])),
              switchMap(() => this.questions.openQuestion(index + 1)),
            )
          })
        )
      }),
      takeUntil(this.ends$),
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.ends$.next();
    this.ends$.complete();
  }
}
