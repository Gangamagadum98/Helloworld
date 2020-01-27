import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClgComponent } from './clg/clg.component';
import { BrowserModule } from '@angular/platform-browser';
import { BranchModule } from '../branch/branch.module';
import { ClassModule } from '../class/class.module';



@NgModule({
  declarations: [ClgComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BranchModule,
    ClassModule
  ],
  bootstrap:[ClgComponent]
})
export class ClgModule { }
