import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AdminGuard implements CanActivate {

    constructor(private _authService: AuthService,
                private _router: Router) { } 
    canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this._authService.loggedIn()) {
        return true
      } else {
        this._router.navigate(['/'])
        return false
      }
    }
}