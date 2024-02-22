import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  constructor(private _AuthService: AuthService, private _Router:Router ) {
    this._AuthService.redirect.subscribe({
      next: () => {
        if (this._AuthService.redirect.getValue() == 'login') {
          this.redirec='login'
        } else {
          this.redirec='register'
        }
      }
    })
  }

  erroMessage: string = '';

  redirec: string = 'login';

  login: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required])
  })


  Register: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
    userName:new FormControl (null , [Validators.required])
  })


  handleLogin(form: FormGroup) {
    this._AuthService.login(form.value).subscribe({
      next: (res)=>{
        if (res.status == 'success') {
          localStorage.setItem('userData', JSON.stringify(res.data))
          this._AuthService.isLogIn();
          this._Router.navigate(['/home'])

        } else {
          this.erroMessage = `${res.message}`
        }
      }
    })
  }

  handleRegister(form: FormGroup) {
    this._AuthService.register(form.value).subscribe({
      next: (res) => {
        if (res.message == "Success") {
          this.redirec = 'login';
          form.setValue({email:'',password:'',userName:''})
        } else {
          this.erroMessage = `${res.message}`
        }
      }
    })
  }

}
