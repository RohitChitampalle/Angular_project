// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) { }

  login() {
    // Implement authentication logic here
    // For simplicity, let's assume successful login for any username/password
    if (this.username === 'admin') {
      localStorage.setItem('role', 'admin');
      console.log("Admin")
      this.router.navigate(['/dashboard']);
    } else {
      console.log("user")
      localStorage.setItem('role', 'user');
      this.router.navigate(['/users']);

    }
  }
}
