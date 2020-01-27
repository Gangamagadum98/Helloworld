import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  x=5

  @Output() event = new EventEmitter();

  constructor() { }

  ngOnInit() {

    this.event.emit(this.x)
  }

}
