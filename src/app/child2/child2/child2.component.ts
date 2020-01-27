import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  @Input() abc

  constructor() { }

  ngOnInit() {
    console.log("Recieving variable from parent to child2")
    console.log(this.abc)
  }

}
