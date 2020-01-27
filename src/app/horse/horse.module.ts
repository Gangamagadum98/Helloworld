import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorseComponent } from './horse/horse.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [HorseComponent],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports:[HorseComponent]
})
export class HorseModule { }
