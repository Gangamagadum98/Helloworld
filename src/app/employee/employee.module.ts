import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee/employee.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [EmployeeComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule
  ],
  bootstrap:[EmployeeComponent]
})
export class EmployeeModule { }
