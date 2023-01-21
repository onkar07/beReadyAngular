import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { ApiServicesService } from '../common-services/api-services.service';
import { throwError } from 'rxjs';
import { LoginAuthService } from '../auth-services/login-auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  noRender = new BehaviorSubject<boolean>(false);
  constructor(public ApiServices: ApiServicesService, private router: Router,
              private loginAuthService:LoginAuthService) { }
  
  ngOnInit(): void {
  }
  userId:String = '';
  userPassword:String = '';
  getUserId(val: string){
    console.log(val)
    this.userId = val;
  }
  getPassword(val: string){
    console.log(val)
    this.userPassword = val
  }
  
  login_Auth(event: any): any{
    event.preventDefault();
    let user = { name: this.userId,
                 password: this.userPassword}
    this.loginAuthService.login(user).subscribe(res=>{
      if (res.success != 0) {
        console.log(res.userInfo.role)
        let role = res.userInfo.role
        this.router.navigate(['/homepage']);
        this.router.navigateByUrl('/',{skipLocationChange:true}).then(()=>{
          this.router.navigate(['/homepage']).then(()=>{
            console.log(`After navigation I am on:${this.router.url}`)
          })
        })
        // if(role == 'student')
        //   this.router.navigateByUrl('/studentPage').then(()=> window.location.reload());
        // else if(role == 'sudo'){
        //   alert("DD");
        //   this.router.navigateByUrl('/adminPage');}
        // else if(role == 'teacher')
        //   this.router.navigate(['/teacherPage']).then(()=> window.location.reload());
      } 
      else{
        console.log(res)
        alert(res.users)
        this.router.navigate(['/login']).then(()=> window.location.reload());
      }
      
    })
  }

  demo(){
    console.log("123")
    alert("bolo")
  }
}
