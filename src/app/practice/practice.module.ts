import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent/parent.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [ParentComponent, Child1Component, Child2Component],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule
  ],
  bootstrap : [ParentComponent]
})
export class PracticeModule { }
