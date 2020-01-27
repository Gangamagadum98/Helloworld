import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HospitalComponent } from './hospital/hospital.component';
import { WardComponent } from './ward/ward.component';
import { PeopleComponent } from './people/people.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HospComponent } from './hosp/hosp.component';

let routes:Routes=[{path:'ward', component:WardComponent},
{path:'people', component:PeopleComponent},
{path:'hospital', component:HospitalComponent}]


@NgModule({
  declarations: [HospitalComponent, WardComponent, PeopleComponent, HospComponent],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)

  ],
  bootstrap:[HospComponent]
})
export class HospitalModule { }


