import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegComponent } from './reg/reg.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';

let routes:Routes=[{path:'registration', component:RegistrationComponent},
{path:'login', component:LoginComponent},
{path:'home', component:HomeComponent}]


@NgModule({
  declarations: [RegistrationComponent, LoginComponent, RegComponent, HomeComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  bootstrap:[RegComponent]
})
export class RegistrationModule { }
