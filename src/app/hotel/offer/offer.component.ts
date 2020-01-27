import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {

  paneer ={name:"tandoori", offer:"20%", price:"100"}
  mashroom ={name:"roti", offer:"30%", price:"200"}
  product=[this.paneer,this.mashroom]

  constructor() { }

  ngOnInit() {
  }

}
