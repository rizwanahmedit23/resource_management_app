import { Component } from '@angular/core';
import { AuthService } from '../login/auth.service';
import { UserRole } from '../enums/user-role.enum';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public authService: AuthService){
    
  }
  userRoles = UserRole;
}
