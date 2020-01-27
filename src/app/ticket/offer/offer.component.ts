import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {

  offer1={name:"VRL",offer:"20%"}
  offer2={name:"Ramdev",  offer:"50%"}

  offers=[this.offer1,this.offer2]

  constructor() { }

  ngOnInit() {
  }

}
