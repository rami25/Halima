import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private admin: any;

  setAdmin(json: any): void {
    this.admin = json;
  }

  getAdmin(): any {
    return this.admin;
  }
}