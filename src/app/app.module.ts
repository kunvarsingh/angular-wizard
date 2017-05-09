import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CustomerService,CampaignService } from './_services/index';
import { AppComponent } from './app.component';
import { FormWizardModule } from 'angular2-wizard';
import { AppConfig } from './app.config';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FormWizardModule
  ],
  providers: [
      CustomerService,
      CampaignService,
      AppConfig
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
