//Reactive Form
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  

  constructor(private _builder:FormBuilder) { }

  fields={
    name:['', [Validators.required, Validators.minLength(3)]],
    address:['', [Validators.required, Validators.minLength(30)]],
    mobNo:['',[Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    email:['',[Validators.required, Validators.maxLength(30)]],
    type:['',[Validators.required, Validators.maxLength(2)]]

  }

  form = this._builder.group(this.fields)
  

  ngOnInit() {
  }

}
