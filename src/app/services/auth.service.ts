import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login, LoginUser, RegisterUser, User, uUser} from '../interfaces/User';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiServerUrl = environment.apiBaseUrl

  constructor(private http:HttpClient) { }
  getComments(): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/admin/comments`);
  }  
  getCertifs(ids : string[]) : Observable<any> {
    const idsParam = ids.join(',');
    return this.http.get<any>(`${this.apiServerUrl}/certifs?ids=${idsParam}`);    
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


