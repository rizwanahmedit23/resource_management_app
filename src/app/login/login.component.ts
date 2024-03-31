// login.component.ts
import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  
  login() {
    const user = {
      username: this.username,
      password: this.password
    };


    this.authService.login(user).subscribe({
      next: (response) => {
        this.authService.setUser(response);
        if (this.authService.hasRole('HR Manager')) {
          this.router.navigate(['/hr-discussion']);
        } else if (this.authService.hasRole('Level 1 Interview Panel')) {
          this.router.navigate(['/level1-feedback']);
          
        } else if (this.authService.hasRole('Level 2 Interview Panel')) {
          this.router.navigate(['/level2-feedback']);
        }  else if (this.authService.hasRole('Recruiter')) {
          this.router.navigate(['/candidate-details']);
        }  
        // Handle successful login (e.g., store token, redirect to home, etc.)
        if(response)
          console.log('Login successful', response);
      },
      error: (error) => {
        // Handle login error (e.g., display error message)
        console.error('Login failed', error);
      }
    });
  } 

}
