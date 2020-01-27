import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gmail',
  templateUrl: './gmail.component.html',
  styleUrls: ['./gmail.component.css']
})
export class GmailComponent implements OnInit {

  constructor(private _router:Router) { }
 


  navigateToGmaild(){
  this._router.navigate(["/gmaild"])
  }
  ngOnInit() {
  }

}
