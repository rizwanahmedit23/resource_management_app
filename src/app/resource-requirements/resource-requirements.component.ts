// resource-requirements.component.ts
import { Component, OnInit } from '@angular/core';
import { ResourceRequirementsService } from './resource-requirements.service';
import { Router } from '@angular/router';
import { UserRole } from '../enums/user-role.enum';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-resource-requirements',
  templateUrl: './resource-requirements.component.html',
  styleUrls: ['./resource-requirements.component.css']
})
export class ResourceRequirementsComponent implements OnInit {
  requirementId: number | null = null;
  jobTitle: string = '';
  requiredSkills: string = '';
  minExperience: string = '';
  userRoles = UserRole;

  requirements: any[] = [];
  selectedRequirementIndex: number | null = null;

  constructor(private requirementsService: ResourceRequirementsService,private router: Router, public authService: AuthService) {}

  ngOnInit() {
    this.loadRequirements();
  }

  loadRequirements() {
    this.requirementsService.getAllRequirements().subscribe({
      next:(data: any[]) => {
        this.requirements = data;
      },
      error:(error:any) => {
        console.error('Error loading requirements', error);
      }
    });
  }

  addRequirement() {
    const requirement = {
      requirementId: this.requirementId,
      jobTitle: this.jobTitle,
      requiredSkills: this.requiredSkills,
      minExperience: this.minExperience
    };
  
    if (this.selectedRequirementIndex !== null) {
      const selectedRequirementId = this.requirements[this.selectedRequirementIndex].requirementId;
      this.requirementsService.editRequirement(selectedRequirementId, requirement).subscribe({
        next: () => {
          this.selectedRequirementIndex = null;
          this.clearForm();
          this.loadRequirements();
        },
        error: (error) => {
          console.error('Error editing requirement', error);
        }
      });
    } else {
      this.requirementsService.addRequirement(requirement).subscribe({
        next: () => {
          this.clearForm();
          this.loadRequirements();
        },
        error: (error) => {
          console.error('Error adding requirement', error);
        }
      });
    }
  }
  

  editRequirement(index: number) {
    this.selectedRequirementIndex = index;
    const selectedRequirement = this.requirements[index];
    this.requirementId = selectedRequirement.requirementId;
    this.jobTitle = selectedRequirement.jobTitle;
    this.requiredSkills = selectedRequirement.requiredSkills;
    this.minExperience = selectedRequirement.minExperience;
  }

  deleteRequirement(index: number) {
    const selectedRequirementId = this.requirements[index].requirementId;
    this.requirementsService.deleteRequirement(selectedRequirementId).subscribe({
      next: () => {
        this.loadRequirements();
      },
      error: (error:any) => {
        console.error('Error deleting requirement', error);
      }
    });
  }

  clearForm() {
    this.requirementId = null;
    this.jobTitle = '';
    this.requiredSkills = '';
    this.minExperience = '';
  }  
  isHomePage(): boolean {
    return this.router.url === '/home';
  }
}
