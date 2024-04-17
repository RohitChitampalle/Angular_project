import { Component } from '@angular/core';
import { MoviesListComponent } from './Components/movies-list/movies-list.component';
import { DashBoardComponent } from './Components/dash-board/dash-board.component';
import { DetailsComponent } from './Components/details/details.component';
import { AnalyticsComponent } from './Components/analytics/analytics.component';
import { LoginComponent } from './Components/login/login.component';
import { MainComponent } from './Components/main/main.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MovieApp';
  // moviesListComponent = MoviesListComponent;
  // dashBoardComponent = DashBoardComponent;
  // detailsComponent = DetailsComponent;
  // analyticsComponent = AnalyticsComponent;
  // loginComponent = LoginComponent;
  mainComponent = MainComponent;
  
}
