import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginUser, RegisterUser, User, uUser} from '../interfaces/User';
import { ansCertif } from '../interfaces/Certif';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiServerUrl = environment.apiBaseUrl

  constructor(private http:HttpClient) { }
  getReservs(): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/admin/reservs`);
  }  
  getComments(): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/admin/comments`);
  }  
  getCertifs() : Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/admin/certifs`);
  }
  getdCertifs() : Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/admin/done-certifs`);
  }
  ansCertif(ans : ansCertif) : Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/admin/certif`, ans);
  }
  registerUser(user:RegisterUser):Observable<any>{
    return this.http.post<any>(`${this.apiServerUrl}/admin/add_user`, user)
  }

  getUsers():Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/admin/users`)
  }

  deleteUser(id:string):Observable<any>{
    return this.http.delete<any>(`${this.apiServerUrl}/admin/del_user/${id}`)
  }
  updateUser(user : uUser, id : string):Observable<any>{
    return this.http.patch<any>(`${this.apiServerUrl}/admin/upd_user/${id}`, user)
  }

  signIn(login:LoginUser) : Observable<any>{
    return this.http.post<any>(`${this.apiServerUrl}/login`, login)
  }
  loggedIn(){
    return !!localStorage.getItem('token')
  }
  getToken(){
    return localStorage.getItem('token')
  }
}


