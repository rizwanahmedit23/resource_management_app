
// app.component.ts
import { Component, OnInit } from '@angular/core';
import { RoleService } from './role.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  userRole: string="";

  constructor(private roleService: RoleService) {}

  ngOnInit(): void {
    this.roleService.getUserRole().subscribe((role) => {
      this.userRole = role;
    });
  }
}
