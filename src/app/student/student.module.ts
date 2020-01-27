import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student/student.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [StudentComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule
  ],
  bootstrap:[StudentComponent]
})
export class StudentModule { }
