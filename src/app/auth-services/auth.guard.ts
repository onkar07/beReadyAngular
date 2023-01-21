import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginAuthService } from './login-auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _authService: LoginAuthService, private router: Router){}
  canActivate(): boolean { 
    if(this._authService.loggedIn()){
      return true;
    }
    else{
      this.router.navigate(['/login'])
      return false
    }
  }
  
}
