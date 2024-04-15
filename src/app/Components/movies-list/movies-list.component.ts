import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'] 
})
export class MoviesListComponent implements OnInit {
  movies: any[] | undefined;
  loading: boolean = false; // Add loading indicator variable

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.loading = true; // Set loading to true before API call
    const apiUrl = 'https://api.github.com/users';
    this.http.get<any[]>(apiUrl).subscribe(
      (data) => {
        this.movies = data;
        console.log("Movie Data:", this.movies);
        setTimeout(() => { this.loading = false; },1000)// Set loading to false after API call
      },
      (error) => {
        console.error('Error fetching movies:', error);
        this.loading = false; // Ensure loading is set to false even if there's an error
      }
    );
  }
}
