import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { level1InterviewFeedbackService } from '../../services/level1-interview-feedback.service'; // Import your CandidateService here
import { level2InterviewFeedbackService } from '../../services/level2-interview-feedback.service'; // Import your CandidateService here
import { hrDiscussionFeedbackService } from '../../services/hr-discussion-feedback.service'; // Import your CandidateService here


@Component({
  selector: 'app-interview-feedback',
  templateUrl: './interview-feedback.component.html',
  styleUrls: ['./interview-feedback.component.css']
})
export class InterviewFeedbackComponent implements OnInit {
  candidateId: number = 0;
  level1Feedback: string = "";
  level2Feedback: string = "";
  hrDiscussion: string = "";

  // New properties to store the new feedback and editing flags
  newLevel1Feedback: string = '';
  newLevel2Feedback: string = '';
  newHRDiscussion: string = '';

  editingLevel1Feedback: boolean = false;
  editingLevel2Feedback: boolean = false;
  editingHRDiscussion: boolean = false;


  constructor(
    private route: ActivatedRoute,
    private level1Service: level1InterviewFeedbackService,
    private level2Service: level2InterviewFeedbackService,
    private hrDiscussionService: hrDiscussionFeedbackService
  ) { }

  ngOnInit(){
    this.route.params.subscribe(params => {
      this.candidateId = params['id'];
      console.log(this.candidateId);
      this.fetchInterviewDetails();
    });
  }

  fetchInterviewDetails() {
    this.level1Service.getLevel1InterviewFeedback(this.candidateId).subscribe(
      (data: any) => {
        this.level1Feedback = data;
        console.log(data);
      },
      (error: any) => {
        console.log(error);
      }
    );

    this.level2Service.getLevel2InterviewFeedback(this.candidateId).subscribe(data => {
      this.level2Feedback = data;
      console.log(data);
    },
    error => {
      console.log(error);
    }
    );

    this.hrDiscussionService.getHRDiscussion(this.candidateId).subscribe(data => {
      this.hrDiscussion = data;
      console.log(data);
    },
    error => {
      console.log(error);
    }
    );
  }

  // Methods to handle submission of new feedback
  submitLevel1Feedback() {
    // If already editing, update existing feedback instead of adding new
    if (this.level1Feedback != "") {
      // Call service to update existing feedback
      this.level1Service.addLevel1InterviewFeedback(this.newLevel1Feedback, this.candidateId).subscribe(
        (data: any) => {
          this.level1Feedback = data;
          this.editingLevel1Feedback = false; // Reset editing flag
        },
        (error: any) => {
          console.log(error);
        }
      );
    } else {
      // Otherwise, add new feedback
      this.level1Service.addLevel1InterviewFeedback(this.newLevel1Feedback, this.candidateId).subscribe(
        (data: any) => {
          this.level1Feedback = data;
        },
        (error: any) => {
          console.log(error);
        }
      );
    }
  }

  // Similar methods for level 2 and HR discussion feedback

  submitLevel2Feedback() {
    // If already editing, update existing feedback instead of adding new
    if (this.level2Feedback != "") {
      // Call service to update existing feedback
      this.level2Service.addLevel2InterviewFeedback(this.newLevel2Feedback, this.candidateId).subscribe(
        (data: any) => {
          this.level2Feedback = data;
          this.editingLevel2Feedback = false; // Reset editing flag
        },
        (error: any) => {
          console.log(error);
        }
      );
    } else {
      // Otherwise, add new feedback
      this.level2Service.addLevel2InterviewFeedback(this.newLevel2Feedback, this.candidateId).subscribe(
        (data: any) => {
          this.level2Feedback = data;
        },
        (error: any) => {
          console.log(error);
        }
      );
    }
  }

  submitHRDiscussion() {
    // If already editing, update existing feedback instead of adding new
    if (this.hrDiscussion != "") {
      // Call service to update existing feedback
      this.hrDiscussionService.addHRDiscussion(this.newHRDiscussion, this.candidateId).subscribe(
        (data: any) => {
          this.hrDiscussion = data;
          this.editingHRDiscussion = false; // Reset editing flag
        },
        (error: any) => {
          console.log(error);
        }
      );
    } else {
      // Otherwise, add new feedback
      this.hrDiscussionService.addHRDiscussion(this.newHRDiscussion, this.candidateId).subscribe(
        (data: any) => {
          this.hrDiscussion = data;
        },
        (error: any) => {
          console.log(error);
        }
      );
    }
  }

  editLevel1Feedback() {
    this.newLevel1Feedback = this.level1Feedback; // Initialize input field with existing feedback
    this.editingLevel1Feedback = true; // Set editing flag
  }

  // Similar edit methods for level 2 and HR discussion feedback
  
  editLevel2Feedback() {
    this.newLevel2Feedback = this.level2Feedback; // Initialize input field with existing feedback
    this.editingLevel2Feedback = true; // Set editing flag
  }

  editHRDiscussion() {
    this.newHRDiscussion = this.hrDiscussion; // Initialize input field with existing feedback
    this.editingHRDiscussion= true; // Set editing flag
  }


}

