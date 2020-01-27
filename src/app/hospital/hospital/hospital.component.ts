import { Component, OnInit } from '@angular/core';
import { FormBuilder,  Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent implements OnInit {

  constructor(private _builder:FormBuilder, private _router:Router) { }

  fields={
    name:["",[Validators.required, Validators.maxLength(10)]],
    password:["",[Validators.required,Validators.minLength(4)]],
    email:["",[Validators.required, Validators.maxLength(10)]],
    mobno:["",[Validators.required, Validators.minLength(10), Validators.maxLength(10)]],

  }

  form = this._builder.group(this.fields)

  navigateToward(){
    this._router.navigate(["ward"])
  }

  ngOnInit() {
  }

}
