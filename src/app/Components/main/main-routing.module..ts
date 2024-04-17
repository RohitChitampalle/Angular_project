import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { MainComponent } from './main.component';
import { AuthGuard } from '../../auth.guard';
import { DashBoardComponent } from '../dash-board/dash-board.component';
import { AddCustomersFormComponent } from '../add-customers-form/add-customers-form.component';
import { MoviesListComponent } from '../movies-list/movies-list.component';
import { DetailsComponent } from '../details/details.component';
import { AnalyticsComponent } from '../analytics/analytics.component';
import { LoginComponent } from '../login/login.component';
import { SubmainComponent } from '../submain/submain.component';



const routes: Routes = [
    {
        path: '',
        component: SubmainComponent, // Use the layout component as the parent route
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


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule { }
