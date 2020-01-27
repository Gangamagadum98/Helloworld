import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menucourse',
  templateUrl: './menucourse.component.html',
  styleUrls: ['./menucourse.component.css']
})
export class MenucourseComponent implements OnInit {

  product ={name:"Veg biryani", offer:"30%", price:"200"}

  constructor() { }

  ngOnInit() {
  }

}
