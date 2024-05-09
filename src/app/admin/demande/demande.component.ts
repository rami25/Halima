import { Component, OnInit } from '@angular/core';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { AdminService } from 'src/app/services/admin.service';
import { Certif } from 'src/app/interfaces/Certif';

@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.css']
})
export class DemandeComponent implements OnInit {

  certifs! : Certif[]
  constructor(private authService:AuthService, private adminService : AdminService) { }

  ngOnInit(): void {
    this.getCertifs();
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

  getCertifs(){
    this.authService.getCertifs()
      .subscribe(certificates => {
        this.certifs = certificates;
    });    
  }

  deleteCertif(){

    this.close=!this.close;
    window.location.reload();
  }

  acceptCertif(){
    window.location.reload()
  }
}