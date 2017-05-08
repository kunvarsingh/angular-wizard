import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CustomerService } from './_services/index';
import { AppComponent } from './app.component';
import { FormWizardModule } from 'angular2-wizard';
// import { MaterialModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FormWizardModule,
    // MaterialModule
  ],
  providers: [
      CustomerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
