import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loc',
  templateUrl: './loc.component.html',
  styleUrls: ['./loc.component.css']
})
export class LocComponent implements OnInit {

  hotel1={name:"Ramdev", offer:"30%"}
  hotel2={name:"Shabari",offer:"20%"}

  hotels=[this.hotel1,this.hotel2]

  constructor() { }

  ngOnInit() {
    console.log("inside location")
  }

}
