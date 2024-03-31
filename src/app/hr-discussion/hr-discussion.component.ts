// hr-discussion.component.ts
import { Component, OnInit } from '@angular/core';
import { HRDiscussionService } from './hr-discussion.service';
import { AuthService } from '../login/auth.service';
import { UserRole } from '../enums/user-role.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hr-discussion',
  templateUrl: './hr-discussion.component.html',
  styleUrls: ['./hr-discussion.component.css']
})
export class HRDiscussionComponent implements OnInit {
  userRoles = UserRole;
  hrDiscussionId: number | null = null;
  communicationSkills: string = '';
  culturalFit: string = '';
  finalDecision: string = '';

  hrDiscussions: any[] = [];
  selectedDiscussionIndex: number | null = null;

  constructor(private hrDiscussionService: HRDiscussionService,
              public authService: AuthService,private router: Router) {}

  ngOnInit() {
    this.loadHRDiscussions();
  }

  loadHRDiscussions() {
    this.hrDiscussionService.getAllHRDiscussions().subscribe({
      next: (data) => {
        this.hrDiscussions = data;
        console.log("loaded HrDiscussions")
      },
      error: (error) => {
        console.error('Error loading HR Discussions', error);
      }
    });
  }

  addHRDiscussion() {
    const discussion = {
      hrDiscussionId: this.hrDiscussionId,
      communicationSkills: this.communicationSkills,
      culturalFit: this.culturalFit,
      finalDecision: this.finalDecision
      // Add other properties as needed
    };

    if (this.selectedDiscussionIndex !== null) {
      const selectedDiscussionId = this.hrDiscussions[this.selectedDiscussionIndex].hrDiscussionId;
      this.hrDiscussionService.editHRDiscussion(selectedDiscussionId, discussion).subscribe({
        next: () => {
          this.selectedDiscussionIndex = null;
          this.clearForm();
          this.loadHRDiscussions();
        },
        error: (error) => {
          console.error('Error editing HR Discussion', error);
        }
      });
    } else {
      this.hrDiscussionService.addHRDiscussion(discussion).subscribe({
        next: () => {
          this.clearForm();
          this.loadHRDiscussions();
        },
        error: (error) => {
          console.error('Error adding HR Discussion', error);
        }
      });
    }
  }

  editHRDiscussion(index: number) {
    this.selectedDiscussionIndex = index;
    const selectedDiscussion = this.hrDiscussions[index];
    this.hrDiscussionId = selectedDiscussion.hrDiscussionId;
    this.communicationSkills = selectedDiscussion.communicationSkills;
    this.culturalFit = selectedDiscussion.culturalFit;
    this.finalDecision = selectedDiscussion.finalDecision;
  }

  deleteHRDiscussion(index: number) {
    const selectedDiscussionId = this.hrDiscussions[index].hrDiscussionId;
    this.hrDiscussionService.deleteHRDiscussion(selectedDiscussionId).subscribe({
      next: () => {
        this.loadHRDiscussions();
      },
      error: (error) => {
        console.error('Error deleting HR Discussion', error);
      }
    });
  }

  clearForm() {
    this.hrDiscussionId = null;
    this.communicationSkills = '';
    this.culturalFit = '';
    this.finalDecision = '';
  } 
  isHomePage(): boolean {
    return this.router.url === '/home';
  }
}
