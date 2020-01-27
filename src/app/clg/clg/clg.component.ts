import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clg',
  templateUrl: './clg.component.html',
  styleUrls: ['./clg.component.css']
})
export class ClgComponent implements OnInit {

  test

  recieve(y)
  {
    console.log("recieving from branch to clg")
    console.log(y)
    this.test=y
  }

  constructor() { }

  ngOnInit() {
  }

}
