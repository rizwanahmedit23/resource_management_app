import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Level1FeedbackComponent } from './level1-feedback.component';

describe('Level1FeedbackComponent', () => {
  let component: Level1FeedbackComponent;
  let fixture: ComponentFixture<Level1FeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Level1FeedbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Level1FeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
