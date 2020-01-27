import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-veg',
  templateUrl: './veg.component.html',
  styleUrls: ['./veg.component.css']
})
export class VegComponent implements OnInit {

 prod1={name:"VegBiryani",price:100,offer:"10%"}
 prod2={name:"Palaw",price:50,offer:"5%"}
 prods=[this.prod1,this.prod2]


  constructor(private _router:Router) { }

  ngOnInit() {
    
  }
  navigateToDessert(){
    console.log("inside navigate method")
    this._router.navigate(["veg/desserts"])

  }

}
