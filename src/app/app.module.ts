import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {HttpModule}    from '@angular/http';

import {PhoneDetailsComponent} from './Components/phone-details.component';
import {AppComponent} from './app.component';
import {PhoneListComponent} from './Components/phone-list.component';
import {AppRoutingModule}     from './app-routing.module';
import {PhoneService} from './Services/Phone.service';
import {Checkmark} from './Pipes/Checkmark.pipe';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    PhoneListComponent,
    PhoneDetailsComponent,
    Checkmark
  ],
  providers: [PhoneService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
