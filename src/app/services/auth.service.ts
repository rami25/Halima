import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login, LoginUser, RegisterUser, User} from '../interfaces/User';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiServerUrl = environment.apiBaseUrl

  constructor(private http:HttpClient) { }

  getDoctors():Observable<RegisterUser[]>{

    return this.http.get<RegisterUser[]>('http://localhost:8000/api/users/getdoctors');
  }
  registerUser(user:RegisterUser):Observable<{message:string}>{


    return this.http.post<{message:string}>('http://localhost:8000/api/users/signup',user) 
  }

  getUsers():Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/admin/users`)
  }

  deleteUser(id:number):Observable<{message:string}>{


    return this.http.delete<{message:string}>(`http://localhost:8000/api/users/${id}`)
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
  logout() : Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/logout`)
  }
}


