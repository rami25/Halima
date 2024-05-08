import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptorService } from '../services/interceptor.service';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SidenavComponent } from './sidenav/sidenav.component';

import { HomeComponent } from './home/home.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { UsersComponent } from './users/users.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddUserComponent } from './add-user/add-user.component';
import { ChartModule } from 'angular-highcharts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemandeComponent } from './demande/demande.component';


@NgModule({
  declarations: [
    AdminComponent,
    SidenavComponent,
    
    HomeComponent,
    DoctorsComponent,
    UsersComponent,
    AddUserComponent,
    DemandeComponent,
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FontAwesomeModule,
    NgxPaginationModule,
    ChartModule,
    ReactiveFormsModule,
    FormsModule
  
  ],
  providers : [ ]
})
export class AdminModule { }
