import { Component } from '@angular/core';

@Component({
  selector: 'app-warningalert',
  templateUrl: './warningalert.component.html',
  styleUrls: ['./warningalert.component.css']
})
export class WarningalertComponent {
  x:string="WARNING :STAY ALERT"

  str:string="username";

  reset(){
    alert();
  }
}

