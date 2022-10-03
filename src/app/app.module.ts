import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { initializeApp } from "firebase/app";

initializeApp({
  apiKey: "AIzaSyAdXk50qeDrMWrfFtkE2cac-8pGjApTb6I",
  authDomain: "notspring-b3320.firebaseapp.com",
  projectId: "notspring-b3320",
  storageBucket: "notspring-b3320.appspot.com",
  messagingSenderId: "973822013317",
  appId: "1:973822013317:web:34c064727d70694c719eec",
  measurementId: "G-623T1LVM4X"
});

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
