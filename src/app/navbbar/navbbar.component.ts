import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServicesService } from '../common-services/api-services.service';
import { SharedDataService } from '../common-services/shared-data.service';

@Component({
  selector: 'app-navbbar',
  templateUrl: './navbbar.component.html',
  styleUrls: ['./navbbar.component.css']
})
export class NavbbarComponent implements OnInit {

  buttonText:string=''
  constructor(private apiService:ApiServicesService, private router:Router, private state:SharedDataService) { }

  ngOnInit(): void {
    console.log("nav called")
    this.state.logButtonText.subscribe(result => {
      this.buttonText = result; // this set's the username to the default observable value
    });
    // if(this.buttonText == "login"){
    //   this.router.navigate(['/login']);
    // }
    
    try{
      this.apiService.verifyLogin().subscribe((res:any)=>{
        console.log(res),
        (err:any)=>{
          if (err instanceof HttpErrorResponse) {
            console.log("err",err)
            if (err.status !== 401) {
              this.router.navigate(['homepage']);
            }
            this.router.navigate(['homepage']);
          }
        }
        if(res.msg == "loggedin"){
          this.buttonText = "logout"
        }
        else{
          this.buttonText = "login"
          localStorage.removeItem('access_token')
          localStorage.removeItem('users')
        }
      })
    }
    catch(e){
      console.log(e)
      this.buttonText = "login"
    }
    
  }

  logout(){
    this.buttonText = "login"
    localStorage.removeItem('access_token')
    localStorage.removeItem('users')
  }
}
