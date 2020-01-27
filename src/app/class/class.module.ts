import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassComponent } from './class/class.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [ClassComponent],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports:[ClassComponent]
})
export class ClassModule { }
