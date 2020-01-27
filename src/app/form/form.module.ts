import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormtempComponent } from './formtemp/formtemp.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormreactiveComponent } from './formreactive/formreactive.component';



@NgModule({
  declarations: [FormtempComponent, FormreactiveComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap:[FormreactiveComponent]
})
export class FormModule { }
