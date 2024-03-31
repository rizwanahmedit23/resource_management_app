// level1-feedback.component.ts
import { Component, OnInit } from '@angular/core';
import { Level1FeedbackService } from './level1-feedback.service';
import { AuthService } from '../login/auth.service';
import { UserRole } from '../enums/user-role.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-level1-feedback',
  templateUrl: './level1-feedback.component.html',
  styleUrls: ['./level1-feedback.component.css']
})
export class Level1FeedbackComponent implements OnInit {

  userRoles = UserRole;
  feedback1id: number | null = null;
  candidateId: number = 0;
  improvementAreas: string = '';
  positionApplied: string = '';
  strengths: string = '';

  level1Feedback: any[] = [];
  selectedFeedbackIndex: number | null = null;

  constructor(private level1FeedbackService: Level1FeedbackService, public authService: AuthService,private router: Router) {}

  ngOnInit() {
    this.loadLevel1Feedback();
  }

  loadLevel1Feedback() {
    this.level1FeedbackService.getAllLevel1Feedback().subscribe({
      next: (data) => {
        this.level1Feedback = data;
      },
      error: (error) => {
        console.error('Error loading Level 1 Feedback', error);
      }
    });
  }

  addLevel1Feedback() {
    const feedback = {
      feedback1id: this.feedback1id,
      candidateId: this.candidateId,
      improvementAreas: this.improvementAreas,
      positionApplied: this.positionApplied,
      strengths: this.strengths
      // Add other properties as needed
    };

    if (this.selectedFeedbackIndex !== null) {
      const selectedFeedbackId = this.level1Feedback[this.selectedFeedbackIndex].feedback1id;
      this.level1FeedbackService.editLevel1Feedback(selectedFeedbackId, feedback).subscribe({
        next: () => {
          this.selectedFeedbackIndex = null;
          this.clearForm();
          this.loadLevel1Feedback();
        },
        error: (error) => {
          console.error('Error editing Level 1 Feedback', error);
        }
      });
    } else {
      this.level1FeedbackService.addLevel1Feedback(feedback).subscribe({
        next: () => {
          this.clearForm();
          this.loadLevel1Feedback();
        },
        error: (error) => {
          console.error('Error adding Level 1 Feedback', error);
        }
      });
    }
  }

  editLevel1Feedback(index: number) {
    this.selectedFeedbackIndex = index;
    const selectedFeedback = this.level1Feedback[index];
    this.feedback1id = selectedFeedback.feedback1id;
    this.candidateId = selectedFeedback.candidateId;
    this.improvementAreas = selectedFeedback.improvementAreas;
    this.positionApplied = selectedFeedback.positionApplied;
    this.strengths = selectedFeedback.strengths;
  }

  deleteLevel1Feedback(index: number) {
    const selectedFeedbackId = this.level1Feedback[index].feedback1id;
    this.level1FeedbackService.deleteLevel1Feedback(selectedFeedbackId).subscribe({
      next:() => {
        this.loadLevel1Feedback();
      },
      error:(error) => {
        console.error('Error deleting Level 1 Feedback', error);
      }
    });
  }

  clearForm() {
    this.feedback1id = null;
    this.candidateId = 0; // Set an appropriate default value
    this.improvementAreas = '';
    this.positionApplied = '';
    this.strengths = '';
  }  
  isHomePage(): boolean {
    return this.router.url === '/home';
  }
}
