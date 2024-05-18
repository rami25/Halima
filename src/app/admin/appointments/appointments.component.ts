import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

  reservs! : any[]
  p: number = 1;
  constructor(private authService : AuthService) { }

  ngOnInit(): void {
    this.getReservs()
  }
  getReservs(){
    this.authService.getReservs()
    .subscribe(reservations => {
      console.log(reservations)
      this.reservs = reservations
    }) 
  }
}