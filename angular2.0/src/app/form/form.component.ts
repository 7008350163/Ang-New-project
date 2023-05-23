import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor(){

  }
  form={
    firstname:"",
    lastname:"",
    email:"",
    password:""
  }

 onsubmit(this:FormComponent,templateform:any){
  //console.log(templateform.value)
  console.log(this.form)
 }
}
