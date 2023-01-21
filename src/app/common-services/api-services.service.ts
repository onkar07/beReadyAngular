import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {
  apiURL = 'http://13.127.179.6:5000';
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  login(user: any): Observable<any> {
    let headers = { 'content-type': 'application/json','Access-Control-Allow-Origin':'*'}  
    return this.http
      .post<any>(
        this.apiURL + '/login',
        JSON.stringify(user),
        {'headers':headers}
      )
  }

  getQuostions(){
    let headers = { 'content-type': 'application/json'}  
    return this.http
      .post(
        this.apiURL + '/que/list',
        {'headers':headers}
      )
  }

  addSubject(body:any){
    let headers = { 'content-type': 'application/json'}  
    return this.http
      .post(
        this.apiURL + '/subject/add',
        body,
        {'headers':headers}
      )
  }

  deleteSubject(id:number){
    let headers = { 'content-type': 'application/json'}  
    return this.http
      .delete<any[]>(
        this.apiURL + '/subject/delete?id='+id,
        {'headers':headers}
      )
  }

  getSubjectList(){
    let headers = { 'content-type': 'application/json'}  
    return this.http
      .get<any[]>(
        this.apiURL + '/subject/list',
        {'headers':headers}
      )
  }
  addQuestion(body:any){
    let headers = { 'content-type': 'application/json'}  
    return this.http
      .post(
        this.apiURL + '/question/create',
        body,
        {'headers':headers}
      )
  }

  getQuestions(id:number){
    let headers = { 'content-type': 'application/json'}  
    return this.http
      .get<any[]>(
        this.apiURL + '/subject/getQuestions?id='+id,
        {'headers':headers}
      )
  }

  getQuestionById(id:number){
    let headers = { 'content-type': 'application/json'}  
    return this.http
      .get<any[]>(
        this.apiURL + '/question/list/one?id='+id,
        {'headers':headers}
      )
  }

  deleteQuestion(id:number){
    let headers = { 'content-type': 'application/json'}  
    return this.http
      .delete<any[]>(
        this.apiURL + '/question/delete?id='+id,
        {'headers':headers}
      )
  }

  updateQuestion(id:number,body:any){
    let headers = { 'content-type': 'application/json'}  
    return this.http
      .patch<any[]>(
        this.apiURL + '/question/update?id='+id,
        body,
        {'headers':headers}
      )
  }

  verifyLogin(){
    let headers = { 'content-type': 'application/json'}  
    return this.http
      .get<any[]>(
        this.apiURL + '/verify',
        {'headers':headers}
      )
  }


  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
