import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelComponent } from './hotel/hotel.component';
import { VegComponent } from './veg/veg.component';
import { NonvegComponent } from './nonveg/nonveg.component';
import { OfferComponent } from './offer/offer.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule ,Routes} from '@angular/router';
import { StarterComponent } from './starter/starter.component';
import { MenucourseComponent } from './menucourse/menucourse.component';
import { DessertsComponent } from './desserts/desserts.component';

let routes:Routes=[{path:'veg', component:VegComponent,
children:[{path:'starters',component:StarterComponent},
{path:'main',component:MenucourseComponent},
{path:'desserts',component:DessertsComponent}]},
{path:'nonveg', component:NonvegComponent},
{path:'offer', component:OfferComponent}
]

@NgModule({
  declarations: [HotelComponent, VegComponent, NonvegComponent, OfferComponent, StarterComponent, MenucourseComponent, DessertsComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap:[HotelComponent]
})
export class HotelModule { }
