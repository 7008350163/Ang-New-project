import { Component } from '@angular/core';
import { Observable, count } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent {

  //observable
  obv = new Observable((observe)=>{
    console.log("hi this is observable")
    observe.next(1)
    observe.next(2)
    observe.next(3)
  })
  //observable timeout
  obv1 = new Observable((observe)=>{
    console.log("hi this set timeout ")
    setTimeout(()=>{
      observe.next("hi this is 1")
    },1000);
    setTimeout(()=>{
      observe.next("hi this is next 2")
    },2000);
    let count=0;
    setInterval(()=>{
      count++;
      console.log("hi this is set interval",count)
    },1000)
    setTimeout(()=>{
      observe.complete()
    },4000);
    setTimeout(()=>{
      observe.next(5)
    },3000)
  })
  //promises

  pro=new Promise(resolve=> {
    console.log("promise working...")
    setTimeout(()=>{
      resolve("promise working")
      resolve("promise 1")
      resolve("promise 2")
    },3000)
  })

  //pro1
  pro1=new Promise(resolve=>{
    console.log("hi this pro1")
  setTimeout(()=>{
    console.log("hi this pro 1 settimeout");
    resolve("promise 1 working");
    resolve("another pro")
  },2000)  
  })

  pro1value:any=""

  value1:any =""

  value2:any =""

 
  constructor(){
    this.obv.subscribe(val=>{
      console.log(val)
    })
    this.obv1.subscribe(val=>{
      this.value1 =val
      console.log(val)
    },
    )
    this.pro.then(results=>this.value2=results)

    //pro1
    this.pro1.then(result=>this.pro1value=result)
    console.log(this.pro);
  }
}
