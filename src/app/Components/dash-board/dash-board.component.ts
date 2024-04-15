import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrl: './dash-board.component.css'
})
export class DashBoardComponent implements OnInit {
  role: string = ''; // Assuming you have a variable to store the user's role

  constructor() { }

  ngOnInit(): void {
    // Get user's role from localStorage
    this.role = localStorage.getItem('role') || '';
  }

}