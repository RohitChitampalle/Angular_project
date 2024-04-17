import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from '../../Components/admin-dashboard/admin-dashboard.component';


@NgModule({
  declarations: [AdminDashboardComponent],
  imports: [
    CommonModule
  ],
  exports:[
    AdminDashboardComponent
  ]
})
export class AdminDashboardModule { }
