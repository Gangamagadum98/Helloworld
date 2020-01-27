import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child2Component } from './child2/child2.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [Child2Component],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports:[Child2Component]
})
export class Child2Module { }
