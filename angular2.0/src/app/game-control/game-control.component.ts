import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {TimeInterval} from 'rxjs';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit, OnDestroy {
  counter = 0;
  interval: any;
  seconds = 1 * 1000;

  @Input() gameComponents:any;
  @Output() gameStartEmitter = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  onGameStart() {
    let count=0;
    const id= setInterval(() => {
      count++
    }, 1000);
    console.log(id,"start")
  }
  

  onGameStop() {
    clearInterval(this.interval);
  }

  ngOnDestroy() {
    this.onGameStop();
  }
}