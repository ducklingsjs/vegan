import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionareeComponent } from './questionaree.component';

describe('QuestionareeComponent', () => {
  let component: QuestionareeComponent;
  let fixture: ComponentFixture<QuestionareeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionareeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionareeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
