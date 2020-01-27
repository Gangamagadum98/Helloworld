import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  xyz
  recieve(x){
    console.log("Recieving variable from child1 to parent")
    console.log(x)
    this.xyz = x
  }

  constructor() { }

  ngOnInit() {
  }

}
