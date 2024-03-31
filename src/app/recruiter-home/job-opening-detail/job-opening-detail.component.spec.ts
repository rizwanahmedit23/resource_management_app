import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOpeningDetailComponent } from './job-opening-detail.component';

describe('JobOpeningDetailComponent', () => {
  let component: JobOpeningDetailComponent;
  let fixture: ComponentFixture<JobOpeningDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobOpeningDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobOpeningDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
