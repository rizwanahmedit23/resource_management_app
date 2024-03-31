// level1-feedback.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Level1FeedbackService {
  private baseUrl = 'http://localhost:8080/api/feedback1'; // Replace with your actual backend API URL

  constructor(private http: HttpClient) {}

  addLevel1Feedback(feedback: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/addInterviewFeedback1`, feedback);
  }

  editLevel1Feedback(id: string, feedback: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/updateInterviewFeedback1`, feedback);
  }

  deleteLevel1Feedback(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteLevel1Feedback/${id}`);
  }

  getAllLevel1Feedback(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getInterviewFeedbacks1`);
  }
}
