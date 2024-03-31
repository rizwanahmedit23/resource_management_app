// resource-requirements.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResourceRequirementsService {
  private baseUrl = 'http://localhost:8080/api/resourceReq'; 

  constructor(private http: HttpClient) {}

  addRequirement(requirement: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/addResourceRequirements`, requirement);
  }

  editRequirement(id: number, requirement: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/updateResourceRequirements`, requirement );
  }

  deleteRequirement(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteResourceRequirements/${id}`);
  }

  getAllRequirements(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getAllResourceRequirements`);
  }
}
