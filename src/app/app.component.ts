import { Component, OnInit } from '@angular/core';
// import { initializeApp } from 'firebase/app'
import { getMessaging, getToken, onMessage } from "firebase/messaging";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'notspring-notification';
  message: any = null
  ngOnInit(): void {
    this.requestPermission();
    this.listen();
  }
  // firebaseConfig = {
  //   apiKey: "AIzaSyAdXk50qeDrMWrfFtkE2cac-8pGjApTb6I",
  //   authDomain: "notspring-b3320.firebaseapp.com",
  //   projectId: "notspring-b3320",
  //   storageBucket: "notspring-b3320.appspot.com",
  //   messagingSenderId: "973822013317",
  //   appId: "1:973822013317:web:34c064727d70694c719eec",
  //   measurementId: "G-623T1LVM4X"
  // };

  // app = initializeApp(this.firebaseConfig);


  requestPermission() {
    const messaging = getMessaging();
    getToken(messaging,
      { vapidKey: "BOWZXQ9hJbOJMPVML3TcF_QXL7hpDeLHEwjxAkSnYEtunCHj-TROyhtH4GPsGAvo4QRfMqI0bReJO37pu9QtUPM" }
    ).then((currentToken) => {
      console.log(currentToken);
    })
  }

  listen() {
    const messaging = getMessaging();
    onMessage(messaging, (payload) => {
      console.log('Message received. ', payload);
      this.message = payload;
    });
  }

  onHandleTag(tag: string) {
  }
}
