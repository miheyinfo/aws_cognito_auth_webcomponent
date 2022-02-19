import {Injector, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AmplifyAuthenticatorModule} from "@aws-amplify/ui-angular";
/* new form imports */
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import {createCustomElement} from "@angular/elements";

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
  //bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const register = createCustomElement(AppComponent,
      { injector: this.injector });
    customElements.define('aws-register-form', register);
  }
}
