import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServicesService } from '../common-services/api-services.service';


@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.css']
})
export class StudentPageComponent implements OnInit {
imagePath = ''
  constructor(public router:Router, private apiService:ApiServicesService) { this.imagePath = 'assets/img/acc.svg' }
  subjectList:any
  subArray:any = []
  questionArray:any = []
  ngOnInit(): void {
    this.apiService.getSubjectList().subscribe(data=>{
      this.subjectList = data
      this.subjectList.data.forEach((element: any) => {
        console.log(element)
        this.subArray.push(element)
      });
      
    })
    
  }

  getQuestions(id:number){
    this.router.navigateByUrl('videoPage'),{queryParams:{queId:id}};
  }

}
