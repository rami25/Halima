import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  form!: FormGroup;
  role!:string;

  name!:string;
  email!:string;
  password!:string;
  cpassword!:string;
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [ Validators.required, ]),
      cpassword: new FormControl(null, [ Validators.required, ]),
    });
  }

  selectRole(event:any){

    this.role=event.target.value;

  }

  onSubmit() {
    this.name=this.form.value.name;
    this.email=this.form.value.email;
    this.password=this.form.value.password;
    this.cpassword=this.form.value.cpassword;
    if(this.password != this.cpassword){
      alert("password incorrect!!!")
      return
    }

    this.authService.registerUser({nom:this.name,email:this.email,password:this.password})
    .subscribe(
      (res) => {
        console.log(res);
        alert(res.msg)
      },
      (err) => {
        alert(err.message);
      });

    this.form.reset();

  }

}
