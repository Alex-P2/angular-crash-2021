import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TransactionEntryComponent } from './components/views/transaction-entry/transaction-entry.component';
import { CommoditiesComponent } from './components/views/master data/commodities/commodities.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NgZorroModule } from './ng-zorro/ng-zorro.module';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    TransactionEntryComponent,
    CommoditiesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    NgZorroModule,
    FormsModule
  ],
  entryComponents: [],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
