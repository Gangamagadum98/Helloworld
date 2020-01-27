import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-treere',
  templateUrl: './treere.component.html',
  styleUrls: ['./treere.component.css']
})
export class TreereComponent implements OnInit {

  constructor(private _builder:FormBuilder) { }

  fields={
    fname:["",[Validators.required, Validators.minLength(3), Validators.pattern("^[a-zA-Z0-9@_&]+$")]],
    sname:["",[Validators.minLength(3), Validators.pattern("^[a-zA-Z0-9@_&]+$")]],
    email:["",[Validators.required, Validators.maxLength(30)]],
    password:["",[Validators.required]]
  }

  reg=this._builder.group(this.fields)

  ngOnInit() {
  }

}
