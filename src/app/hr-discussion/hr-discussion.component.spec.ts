import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HRDiscussionComponent } from './hr-discussion.component';

describe('HrDiscussionComponent', () => {
  let component: HRDiscussionComponent;
  let fixture: ComponentFixture<HRDiscussionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HRDiscussionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HRDiscussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
