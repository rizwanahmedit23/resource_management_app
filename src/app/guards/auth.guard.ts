import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../login/auth.service';
import { UserRole } from '../enums/user-role.enum';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const expectedRole = route.data['expectedRole'] as UserRole;
    const currentUser:any = this.authService.getCurrentUser();
    console.log(currentUser);
    console.log("user role check", currentUser.role === expectedRole)
    if (currentUser && currentUser.role === expectedRole) {
      
      return true;
    }

    // Redirect to login or unauthorized page
    this.router.navigate(['/login']); // You can change this to the desired path

    return false;
  }
}