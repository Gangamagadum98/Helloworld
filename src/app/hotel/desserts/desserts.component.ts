import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desserts',
  templateUrl: './desserts.component.html',
  styleUrls: ['./desserts.component.css']
})
export class DessertsComponent implements OnInit {
  product ={name:"ice cream", offer:"30%", price:"200"}

  constructor() { }

  ngOnInit() {
  }

}
