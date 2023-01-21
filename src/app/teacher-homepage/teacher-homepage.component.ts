import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiServicesService } from '../common-services/api-services.service';
import { SharedDataService } from '../common-services/shared-data.service';

@Component({
  selector: 'app-teacher-homepage',
  templateUrl: './teacher-homepage.component.html',
  styleUrls: ['./teacher-homepage.component.css']
})
export class TeacherHomepageComponent implements OnInit {
  edit = ''
  deleteIcon = ''
  d:string = ''
  questions:any =[]
  buttonText: any;
  updateBody:any = {}
  updatedId:any;
  updateForm = new FormGroup({
    updatedSubject : new FormControl(''),
    updatedQuestion : new FormControl(''),
    updatedLink : new FormControl('')
  })
  constructor(private apiService: ApiServicesService, public dialog: MatDialog,
    private state:SharedDataService, private router: Router) { 
    this.edit = 'assets/img/pencil-square.svg'
    this.deleteIcon = 'assets/img/trash3.svg'
  }
  subjectList:any
  subArray:any = []
  ngOnInit(): void {
    this.state.logButtonText.subscribe(result => {
      this.buttonText = result; // this set's the username to the default observable value
    });
    // if(this.buttonText == "login"){
    //   this.router.navigate(['/login']);
    // }
    this.apiService.getSubjectList().subscribe(data=>{
      this.subjectList = data
      this.subjectList.data.forEach((element: any) => {
        console.log(element)
        this.subArray.push(element)
      });
      
    })

    let id = (JSON.parse(localStorage.getItem('users')!).id)
    this.apiService.getQuestionById(id).subscribe(data=>{
      this.questions = data
      console.log(data)
    })
  }
  question:any=''
  link:any=''
  subject:any=''
  selectedSub = ''
  // onSelected(val:string){
  //   this.selectedSub = val
  // }
  // getQuestion(val:any){
  //   this.question = val;
  // }
  // getLink(val:any){
  //   this.link = val;
  // }
  // getSubject(val:any){
  //   this.subject = val
  // }
  // getSubjectList(){
  //   this.apiService.getSubjectList().subscribe(data=>{
  //     this.subjectList = data
  //   })
  // }
  submit(e:any){
    e.preventDefault();
    let body = {
      question: this.question,
      link: this.link,
      subject: this.selectedSub 
    }
    console.log(body)
    this.apiService.addQuestion(body).subscribe(res=>{
      console.log(res)
    })
  }

  updateQueId(id:any){
    console.log(this.questions)
    this.updatedId = id
    for(let i=0; i<this.questions.data.length; i++){
      if(this.questions.data[i][0] == id){
        alert(id)
        this.updateBody = {
          updatedSubject: this.questions.data[i][6],
          updatedQuestion: this.questions.data[i][1],
          updatedLink: this.questions.data[i][3] 
        }
      }
    }
    this.updateForm.setValue(this.updateBody)
    
  }


  openUpdate(){
    // e.preventDefault();
    let changedObject = {
      subject:this.updateForm.value.updatedSubject,
      question:this.updateForm.value.updatedQuestion,
      link:this.updateForm.value.updatedLink
    }
    console.log("changedObject",changedObject)
    this.apiService.updateQuestion(this.updatedId,changedObject).subscribe(res=>{console.log("res",res)})
    console.log("ss",this.updateForm.value)
  }
}


// 94 21 17 41 52
