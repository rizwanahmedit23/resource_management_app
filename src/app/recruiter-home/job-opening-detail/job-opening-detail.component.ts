import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { JobOpeningService } from '../../services/job-opening.service'; // Import your job opening service

@Component({
  selector: 'app-job-opening-detail',
  templateUrl: './job-opening-detail.component.html',
  styleUrls: ['./job-opening-detail.component.css']
})
export class JobOpeningDetailComponent implements OnInit {
  jobOpening: any;

  constructor(
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private jobOpeningService: JobOpeningService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const jobId = params['id']; // Assuming the route has a parameter for the job opening ID
      this.fetchJobOpening(jobId);
    });
  }

  fetchJobOpening(jobId: number): void {
    this.jobOpeningService.getJobOpeningById(jobId).subscribe(
      (data: any) => {
        this.jobOpening = data;
      },
      (error) => {
        console.error('Error fetching job opening:', error);
        // Handle error as needed
      }
    );
  }

  viewCandidates(): void {
    this.route.navigate(['/view-candidate', this.jobOpening.requirementId]);
  }

  addCandidates(): void {
    this.route.navigate(['/candidate-form', this.jobOpening.requirementId]);
  }

  edit(): void {
    this.route.navigate(['/edit-job-opening', this.jobOpening.requirementId]);
  }
}
