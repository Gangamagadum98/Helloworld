import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {
  x =5
  @Output() event = new EventEmitter();
  constructor() { }

  ngOnInit() {
     console.log("inside branch comp")
     console.log(this.x)
     this.event.emit(this.x);
  }

}
