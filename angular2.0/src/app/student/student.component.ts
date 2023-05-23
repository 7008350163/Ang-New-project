import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { Student } from './student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  constructor(private api1:ApiService){
    console.log(Student)
  }
    student1:Student[]|undefined

    //
    student= new Student();
    
    studentdetails(){
      console.log("buttonworking")
      this.api1.getStudent().subscribe(data=>{
        console.log(data)
        this.student1 = data
      })
    }
    //post comp api
    addstudent(){
      this.api1.addStudents(this.student).subscribe(data=>{
        console.log(data)
      })
    }
  
  }
  


