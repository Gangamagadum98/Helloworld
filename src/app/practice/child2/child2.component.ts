import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  pqr
  constructor() { }

  @Input() xyz


  ngOnInit() {
    console.log(this.xyz)
    this.pqr = this.xyz
  }

}
