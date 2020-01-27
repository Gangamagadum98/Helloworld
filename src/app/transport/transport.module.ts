import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusComponent } from './bus/bus.component';
import { TrainComponent } from './train/train.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { LogComponent } from './log/log.component';
import { TransportComponent } from './transport/transport.component';



let routes:Routes=[{path:'log', component:LogComponent}]




@NgModule({
  declarations: [TransportComponent, BusComponent, TrainComponent, LogComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap:[TransportComponent]
})
export class TransportModule { }
