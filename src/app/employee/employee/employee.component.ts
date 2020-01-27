import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  EmployeeName
  emp
  emps
  bank

 

  constructor(private _service:EmployeeService) { 

  }

  getdata(){
    let obsevable = this._service.getdata()
      obsevable.subscribe((resp)=>{console.log(resp['data']),
      this.emps = resp['data']
      //console.log(this.emps)
    })
  }
  senddata(){
    this._service.senddata().subscribe((resp)=>{console.log(resp)})
    console.log("Inside send data")
    
    
  }
  updatedata(){
    this._service.updatedata().subscribe((resp)=>
    
      {console.log(resp)
    })
  }

  deletedata(){
    this._service.deletedata().subscribe((resp)=>{
      console.log(resp)
    })
  }

  

  ngOnInit() {
    this.EmployeeName=this._service.name
    console.log(this.EmployeeName)
    this.emp = this._service.emp

    
      this.getdata();
      console.log(this.emps)
    
  }

}
