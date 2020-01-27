import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GmailComponent } from './gmail/gmail.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { GmaildComponent } from './gmaild/gmaild.component';
import { InboxComponent } from './inbox/inbox.component';
import { OutboxComponent } from './outbox/outbox.component';
import { ComposeComponent } from './compose/compose.component';
import { RouterModule, Routes } from '@angular/router';
import { ComposedComponent } from './composed/composed.component';
import { InboxdComponent } from './inboxd/inboxd.component';
import { LogComponent } from './log/log.component';


let routes:Routes=[{path:'gmail', component:GmailComponent},
  {path:'gmaild', component:GmaildComponent},
{path:'inbox', component:InboxComponent,
children:[{path:'inboxd', component:InboxdComponent}]},
{path:'outbox', component:OutboxComponent},
{path:'compose', component:ComposeComponent,
children:[{path:'composed',component:ComposedComponent}]}
,{
  path:"**",redirectTo:''
}]


@NgModule({
  declarations: [GmailComponent, GmaildComponent, InboxComponent, OutboxComponent, ComposeComponent, ComposedComponent, InboxdComponent, LogComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap:[LogComponent]
})
export class GmailModule { }
