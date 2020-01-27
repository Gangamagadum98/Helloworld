import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gov-bus',
  templateUrl: './gov-bus.component.html',
  styleUrls: ['./gov-bus.component.css']
})
export class GovBusComponent implements OnInit {

  gov={name:"KSRTC", code:"FESTIVE",route:"Belgaum", offer:"30%"}
  govbus={name:"RAJAHAMSA", code:"RAIN",route:"chikkodi", offer:"10%"}

  bus=[this.gov,this.govbus]

  constructor() { }

  ngOnInit() {
  }

}
