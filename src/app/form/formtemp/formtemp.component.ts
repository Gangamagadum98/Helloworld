import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formtemp',
  templateUrl: './formtemp.component.html',
  styleUrls: ['./formtemp.component.css']
})
export class FormtempComponent implements OnInit {

  constructor() { }

  display(form){
    console.log(form)
  }

  ngOnInit() {
  }

}
