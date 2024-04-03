import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ResourceRequirementsComponent } from './resource-requirements/resource-requirements.component';
import { HRDiscussionComponent } from './hr-discussion/hr-discussion.component';
import { Level1FeedbackComponent } from './level1-feedback/level1-feedback.component';
import { Level2FeedbackComponent } from './level2-feedback/level2-feedback.component';
import { HomeComponent } from './home/home.component';
import { DiscussionDetailsComponent } from './discussion-details/discussion-details.component';
import { AuthGuard } from './guards/auth.guard';
import { UserRole } from './enums/user-role.enum';
import { RecruiterHomeComponent } from './recruiter-home/recruiter-home.component';
import { AddJobOpeningComponent } from './recruiter-home/add-job-opening/add-job-opening.component';
import { CandidateFormComponent } from './recruiter-home/candidate-form/candidate-form.component';
import { JobOpeningDetailComponent } from './recruiter-home/job-opening-detail/job-opening-detail.component';
import { ViewCandidateComponent } from './recruiter-home/view-candidate/view-candidate.component';
import { EditJobOpeningComponent } from './recruiter-home/edit-job-opening/edit-job-opening.component';
import { InterviewFeedbackComponent } from './recruiter-home/interview-feedback/interview-feedback.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },

  { path: 'recruiter-home', component: RecruiterHomeComponent},
  { path: 'add-job-opening', component: AddJobOpeningComponent },
  { path: 'add-job-opening/:id', component: AddJobOpeningComponent },
  { path: 'edit-job-opening/:id', component: EditJobOpeningComponent},
  {path:'candidate-form/:id', component:CandidateFormComponent},
  {path:'job-detail/:id', component:JobOpeningDetailComponent},
  {path:'view-candidate/:id', component:ViewCandidateComponent},
  // {path:'interviews-feedback/:id', component:InterviewFeedbackComponent},

  { path: 'register', component: RegistrationComponent },
  { path: 'hr-discussion', component: HRDiscussionComponent, canActivate: [AuthGuard], data: { expectedRole: UserRole.HR_MANAGER } },
  { path: 'resource-requirements', component: ResourceRequirementsComponent },
  { path: 'discussion-details', component: DiscussionDetailsComponent },
  { path: 'level1-feedback', component: Level1FeedbackComponent, canActivate: [AuthGuard], data: { expectedRole: UserRole.LEVEL1_PANEL } },
  { path: 'level2-feedback', component: Level2FeedbackComponent, canActivate: [AuthGuard], data: { expectedRole: UserRole.LEVEL2_PANEL } },
  { path: '', redirectTo: '/recruiter-home', pathMatch: 'full' }, 
  { path: '**', redirectTo: '/recruiter-home' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
