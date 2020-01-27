import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.css']
})
export class TransportComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {
  }

  navigateToLog(){
    this._router.navigate(["/log"])
  }

}
