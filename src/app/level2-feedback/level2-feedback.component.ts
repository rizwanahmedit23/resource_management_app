// level2-feedback.component.ts
import { Component, OnInit } from '@angular/core';
import { Level2FeedbackService } from './level2-feedback.service';
import { AuthService } from '../login/auth.service';
import { UserRole } from '../enums/user-role.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-level2-feedback',
  templateUrl: './level2-feedback.component.html',
  styleUrls: ['./level2-feedback.component.css']
})
export class Level2FeedbackComponent implements OnInit {
  userRoles = UserRole;
  feedback2id: number | null = null;
  projectExperience: string = '';
  advTechSkills: string = '';
  recommendation: string = '';

  level2Feedback: any[] = [];
  selectedFeedbackIndex: number | null = null;

  constructor(private level2FeedbackService: Level2FeedbackService, public authService: AuthService,private router: Router) {}

  ngOnInit() {
    this.loadLevel2Feedback();
  }

  loadLevel2Feedback() {
    this.level2FeedbackService.getAllLevel2Feedback().subscribe({
      next: (data) => {
        this.level2Feedback = data;
      },
      error: (error) => {
        console.error('Error loading Level 2 Feedback', error);
      }
    });
  }

  addLevel2Feedback() {
    const feedback = {
      feedback2id: this.feedback2id,
      projectExperience: this.projectExperience,
      advTechSkills: this.advTechSkills,
      recommendation: this.recommendation
      // Add other properties as needed
    };

    if (this.selectedFeedbackIndex !== null) {
      const selectedFeedbackId = this.level2Feedback[this.selectedFeedbackIndex].feedback2id;
      this.level2FeedbackService.editLevel2Feedback(selectedFeedbackId, feedback).subscribe({
        next: () => {
          this.selectedFeedbackIndex = null;
          this.clearForm();
          this.loadLevel2Feedback();
        },
        error: (error) => {
          console.error('Error editing Level 2 Feedback', error);
        }
      });
    } else {
      this.level2FeedbackService.addLevel2Feedback(feedback).subscribe({
        next: () => {
          this.clearForm();
          this.loadLevel2Feedback();
        },
        error: (error) => {
          console.error('Error adding Level 2 Feedback', error);
        }
      });
      
        
    }
  }

  editLevel2Feedback(index: number) {
    this.selectedFeedbackIndex = index;
    const selectedFeedback = this.level2Feedback[index];
    this.feedback2id = selectedFeedback.feedback2id;
    this.projectExperience = selectedFeedback.projectExperience;
    this.advTechSkills = selectedFeedback.advTechSkills;
    this.recommendation = selectedFeedback.recommendation;
  }

  deleteLevel2Feedback(index: number) {
    const selectedFeedbackId = this.level2Feedback[index].feedback2id;
    this.level2FeedbackService.deleteLevel2Feedback(selectedFeedbackId).subscribe({
      next: () => {
        this.loadLevel2Feedback();
      },
      error: (error) => {
        console.error('Error deleting Level 2 Feedback', error);
      }
    });
  }

  clearForm() {
    this.feedback2id = null;
    this.projectExperience = '';
    this.advTechSkills = '';
    this.recommendation = '';
  }  
  isHomePage(): boolean {
    return this.router.url === '/home';
  }
}
