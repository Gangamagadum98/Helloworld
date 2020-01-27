import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-private-bus',
  templateUrl: './private-bus.component.html',
  styleUrls: ['./private-bus.component.css']
})
export class PrivateBusComponent implements OnInit {

  private={name:"VRL", code:"FESTIVE",route:"Belgaum", offer:"50%"}
  privatebus={name:"SEA Bird", code:"RAIN",route:"chikkodi", offer:"50%"}

  bus=[this.private,this.privatebus]

  constructor() { }

  ngOnInit() {
  }

}
