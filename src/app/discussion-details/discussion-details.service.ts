// discussion-details.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DiscussionDetails } from './discussion-details.model';

@Injectable({
  providedIn: 'root',
})
export class DiscussionDetailsService {
  
  private apiUrl = 'http://localhost:8080/api/discussiondetails'; // Adjust the URL

  constructor(private http: HttpClient) {}

  addDiscussionDetails(discussionDetails: DiscussionDetails): Observable<DiscussionDetails> {
    return this.http.post<DiscussionDetails>(`${this.apiUrl}/addDiscussionDetails`, discussionDetails);
  }

  // editDiscussionDetails(discussionDetails: DiscussionDetails): Observable<DiscussionDetails> {
  //   return this.http.put<DiscussionDetails>(`${this.apiUrl}/editDiscussionDetails/${discussionDetails.discussionId}`, discussionDetails);
  // }

  // deleteDiscussionDetails(discussionId: number): Observable<void> {
  //   return this.http.delete<void>(`${this.apiUrl}/deleteDiscussionDetails/${discussionId}`);
  // }

  getDiscussionDetailsByCandidate(candidateId: number): Observable<DiscussionDetails[]> {
    return this.http.get<DiscussionDetails[]>(`${this.apiUrl}/getDiscussionDetailsByCandidate/${candidateId}`);
  }

  getAllDiscussions() : Observable<any>{
    return this.http.get(`${this.apiUrl}/getDiscussionsDetails`);
  }

}
