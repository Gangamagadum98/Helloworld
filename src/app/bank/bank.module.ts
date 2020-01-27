import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankComponent } from './bank/bank.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TestComponent } from './test/test.component';
import { AccountComponent } from './account/account.component';
import { AccountReactiveComponent } from './account-reactive/account-reactive.component';
import { EmployeeComponent } from './employee/employee.component';



@NgModule({
  declarations: [BankComponent, TestComponent, AccountComponent, AccountReactiveComponent, EmployeeComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap:[EmployeeComponent]
})
export class BankModule { }
