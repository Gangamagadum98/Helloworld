import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParkComponent } from './park/park.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [ParkComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule
  ],
  bootstrap:[ParkComponent]
})
export class ParkModule { }
