import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-starter',
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.css']
})
export class StarterComponent implements OnInit {

  product={name:"tomato soup", offer:"20%", price:"100"}
 
  

  constructor() { }

  ngOnInit() {
  }

}
