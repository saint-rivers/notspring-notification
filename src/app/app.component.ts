import { Component } from '@angular/core';
import { OneSignal } from 'onesignal-ngx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'notspring-notification';
  
  constructor(private oneSignal: OneSignal){
    
    this.oneSignal.init({
      appId: '4a113cf5-d9b9-4800-a361-6642f095b061'
    })
  }
}
