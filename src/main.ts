import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { ParentModule } from './app/parent/parent.module';
import { BowlerModule } from './app/bowler/bowler.module';
import { ShoppingModule } from './app/shopping/shopping.module';
import { EmployeeModule } from './app/employee/employee.module';
import { ClgModule } from './app/clg/clg.module';
import { ParkModule } from './app/park/park.module';
import { LampModule } from './app/lamp/lamp.module';
import { BankModule } from './app/bank/bank.module';
import { AnimalModule } from './app/animal/animal.module';
import { StudentModule } from './app/student/student.module';
import { FormModule } from './app/form/form.module';
import { TreeModule } from './app/tree/tree.module';
import { HotelModule } from './app/hotel/hotel.module';
import { TicketModule } from './app/ticket/ticket.module';
import { RegistrationModule } from './app/registration/registration.module';
import { InstallerModule } from './app/installer/installer.module';
import { GmailModule } from './app/gmail/gmail.module';
import { HospitalModule } from './app/hospital/hospital.module';
import { PartyModule } from './app/party/party.module';
import { TransportModule } from './app/transport/transport.module';
import { PracticeModule } from './app/practice/practice.module';



if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(PracticeModule)
  .catch(err => console.error(err));
