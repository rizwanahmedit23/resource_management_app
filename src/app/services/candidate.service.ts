// candidate.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CandidateService {
  addCandidateByResourceRequirementID(candidateData: any, jobId: string | null) {
    throw new Error('Method not implemented.');
  }
  //https://recruitment-management-backend-production.up.railway.app/api/candidates
  private apiUrl = 'http://localhost:8080/api/candidates'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  addCandidate(candidate: any, jobId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/addCandidate/${jobId}`, candidate);
  }
  

//   addCandidates(candidateData: any[], jobId : string): Observable<any> {
//     return this.http.post(`${this.apiUrl}/addCandidatesByResourceRequirementID/${jobID}`, candidateData);
//   }

getAllCandidatesByJobId(jobId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/getAllCandidatesByJobId/${jobId}`);
  }
}
