import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  // role: string = ''; // Assuming you have a variable to store the user's role

  constructor(private router: Router) { }

  
}