import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formreactive',
  templateUrl: './formreactive.component.html',
  styleUrls: ['./formreactive.component.css']
})
export class FormreactiveComponent implements OnInit {

  constructor(private _builder:FormBuilder) { }

  fields={
    firstname:["",[Validators.required, Validators.minLength(10), Validators.pattern("^[A-Za-z0-9]+$")]],
    lastname:["",[Validators.required, Validators.minLength(10), Validators.pattern("^[A-Za-z0-9@_&]+$")]],
    mobno:["", [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("^[0-9]+$")]],
    java:[],
    angular:[],
    gendername:[]
  }

  display(){
    alert("Success")
  }

  reg=  this._builder.group(this.fields)

  ngOnInit() {
  }

}
