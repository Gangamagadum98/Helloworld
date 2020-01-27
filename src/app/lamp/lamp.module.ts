import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LampComponent } from './lamp/lamp.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [LampComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule
  ],
  bootstrap:[LampComponent]
})
export class LampModule { }
