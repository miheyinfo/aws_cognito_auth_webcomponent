import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AmplifyAuthenticatorModule} from "@aws-amplify/ui-angular";
/* new form imports */
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AmplifyAuthenticatorModule,
    /* configuring form modules */
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
