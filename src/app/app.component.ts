import { Component } from '@angular/core';
import { OneSignal } from 'onesignal-ngx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'notspring-notification';

  constructor(private oneSignal: OneSignal) {
    this.oneSignal.init({
      appId: 'ab8a3207-b604-4ad5-b466-7884136a9e88',
    });
    this.oneSignal.on('subscriptionChange', function(isSubscribed) {
      console.log("The user's subscription state is now:", isSubscribed);
    });
  }

  onHandleTag(tag: string) {
    this.oneSignal.sendTag('tech', tag).then(() => {
      console.log('sent tag: ' + tag);
    });
  }
}
