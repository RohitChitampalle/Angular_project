import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesListComponent } from './Components/movies-list/movies-list.component';
import { AddCustomersFormComponent } from './Components/add-customers-form/add-customers-form.component';
import { DashBoardComponent } from './Components/dash-board/dash-board.component';
import { DetailsComponent } from './Components/details/details.component';
import { AnalyticsComponent } from './Components/analytics/analytics.component';
import { AuthGuard } from './auth.guard'; // Import the guard
import { LoginComponent } from './Components/login/login.component';
import { MainComponent } from './Components/main/main.component';
import { MainRoutingModule } from './Components/main/main-routing.module';


const routes: Routes = []

@NgModule({
  imports: [RouterModule.forRoot(routes),MainRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
