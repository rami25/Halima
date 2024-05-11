import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { AdminComponent } from './admin.component';
import { DemandeComponent } from './demande/demande.component';
import { HistoryComponent } from './history/history.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { CommentsComponent } from './comments/comments.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,

    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'demandes',
        component: DemandeComponent,
      },
      {
        path: 'history',
        component: HistoryComponent,
      },
      {
        path: 'users',
        component: UsersComponent,
      },

      {
        path: 'adduser',
        component: AddUserComponent,
      },
      {
        path : 'comments',
        component : CommentsComponent
      }

     
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
