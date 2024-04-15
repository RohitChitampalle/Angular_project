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


const routes: Routes = [
  {
    path: '',
    component: MainComponent, // Use the layout component as the parent route
    canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: DashBoardComponent },
      { path: 'add_users', component: AddCustomersFormComponent },
      { path: 'users', component: MoviesListComponent },
      { path: "details/:id", component: DetailsComponent },
      { path: 'analytics', component: AnalyticsComponent },
      // Add other routes as needed
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  // Add other routes outside the layout component
];

// const routes: Routes = [

//   {path:'dashboard',component:DashBoardComponent},
//   {path:'login',component:LoginComponent},
//   {path:"",redirectTo:"/login",pathMatch:'full'},

//   {path:"users",component:MoviesListComponent,},
//   {path:"add_users",component:AddCustomersFormComponent},
//   { path: "details/:id", component: DetailsComponent },
//   { path: "analytics", component: AnalyticsComponent }


// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
