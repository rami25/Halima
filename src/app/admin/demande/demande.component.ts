import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Certif } from 'src/app/interfaces/Certif';

@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.css']
})
export class DemandeComponent implements OnInit {

  certifs! : Certif[]
  constructor(private authService:AuthService) {}

  ngOnInit(): void {
    this.getCertifs();
  }
  p: number = 1;
  collection: any[] = [1];
  close: boolean = false;
  close1: boolean = false;
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

  removeCertif(){
    return this.certifs.filter(certif => certif._id !== this.id);
  }
  deleteCertif(){
    this.authService.ansCertif({_id : this.id, ans : 'rejected'}).subscribe()
    this.close=!this.close;
    this.removeCertif();
    window.location.reload();
  }

  acceptCertif(){
    this.authService.ansCertif({_id : this.id, ans : 'accepted'}).subscribe()
    this.close1=!this.close1;
    this.removeCertif();
    window.location.reload();
  }
}