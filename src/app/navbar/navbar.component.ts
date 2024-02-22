import { Component } from '@angular/core';
import {  NavigationStart, Router ,Event as NavigationEvent } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  event$
  constructor( private location: Location,private _ActivatedRoute:ActivatedRoute ,private _AuthService: AuthService , private _Router:Router) {
    this._AuthService.userData.subscribe({
      next: () => {
        if (this._AuthService.userData.getValue() != null) {
          this.isLogin = true;
        } else {
          this.isLogin = false
        }
      }
    })

    this.event$=location.onUrlChange((val) => {
      console.log( val)
    })
  }

  isLogin: boolean = false;

  handleLogin() {
    this._AuthService.redirect.next('login')
  }
  handleRegister() {
    this._AuthService.redirect.next('register')
  }

  LogOut() {
    this._AuthService.logOut();
    console.log(this.isLogin);

  }
}
