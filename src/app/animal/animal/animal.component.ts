import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {

  t

  recieve(text){
    console.log("animal recieved from tiger")
    console.log(text)
    this.t=text
  }

  constructor() { }

  ngOnInit() {
  }

}
