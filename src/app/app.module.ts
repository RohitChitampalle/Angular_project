import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatToolbarModule} from  '@angular/material/toolbar'
import { MatListModule } from "@angular/material/list"
import {MatIconModule} from '@angular/material/icon'
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { MatSelectModule } from '@angular/material/select'
import { MatInputModule } from '@angular/material/input'
import { MatBadgeModule } from '@angular/material/badge';
import { MoviesListComponent } from './Components/movies-list/movies-list.component';
import { AddCustomersFormComponent } from './Components/add-customers-form/add-customers-form.component';
import { DashBoardComponent } from './Components/dash-board/dash-board.component'
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { DetailsComponent } from './Components/details/details.component';
import { AnalyticsComponent } from './Components/analytics/analytics.component';
import { MatGridListModule } from "@angular/material/grid-list"
import { FormsModule, ReactiveFormsModule } from '@angular/forms';










@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    AddCustomersFormComponent,
    DashBoardComponent,
    DetailsComponent,
    AnalyticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatInputModule,
    MatBadgeModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
