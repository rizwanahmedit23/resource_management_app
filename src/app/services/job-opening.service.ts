// job-opening.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JobOpeningService {
  // http://localhost:8080/api/resourceReq
  // https://recruitment-management-backend-production.up.railway.app/api/resourceReq
  private apiUrl = 'https://recruitment-management-backend-production.up.railway.app/api/resourceReq';

  constructor(private http: HttpClient) {}

  addJobOpening(jobOpeningData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/addResourceRequirement`, jobOpeningData);
  }

  getJobOpenings(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/getAllResourceRequirements`);
  }

  getJobOpeningById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/getResourceRequirementsByID/${id}`);
  }
}
