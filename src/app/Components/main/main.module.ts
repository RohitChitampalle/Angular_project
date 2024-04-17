import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from '../movies-list/movies-list.component';
import { AddCustomersFormComponent } from '../add-customers-form/add-customers-form.component';
import { DashBoardComponent } from '../dash-board/dash-board.component';
import { DetailsComponent } from '../details/details.component';
import { AnalyticsComponent } from '../analytics/analytics.component';
import { LoginComponent } from '../login/login.component';
import { MainComponent } from './main.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatListModule } from "@angular/material/list"
import { MatIconModule } from '@angular/material/icon'
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { MatSelectModule } from '@angular/material/select'
import { MatInputModule } from '@angular/material/input'
import { MatBadgeModule } from '@angular/material/badge';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from "@angular/material/grid-list"
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../../app-routing.module';
import { MainRoutingModule } from './main-routing.module.';
import { SubmainComponent } from '../submain/submain.component';




@NgModule({
  declarations: [
    MoviesListComponent,
    AddCustomersFormComponent,
    DashBoardComponent,
    DetailsComponent,
    AnalyticsComponent,
    LoginComponent,
    MainComponent,
    SubmainComponent
  ],
  imports: [
    MainRoutingModule,
    CommonModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    // BrowserAnimationsModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatInputModule,
    MatBadgeModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    
    // AdminDashboardModule
  ],
  exports:[
    MoviesListComponent,
    // AddCustomersFormComponentponent,
    DashBoardComponent,
    DetailsComponent,
    AnalyticsComponent,
    LoginComponent,
    MainComponent,
    SubmainComponent
  ]
})
export class MainModule { }
