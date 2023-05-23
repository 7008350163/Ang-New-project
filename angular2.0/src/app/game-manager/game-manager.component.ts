import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-manager',
  templateUrl: './game-manager.component.html',
  styleUrls: ['./game-manager.component.css']
})
export class GameManagerComponent implements OnInit {
  container = [];

num:number | undefined;
  constructor() {
  }

  ngOnInit() {
  }

  manage(no:any){
    this.container.push();
  }
  }


