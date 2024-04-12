import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  userId: any ;
  user: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id');
    this.getUserDetails();
  }

  goBack(){
    window.location.assign("/moviesLists")
  }

  getUserDetails(): void {
    this.http.get<any>('https://api.github.com/users/' + this.userId).subscribe(
      (data) => {
        this.user = data;
        console.log("User specific data => ",this.user)
      },
      (error) => {
        console.error('Error fetching user details:', error);
      }
    );
  }

}
