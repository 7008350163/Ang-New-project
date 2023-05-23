import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { emailvalid } from './custom';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent {
  constructor(private fb:FormBuilder){}
  loginform=this.fb.group({
    email:["",emailvalid("harman@gmail.com")], 
    password:["",Validators.min(8)]
  })
  login(){
    console.log(this.loginform.value)
  }
  get email():FormControl{
    return this.loginform.get('email') as FormControl
  }
  get password():FormControl{
    return this.loginform.get('password') as FormControl
  }
}
