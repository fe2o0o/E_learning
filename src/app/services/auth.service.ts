import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient: HttpClient , private _Router:Router ) {

      if (localStorage.getItem("userData") != null) {
      this.isLogIn()
      _Router.navigate(['/home'])
    }
   }
  redirect = new BehaviorSubject<string>("login");
  userData = new BehaviorSubject(null);


  isLogIn() {
    const userData = JSON.parse(`${localStorage.getItem('userData')}`)
    this.userData.next(userData)
  }

  logOut() {
    localStorage.removeItem('userData');
    this.userData.next(null)
  }

  login(data:any): Observable<any>{
    return this._HttpClient.post('http://localhost:9000/api/v1/login' , data)
  }

  register(data: any): Observable<any>{
    return this._HttpClient.post('http://localhost:9000/api/v1/register',data)
  }


}
