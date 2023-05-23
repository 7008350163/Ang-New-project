import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MobileapiService } from './mobileapi.service';



@Component({
  selector: 'app-param',
  templateUrl: './param.component.html',
  styleUrls: ['./param.component.css']
})
export class ParamComponent {
  //step1 is mobile fetch the object
  //step2 is to navigate particular id
mobile:any;
constructor(private route:Router  , private mobileapi:MobileapiService){
  this.mobile=mobileapi.mobileapi;
}
next1(id:any){
  console.log(id)
  this.route.navigateByUrl("param/"+id+"/display")
}

}
