import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {

  userName
  address
  ph
  email
  type


  display(bank){
    console.log("test")
    console.log(this.userName)
    console.log(this.address)
    console.log(this.ph)
    console.log(this.email)
    console.log(this.type)
    console.log(bank)
  }

  constructor() { }

  ngOnInit() {
  }

}
