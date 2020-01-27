import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-treereact',
  templateUrl: './treereact.component.html',
  styleUrls: ['./treereact.component.css']
})
export class TreereactComponent implements OnInit {

  constructor(private _builder:FormBuilder) { }

  fields={
    username:["",[Validators.required]],
    password:["pass"],
    mobno:[]

  }

  form= this._builder.group(this.fields)

  ngOnInit() {
  }

}
