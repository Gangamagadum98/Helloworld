import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent/parent.component';
import { BrowserModule } from '@angular/platform-browser';
import { Child1Module } from '../child1/child1.module';
import { Child2Module } from '../child2/child2.module';



@NgModule({
  declarations: [ParentComponent],
  imports: [
    CommonModule,
    BrowserModule,
    Child1Module,
    Child2Module
  ],
  bootstrap:[ParentComponent]
})
export class ParentModule { }
