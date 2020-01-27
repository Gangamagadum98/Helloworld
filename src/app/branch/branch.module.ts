import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BranchComponent } from './branch/branch.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [BranchComponent],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports:[BranchComponent]
})
export class BranchModule { }
