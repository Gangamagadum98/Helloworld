import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-account-reactive',
  templateUrl: './account-reactive.component.html',
  styleUrls: ['./account-reactive.component.css']
})
export class AccountReactiveComponent implements OnInit {

  constructor(private _builder:FormBuilder) { }

  display(form){
    alert("Information saved successfully")
  }


  fields={
    name:["",[Validators.required, Validators.minLength(5)]],
    accno:["",[Validators.required, Validators.maxLength(10)]],
    phno:["",[Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    email:["", [Validators.required, Validators.maxLength(30)]],
    address:["", [Validators.required, Validators.maxLength(20)]],
    ifsc:["",[Validators.required, Validators.maxLength(10)]]
  }

  form = this._builder.group(this.fields)

  ngOnInit() {
  }

}
