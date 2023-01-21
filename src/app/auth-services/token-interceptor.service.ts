import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, Subject, throttleTime, throwError } from 'rxjs';
import { SharedDataService } from '../common-services/shared-data.service';
import { LoginAuthService } from './login-auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{
  private throttleLogout = new Subject();
  loggedBtnState:string='logIn'
  constructor(private _injector: Injector, private router:Router, private state:SharedDataService) {
    this.throttleLogout.pipe(throttleTime(5000)).subscribe(url => {
      // console.log(url)
      return url
    });
   }
  logout() {
    throw new Error('Method not implemented.');
  }
  intercept(req:any, next:any){
    let authService = this._injector.get(LoginAuthService)
    let tokenizedReq = req.clone({
      setHeaders:{
        Authorization: `Bearer ${authService.getToken()}`
      }
    })
    console.log(tokenizedReq)
    return next.handle(tokenizedReq).pipe(
      catchError((response: HttpErrorResponse) => {
        if (response.status === 401) {
          this.state.logButtonText.subscribe(result => {
            this.loggedBtnState = 'logout'; // this set's the username to the default observable value
            // this.router.navigate(['/homepage'])
          });
          console.log(response.status )
          this.throttleLogout.next(response);
          return "notLogged"
        }
        return throwError(response);
      }
    ));
  }
}
