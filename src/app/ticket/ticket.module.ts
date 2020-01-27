import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketComponent } from './ticket/ticket.component';
import { OfferComponent } from './offer/offer.component';
import { BusComponent } from './bus/bus.component';
import { HotelComponent } from './hotel/hotel.component';
import { BrowserModule } from '@angular/platform-browser';
import { PrivateBusComponent } from './private-bus/private-bus.component';
import { GovBusComponent } from './gov-bus/gov-bus.component';
import { RouterModule, Routes } from '@angular/router';
import { LocComponent } from './loc/loc.component';

let routes:Routes=[{path:'bus',component:BusComponent,
children:[{path:'pvt', component:PrivateBusComponent},
{path:'govt',component:GovBusComponent}]},
{path:'hotel',component:HotelComponent,
children:[{path:'loc',component:LocComponent}]},
{path:'offer',component:OfferComponent}]




@NgModule({
  declarations: [TicketComponent, OfferComponent, BusComponent, HotelComponent,  PrivateBusComponent, GovBusComponent, LocComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap:[TicketComponent]
})
export class TicketModule { }
