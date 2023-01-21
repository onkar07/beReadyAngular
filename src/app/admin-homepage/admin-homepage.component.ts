import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServicesService } from '../common-services/api-services.service';

@Component({
  selector: 'app-admin-homepage',
  templateUrl: './admin-homepage.component.html',
  styleUrls: ['./admin-homepage.component.css']
})
export class AdminHomepageComponent implements OnInit {
  edit = ''
  deleteIcon = ''
  constructor(private apiService: ApiServicesService, private router:Router) {
    this.edit = 'assets/img/pencil-square.svg'
    this.deleteIcon = 'assets/img/trash3.svg'
   }
  subjectList:any
  ngOnInit(): void {
    this.apiService.getSubjectList().subscribe(data=>{
      this.subjectList = data
      console.log(this.subjectList.data)
    })
  }
  subjectName:any = '';
  getSubject(value:any):any{
    this.subjectName = value
  }
  async submit(event:any){
    console.log(this.subjectName)
    this.apiService.addSubject({subject:this.subjectName}).subscribe(res=>{console.log(res)})
    this.router.navigateByUrl('/',{skipLocationChange:true}).then(()=>{
      this.router.navigate(['/adminPage']).then(()=>{
        console.log(`After navigation I am on:${this.router.url}`)
      })
    })
  }
  async deleteSubject(id:any){
    this.apiService.deleteSubject(id).subscribe(res=>{console.log(res)})
    this.router.navigateByUrl('/',{skipLocationChange:true}).then(()=>{
      this.router.navigate(['/adminPage']).then(()=>{
        console.log(`After navigation I am on:${this.router.url}`)
      })
    })
  }

}
