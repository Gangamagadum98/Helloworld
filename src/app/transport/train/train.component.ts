import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.css']
})
export class TrainComponent implements OnInit {

  name="shatabdi"

 @Output() event=new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log("Inside child1")
   this.event.emit(this.name)

  }

}
