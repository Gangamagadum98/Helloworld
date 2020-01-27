import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalComponent } from './animal/animal.component';
import { BrowserModule } from '@angular/platform-browser';
import { TigerModule } from '../tiger/tiger.module';
import { HorseModule } from '../horse/horse.module';




@NgModule({
  declarations: [AnimalComponent],
  imports: [
    CommonModule,
    BrowserModule,
    TigerModule,
    HorseModule
  ],
  bootstrap:[AnimalComponent]
})
export class AnimalModule { }
