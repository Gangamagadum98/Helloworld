import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.css']
})
export class BusComponent implements OnInit {

  bus={name:"SRS", route:"Belgaum", code:"FESTIVE", price:"50%"}
  bus1={name:"SeaBird", route:"Chikkodi", code:"RAIN", price:"50%"}
  buses=[this.bus,this.bus1]


  constructor() { }

  ngOnInit() {
  }

}
