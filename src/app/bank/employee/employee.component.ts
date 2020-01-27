import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private _builder:"FormBuilder") { }

  fields={
    fullName:[],
    email:[]

  }

  

  ngOnInit() {
  }

}
