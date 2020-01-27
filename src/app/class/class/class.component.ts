import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  @Input() text;

 constructor() { }

  ngOnInit() {
    console.log("recieving from clg to class")
    console.log(this.text)

   
  }

}
