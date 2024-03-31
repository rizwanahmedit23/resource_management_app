// registration.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registerData = { username: '', password: '', confirmPassword: '' };

  register() {
    // Implement registration logic here
  }
}
