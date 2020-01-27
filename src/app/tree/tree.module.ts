import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeComponent } from './tree/tree.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TreereactComponent } from './treereact/treereact.component';
import { TreereComponent } from './treere/treere.component';




@NgModule({
  declarations: [TreeComponent, TreereactComponent, TreereComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap:[TreereComponent]
})
export class TreeModule { }
