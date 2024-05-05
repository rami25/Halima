import { Component, OnInit } from '@angular/core';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private authService:AuthService) { }

  // users$!:Observable<User[]>;
  users!: User[];

  ngOnInit(): void {
    this.getUsers();
  }
  p: number = 1;
  collection: any[] = [1];
  close: boolean = false;
  faAdd = faAdd;
  id!:any;

  showAdd(id:any) {
    this.id=id;
    console.log('hellooooo')
    this.close = !this.close;
  }

  getUsers(){
    // this.users$ = this.authService.getUsers();
    // console.log(this.users$);
    this.authService.getUsers()
    .subscribe(
      (res) => {
        console.log(res);
        this.users = res.users;
        console.log("longeur" + this.users.length);
        console.log(this.users);
      },
      (err) => {
        alert(err.msg);
      });
  }

  deleteUser(){

    this.authService.deleteUser(this.id).subscribe((value) =>{

      console.log(value)
    })

    this.close=!this.close;
    window.location.reload();
  }

}
