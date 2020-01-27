import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TigerComponent } from './tiger/tiger.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [TigerComponent],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports:[TigerComponent]
})
export class TigerModule { }
