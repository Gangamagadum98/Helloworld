import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nonveg',
  templateUrl: './nonveg.component.html',
  styleUrls: ['./nonveg.component.css']
})
export class NonvegComponent implements OnInit {

  prod1={name:"Chicken biryabi",price:100,offer:"10%"}
  prod2={name:"kushka",price:50,offer:"5%"}
  prods=[this.prod1,this.prod2]

  constructor() { }

  ngOnInit() {
  }

}
