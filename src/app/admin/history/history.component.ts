import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Certif } from 'src/app/interfaces/Certif';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  certifs! : Certif[]
  constructor(private authService:AuthService) {}

  ngOnInit(): void {
    this.getCertifs();
  }
  p: number = 1;

  getCertifs(){
    this.authService.getdCertifs()
      .subscribe(certificates => {
        this.certifs = certificates;
    });    
  }

}