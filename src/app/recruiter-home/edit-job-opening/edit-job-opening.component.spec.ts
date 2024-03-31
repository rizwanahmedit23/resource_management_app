import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditJobOpeningComponent } from './edit-job-opening.component';

describe('EditJobOpeningComponent', () => {
  let component: EditJobOpeningComponent;
  let fixture: ComponentFixture<EditJobOpeningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditJobOpeningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditJobOpeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
