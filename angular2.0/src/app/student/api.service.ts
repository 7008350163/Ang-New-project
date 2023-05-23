import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  postStudent() {
    throw new Error('Method not implemented.');
  }

  apiurl="http://localhost:3000/"

  constructor(private http:HttpClient) {
    console.log(`${this.apiurl}`)
   }

  getStudent():Observable<Student[]>{
    console.log("get student method"+this.apiurl+"student")
    console.log(this.apiurl.toString())
    return this.http.get<Student[]>(this.apiurl+"student")
  }

  //post method
  addStudents(student:Student):Observable<any>{
    const headers ={'content-type':'application/json'}
    const body =JSON.stringify(student)
    
    console.log(body)
    return this.http.post(this.apiurl+'student',body,{'headers':headers})

  }
}
