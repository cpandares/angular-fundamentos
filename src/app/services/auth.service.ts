import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from '../../environments/environment';
import { Auth, User } from '../models/user.model'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = `${environment.API_URL}/api/auth`;

  constructor(
    private http: HttpClient
  ) { }


  login(email:string, password:string){
    return this.http.post<Auth>(`${this.apiUrl}/login`, { email, password })
  }

  profile(token : string ){

    /* const headers = new HttpHeaders();
    headers.set('Authorization',`Bearear ${token}` ); */

    return this.http.get<User>(`${this.apiUrl}/profile`,{
      headers:{
        Authorization:`Bearear ${token}`,
        /* 'Content-type': 'application/json' */
      }
    })
  }

}
