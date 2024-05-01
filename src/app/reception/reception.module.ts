import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceptionRoutingModule } from './reception-routing.module';
import { ReceptionComponent } from './reception.component';
import { TopbarComponent } from './topbar/topbar.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { SearchPipe } from '../pipes/search.pipe';
import { SharedModule } from '../shared.module';


@NgModule({
  declarations: [
    ReceptionComponent,
    TopbarComponent,
    // SharedModule
    // SearchPipe
  ],
  imports: [
    CommonModule,
    ReceptionRoutingModule,
    NgxPaginationModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ReceptionModule { }
