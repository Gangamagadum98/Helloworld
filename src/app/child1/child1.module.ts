import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child1Component } from './child1/child1.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [Child1Component],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports:[Child1Component]

})
export class Child1Module { }
