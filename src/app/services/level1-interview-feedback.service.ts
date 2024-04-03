import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class level1InterviewFeedbackService {
  // http://localhost:8080/api/feedback1
  //https://recruitment-management-backend-production.up.railway.app/api/feedback1
  private apiUrl = 'https://recruitment-management-backend-production.up.railway.app/api/feedback1'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getLevel1InterviewFeedback(candidateId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/getInterviewFeedback1ByCandidateID/${candidateId}`);
  }

  addLevel1InterviewFeedback(feedback: any, candidateId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/addInterviewFeedback1ByCandidateID/${candidateId}`, feedback);
  }

}