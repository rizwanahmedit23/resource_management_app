// add-job-opening.component.ts
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JobOpeningService } from '../../services/job-opening.service'; // Adjust the path

@Component({
  selector: 'app-add-job-opening',
  templateUrl: './add-job-opening.component.html',
  styleUrls: ['./add-job-opening.component.css'],
})
export class AddJobOpeningComponent implements OnInit {
  jobOpeningForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private jobOpeningService: JobOpeningService
  ) {}

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.jobOpeningForm = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      requirements: ['', [Validators.required]],
      responsibilities: ['', [Validators.required]],
      experience: ['', [Validators.required]],
      shiftTiming: ['', [Validators.required]],
      status: ['active'],
    });
  }

  submitForm() {
    if (1) {
      const jobOpeningData = this.jobOpeningForm.value;
      console.log(jobOpeningData);
      this.jobOpeningService.addJobOpening(jobOpeningData).subscribe(
        (response) => {
          console.log('Job opening added successfully:', response);
          this.route.navigate(['/recruiter-home']);
        },
        (error) => {
          console.error('Error adding job opening:', error);
          // Handle error as needed
        }
      );
    }
  }
}
