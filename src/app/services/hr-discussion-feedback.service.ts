import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class hrDiscussionFeedbackService {
  // http://localhost:8080/api/hrDiscussion
  //https://recruitment-management-backend-production.up.railway.app/api/hrDiscussion
  private apiUrl = 'http://localhost:8080/api/hrDiscussion'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getHRDiscussion(candidateId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/getHrDiscussionByCandidateID/${candidateId}`);
  }

  addHRDiscussion(feedback: any, candidateId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/addHrDiscussionByCandidateID/${candidateId}`, feedback);
  }
}