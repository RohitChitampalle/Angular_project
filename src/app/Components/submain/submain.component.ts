import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submain',
  templateUrl: './submain.component.html',
  styleUrl: './submain.component.css'
})
export class SubmainComponent implements OnInit {
  role: string = ''; // Assuming you have a variable to store the user's role

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Get user's role from localStorage
    this.role = localStorage.getItem('role') || '';
  }


  logout() {
    // Clear localStorage
    localStorage.clear();
    // Navigate to login page
    this.router.navigate(['/login']);
  }
}