import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-tiger',
  templateUrl: './tiger.component.html',
  styleUrls: ['./tiger.component.css']
})
export class TigerComponent implements OnInit {

  
  name="tiger"
  
  

  @Output() event=new EventEmitter();

  constructor() { }

  ngOnInit() {
  
    console.log("tiger starts giving")
    console.log(this.name)
  this.event.emit(this.name)

  }

}
