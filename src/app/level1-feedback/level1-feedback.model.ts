// level1-feedback.model.ts
export interface Level1Feedback {
  feedbackId: number | null;
  candidateId: number;
  interviewerName: string;
  feedback: string;
  rating: number;
  // Add other properties as needed
}
