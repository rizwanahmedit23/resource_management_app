import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JobOpeningService } from '../../services/job-opening.service'; // Adjust the path


@Component({
  selector: 'app-edit-job-opening',
  templateUrl: './edit-job-opening.component.html',
  styleUrls: ['./edit-job-opening.component.css']
})
export class EditJobOpeningComponent implements OnInit {
  jobOpeningForm!: FormGroup;
  jobId: number = 0;

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private jobOpeningService: JobOpeningService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.jobId = Number(params.get('id'));
    });

    this.initForm();

    this.loadData();
  }

  private initForm() {
    this.jobOpeningForm = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      requirements: ['', [Validators.required]],
      responsibilities: ['', [Validators.required]],
      status: 'active',
    });
  }

  loadData() {
    this.jobOpeningService.getJobOpeningById(this.jobId).subscribe(
      (data) => {
        console.log(data);
        this.fillForm(data);
        console.log('Job opening form loaded with job opening data');
      },
      (error) => {
        console.log('Error occured while loading form data')
      }
    )
  }

  fillForm(data: any){
    console.log('in fillform')
    this.jobOpeningForm.patchValue({
      title: data.title,  // Assuming the first element corresponds to the title
      description: data.description,  // Assuming the second element corresponds to the description
      requirements: data.requirements,  // Assuming the third element corresponds to the requirements
      responsibilities: data.responsibilities,  // Assuming the fourth element corresponds to the responsibilities
      status: data.status || 'active',  // Assuming the fifth element corresponds to the status, defaulting to 'active' if not present
    });
  }

  submitForm() {
    if (1) {
      const jobOpeningData = this.jobOpeningForm.value;
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
