import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularLibModule } from '@ftc-biblioteca/angular-lib';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AngularLibModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
