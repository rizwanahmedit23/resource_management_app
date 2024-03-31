// discussion-details.component.ts

import { Component, OnInit } from '@angular/core';
import { DiscussionDetailsService } from './discussion-details.service';
import { DiscussionDetails } from './discussion-details.model';
import { Router } from '@angular/router';
import { UserRole } from '../enums/user-role.enum';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-discussion-details',
  templateUrl: './discussion-details.component.html',
  styleUrls: ['./discussion-details.component.css'],
})
export class DiscussionDetailsComponent implements OnInit {
  discussionDate: Date = new Date() ;
  discussionNotes: string ="";
  discussionDetails: any[] = [];
  userRoles = UserRole;

  constructor(private discussionDetailsService: DiscussionDetailsService,private router: Router, public authService: AuthService) {}
  ngOnInit(): void {
    this.loadCandidates();
  }
  loadCandidates() {
    this.discussionDetailsService.getAllDiscussions().subscribe({
      next: (data) => {
        this.discussionDetails = data;
      },
      error: (error) => {
        console.error('Error loading candidates', error);
      }
    });
  }
  addDiscussionDetails() {
    const newDiscussion: DiscussionDetails = {
      discussionId: 0, // Let the server generate the ID
      candidateId: 0, /* Provide the candidate ID here */ // Reference to the candidate details
      discussionDate: this.discussionDate,
      discussionNotes: this.discussionNotes,
    };

    this.discussionDetailsService.addDiscussionDetails(newDiscussion).subscribe({
      next: (addedDiscussion: DiscussionDetails) => {
        this.discussionDetails.push(addedDiscussion);
        // Optionally, clear the form fields after adding
        this.discussionDate = new Date();
        this.discussionNotes = '';
      },
      error: (error) => {
        console.error('Error adding discussion details:', error);
      }
    });
  }
  isHomePage(): boolean {
    return this.router.url === '/home';
  }
  // Implement methods for editing, deleting, and fetching discussion details
 
}
