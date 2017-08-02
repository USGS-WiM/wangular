import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { WangularModule } from "app/wangular";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [  BrowserModule, WangularModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
