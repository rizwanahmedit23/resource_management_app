// level2-feedback.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Level2FeedbackService {
  private baseUrl = 'http://localhost:8080/api/feedback2'; // Replace with your actual backend API URL

  constructor(private http: HttpClient) {}

  addLevel2Feedback(feedback: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/addInterviewFeedback2`, feedback);
  }

  editLevel2Feedback(id: string, feedback: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/updateInterviewFeedback2`, feedback);
  }

  deleteLevel2Feedback(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteLevel2Feedback/${id}`);
  }

  getAllLevel2Feedback(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getInterviewFeedbacks2`);
  }
}
