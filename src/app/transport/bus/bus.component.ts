import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.css']
})
export class BusComponent implements OnInit {

  @Input() xyz

  constructor() { }

  ngOnInit() {
    console.log(this.xyz)
  }

}
