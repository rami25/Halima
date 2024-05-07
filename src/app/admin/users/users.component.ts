import { Component, OnInit } from '@angular/core';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/User';
import { AuthService } from 'src/app/services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  form!: FormGroup;
  role!:string;
  name!:string;
  email!:string;

  constructor(private authService:AuthService) { }

  // users$!:Observable<User[]>;
  users!: User[];

  ngOnInit(): void {
    this.getUsers();
    this.form = new FormGroup({
      name: new FormControl(null),//, [Validators.required]),
      email: new FormControl(null)//, [Validators.required, Validators.email]),
    });
  }
  p: number = 1;
  collection: any[] = [1];
  close: boolean = false;
  close1: boolean = false;
  faAdd = faAdd;
  id!:any;

  showAdd(id:any) {
    this.id=id;
    this.close = !this.close;
  }
  showAdd1(id:any) {
    this.id=id;
    this.close1 = !this.close1;
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
      alert(value.msg)
    })

    this.close=!this.close;
    window.location.reload();
  }

  selectRole(event:any){

    this.role=event.target.value;

  }
  updateUser(){
    this.name=this.form.value.name;
    this.email=this.form.value.email;
    this.close1=!this.close1;
    this.authService.updateUser({nom:this.name,email:this.email}, this.id)
    .subscribe(
      (res) => {
        console.log(res)
        alert(res.msg)
        window.location.reload()
      },
      (err) => {
        alert(err.message);
      });

    this.form.reset();
  }

}
