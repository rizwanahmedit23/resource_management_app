import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../../services/candidate.service'; // Adjust the path
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-candidate',
  templateUrl: './view-candidate.component.html',
  styleUrls: ['./view-candidate.component.css']
})
export class ViewCandidateComponent implements OnInit {
  candidates: any[] = [];
  jobId: number = 0;
  // candidates2=
  // [
  //   { id: 1, name: 'John Doe', email: 'john@gmail.com',mobile:123456789,experience:'5 year', company: 'Google',designation:'Java Developer',resume:'file' },
  //   { id: 2, name: 'Jane Smith', email: 'jane@gmail.com', mobile:123456789,experience:'4 year', company: 'Amazone',designation:'Full Stack ',resume:'file' },
  //   { id: 1, name: 'John Doe', email: 'john@gmail.com',mobile:123456789,experience:'5 year', company: 'Google',designation:'Java Developer',resume:'file' },
  //   { id: 2, name: 'Jane Smith', email: 'jane@gmail.com', mobile:123456789,experience:'4 year', company: 'Amazone',designation:'Full Stack ',resume:'file' },
  //   { id: 1, name: 'John Doe', email: 'john@gmail.com',mobile:123456789,experience:'5 year', company: 'Google',designation:'Java Developer',resume:'file' },
  //   { id: 2, name: 'Jane Smith', email: 'jane@gmail.com', mobile:123456789,experience:'4 year', company: 'Amazone',designation:'Full Stack ',resume:'file' },
  //   { id: 1, name: 'John Doe', email: 'john@gmail.com',mobile:123456789,experience:'5 year', company: 'Google',designation:'Java Developer',resume:'file' },
  //   { id: 2, name: 'Jane Smith', email: 'jane@gmail.com', mobile:123456789,experience:'4 year', company: 'Amazone',designation:'Full Stack ',resume:'file' },
  // ]

  constructor(
    private candidateService: CandidateService,
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.jobId = Number(params.get('id'));
    });
    this.getCandidates();
  }

  getCandidates(): void {
    this.candidateService.getAllCandidatesByJobId(this.jobId).subscribe(
      (data: any[]) => {
        this.candidates = data;
        console.log(this.candidates);
      },
      (error) => {
        console.error('Error fetching candidates:', error);
        // Handle error as needed
      }
    );
  }
}
