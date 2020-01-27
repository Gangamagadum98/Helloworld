import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingComponent } from './shopping/shopping.component';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'



@NgModule({
  declarations: [ShoppingComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule
  ],
  bootstrap:[ShoppingComponent]
})
export class ShoppingModule { }
