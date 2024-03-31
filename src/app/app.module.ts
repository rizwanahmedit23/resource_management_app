import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ResourceRequirementsComponent } from './resource-requirements/resource-requirements.component';

import { HRDiscussionComponent } from './hr-discussion/hr-discussion.component';
import { Level1FeedbackComponent } from './level1-feedback/level1-feedback.component';
import { Level2FeedbackComponent } from './level2-feedback/level2-feedback.component';
import { HomeComponent } from './home/home.component';
import { DiscussionDetailsComponent } from './discussion-details/discussion-details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RecruiterHomeComponent } from './recruiter-home/recruiter-home.component';
import { AddJobOpeningComponent } from './recruiter-home/add-job-opening/add-job-opening.component';
import { CandidateFormComponent } from './recruiter-home/candidate-form/candidate-form.component';
import { JobOpeningDetailComponent } from './recruiter-home/job-opening-detail/job-opening-detail.component';
import { ViewCandidateComponent } from './recruiter-home/view-candidate/view-candidate.component';
import { EditJobOpeningComponent } from './recruiter-home/edit-job-opening/edit-job-opening.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ResourceRequirementsComponent,
    HRDiscussionComponent,
    Level1FeedbackComponent,
    Level2FeedbackComponent,
    HomeComponent,
    DiscussionDetailsComponent,
    NavbarComponent,
    SidebarComponent,
    RecruiterHomeComponent,
    AddJobOpeningComponent,
    CandidateFormComponent,
    JobOpeningDetailComponent,
    ViewCandidateComponent,
    EditJobOpeningComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }