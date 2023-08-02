import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CheckableComponent } from './components/modals/checkable/checkable.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [AppComponent, CalendarComponent, CheckableComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
