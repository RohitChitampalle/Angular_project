import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css'
})
export class MoviesListComponent implements OnInit{
  movies: any[] | undefined;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    const apiUrl = 'https://api.github.com/users';
    this.http.get<any[]>(apiUrl).subscribe(
      (data) => {
        this.movies = data;
        console.log("Movie Data:", this.movies);
      },
      (error) => {
        console.error('Error fetching movies:', error);
      }
    );
  }

}
