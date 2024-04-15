import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {
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