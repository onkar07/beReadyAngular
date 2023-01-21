import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiServicesService } from '../common-services/api-services.service';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {

  constructor(private apiServices:ApiServicesService, private router: Router) {  }

  login(users: any){
    return this.apiServices.login(users).pipe(tap((response:any)=>{
      
      if(localStorage.getItem('access_token')){
        localStorage.removeItem('access_token');
      }
      if(response.acccess_token == undefined){
        alert("access token failes")
      }
      else if(response.success == 0){
        alert("login failed")
      }
      else{
        localStorage.setItem('access_token',response.acccess_token)
        localStorage.setItem('users',JSON.stringify(response.userInfo))
      }
      
    }))
  }
  loggedIn(){
    return !!localStorage.getItem('access_token');
  }
  getToken(){
    return localStorage.getItem('access_token');  
  }
}
