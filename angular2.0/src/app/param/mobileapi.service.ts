import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MobileapiService {

  constructor()
   { }

   mobileapi=[
    {
      id:"1",
      img:"../../assets/iphonex.jpg",
      title:"iphonex",
      desc :"iphone x internal 256 gb"
    },
    {
      id:"2",
      img:"../../assets/iphone14.png",
      title:"iphone14",
      desc:"iphone 14 internal 256 gb",
      model:"t21"
    }
   ]
}
