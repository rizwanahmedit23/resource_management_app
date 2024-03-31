// discussion-details.model.ts

export interface DiscussionDetails {
    discussionId: number;
    candidateId: number; // Reference to the candidate details
    discussionDate: Date;
    discussionNotes: string;
  }
  