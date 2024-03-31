// candidate-form.component.ts
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidateService } from '../../services/candidate.service'; // Adjust the path

@Component({
  selector: 'app-candidate-form',
  templateUrl: './candidate-form.component.html',
  styleUrls: ['./candidate-form.component.css'],
})
export class CandidateFormComponent implements OnInit {
  candidateForm!: FormGroup;
  jobId: number = 0;

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private candidateService: CandidateService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.jobId = Number(params.get('id'));

    });
    this.initForm();
  }

  private initForm() {
    this.candidateForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required]],
      company: ['', [Validators.required]],
      designation: ['', [Validators.required]],
      // resume: ['', [Validators.required]],
    });
  }

  submitForm() {
    if (1) {
      const candidateData = this.candidateForm.value;
      candidateData.resourceRequirementID = this.jobId;
      console.log('candidate form submit says: ', candidateData);
      this.candidateService.addCandidate(candidateData).subscribe(
        (response) => {
          console.log('Candidate added successfully:', response);
          this.route.navigate(['/view-candidate', this.jobId]);
        },
        (error) => {
          console.error('Error adding candidate:', error);
          // Handle error as needed
        }
      );
    }
  }
}
