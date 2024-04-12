import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesListComponent } from './Components/movies-list/movies-list.component';
import { AddCustomersFormComponent } from './Components/add-customers-form/add-customers-form.component';
import { DashBoardComponent } from './Components/dash-board/dash-board.component';
import { DetailsComponent } from './Components/details/details.component';
import { AnalyticsComponent } from './Components/analytics/analytics.component';

const routes: Routes = [

  {path:'dashboard',component:DashBoardComponent},
  {path:"",redirectTo:"/dashboard",pathMatch:'full'},
  {path:"moviesLists",component:MoviesListComponent},
  {path:"add_customer",component:AddCustomersFormComponent},
  { path: "details", component: DetailsComponent },
  { path: "analytics", component: AnalyticsComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
