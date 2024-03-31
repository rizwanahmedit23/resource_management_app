import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Level2FeedbackComponent } from './level2-feedback.component';

describe('Level2FeedbackComponent', () => {
  let component: Level2FeedbackComponent;
  let fixture: ComponentFixture<Level2FeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Level2FeedbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Level2FeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
