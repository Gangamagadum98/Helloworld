import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartyComponent } from './party/party.component';
import { BrowserModule } from '@angular/platform-browser';
import { PartyDirective } from './party.directive';



@NgModule({
  declarations: [PartyComponent, PartyDirective],
  imports: [
    CommonModule,
    BrowserModule
  ],
  bootstrap:[PartyComponent]
})
export class PartyModule { }
