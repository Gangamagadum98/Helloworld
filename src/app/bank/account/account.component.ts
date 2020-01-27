import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  userName
  branches
  accountNo

  display(account){
    console.log("testing")
    console.log(this.userName)
    console.log(this.branches)
    console.log(this.accountNo)
    console.log(account)
  }
  
  myFunction(){
    alert("Successfully saved your info")
    }

   


  constructor() { }

  ngOnInit() {
  }

}
