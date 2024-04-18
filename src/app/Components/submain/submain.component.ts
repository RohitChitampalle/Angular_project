import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatDrawer } from '@angular/material/sidenav'; // Import MatDrawer


@Component({
  selector: 'app-submain',
  templateUrl: './submain.component.html',
  styleUrls: ['./submain.component.css']
})
export class SubmainComponent implements OnInit {
  @ViewChild('drawer') drawer: MatDrawer | undefined; 
  role: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.role = localStorage.getItem('role') || '';
  }

  toggleDrawer() {
    this.drawer?.toggle(); 
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
