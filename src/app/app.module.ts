import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NavComponent } from './components/nav/nav.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroModule } from './ng-zorro/ng-zorro.module';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ToolbarComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    NgZorroModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
