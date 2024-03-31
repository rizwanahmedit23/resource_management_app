import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobOpeningService } from '../services/job-opening.service'; // Import your job opening service

@Component({
  selector: 'app-recruiter-home',
  templateUrl: './recruiter-home.component.html',
  styleUrls: ['./recruiter-home.component.css']
})
export class RecruiterHomeComponent implements OnInit {
  jobOpenings: any[] = [];
  // jobOpenings = [
  //   {
  //     title: 'Java Developer 1',
  //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel justo eu orci fermentum ullamcorper.',
  //     requirements: ['Experience in XYZ', 'Strong communication skills'],
  //     responsibilities: ['Manage XYZ tasks', 'Collaborate with ABC team'],
  //     status: ['Active']
  //   },
  //   {
  //     title: 'Full Stack Developer 2',
  //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel justo eu orci fermentum ullamcorper.',
  //     requirements: ['Experience in ABC', 'Problem-solving skills'],
  //     responsibilities: ['Develop XYZ solutions', 'Coordinate with DEF department'],
  //     status: ['Closed']
  //   },
  //   {
  //     title: 'React Developer 2',
  //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel justo eu orci fermentum ullamcorper.',
  //     requirements: ['Experience in ABC', 'Problem-solving skills'],
  //     responsibilities: ['Develop XYZ solutions', 'Coordinate with DEF department'],
  //     status: ['Active']
  //   },
  //   {
  //     title: 'Mern Stack Developer 2',
  //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel justo eu orci fermentum ullamcorper.',
  //     requirements: ['Experience in ABC', 'Problem-solving skills'],
  //     responsibilities: ['Develop XYZ solutions', 'Coordinate with DEF department'],
  //     status: ['Active']
  //   },
  //   {
  //     title: 'Mean Stack Developer 2',
  //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel justo eu orci fermentum ullamcorper.',
  //     requirements: ['Experience in ABC', 'Problem-solving skills'],
  //     responsibilities: ['Develop XYZ solutions', 'Coordinate with DEF department'],
  //     status: ['Closed']
  //   }
  // ];
  constructor(private router: Router, private jobOpeningService: JobOpeningService) { }

  ngOnInit(): void {
    this.fetchJobOpenings();
  }
  


  viewDetails(jobOpening: any) {
    this.router.navigate(['/job-detail', jobOpening.requirementId]); // Assuming jobOpening has an 'id' property
  }

  addOpening() {
  this.router.navigate(['/add-job-opening'])
  }

  viewCandidates(jobOpening : any): void {
    this.router.navigate(['/view-candidate', jobOpening.requirementId]);
  }

  addCandidates(jobOpening : any): void {
    this.router.navigate(['/candidate-form', jobOpening.requirementId]);
  }

  fetchJobOpenings(): void {
    this.jobOpeningService.getJobOpenings().subscribe(
      (data: any[]) => {
        this.jobOpenings = data;
      },
      (error) => {
        console.error('Error fetching job openings:', error);
        // Handle error as needed
      }
    );
  }

  // Rest of your component methods...
}

