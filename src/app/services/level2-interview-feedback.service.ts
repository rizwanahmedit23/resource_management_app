import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class level2InterviewFeedbackService {
  // http://localhost:8080/api/feedback2
  //https://recruitment-management-backend-production.up.railway.app/api/feedback2
  private apiUrl = 'https://recruitment-management-backend-production.up.railway.app/api/feedback2'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getLevel2InterviewFeedback(candidateId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/getInterviewFeedback2ByCandidateID/${candidateId}`);
  }

  addLevel2InterviewFeedback(feedback: any, candidateId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/addInterviewFeedback2ByCandidateID/${candidateId}`, feedback);
  }
  
}