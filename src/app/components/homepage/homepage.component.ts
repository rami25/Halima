import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  login: boolean = false;
  @ViewChild('form') form!: NgForm;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void { }

  showLogin(condition: string) {
    if (condition === 'open') {
      this.login = true;
    } else {
      this.login = false;
    }
  }

  onSubmit() {
    console.log(this.form.value);
    this.authService.signIn(this.form.value)
    .subscribe(
      (res) => {
        console.log(res);
        localStorage.setItem('token', res.jwt)
        alert('welcome '+ res.existing.login);
        this.router.navigate(['/admin']);
      },
      (err) => {
        alert(err.message);
      });
  }
}