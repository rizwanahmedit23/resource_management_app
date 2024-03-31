// hr-discussion.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HRDiscussionService {
  private baseUrl = 'http://localhost:8080/api/hrDiscussion'; // Replace with your actual backend API URL

  constructor(private http: HttpClient) {}

  addHRDiscussion(discussion: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/addHrDiscussion`, discussion);
  }

  editHRDiscussion(id: string, discussion: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/updateHrDiscussion`, discussion);
  }

  deleteHRDiscussion(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteHRDiscussion/${id}`);
  }

  getAllHRDiscussions(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getHrDiscussions`);
  }
}
