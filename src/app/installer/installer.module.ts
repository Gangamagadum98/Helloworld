import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstallerComponent } from './installer/installer.component';
import { BrowserModule } from '@angular/platform-browser';
import { InstallerdetailsComponent } from './installerdetails/installerdetails.component';
import { RouterModule, Routes } from '@angular/router';

let routes:Routes=[{path:'insta', component:InstallerComponent},
{path:'instad', component:InstallerdetailsComponent}]

@NgModule({
  declarations: [InstallerComponent, InstallerdetailsComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap:[InstallerComponent]
})
export class InstallerModule { }
