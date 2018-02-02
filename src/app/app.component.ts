import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SmartAudioProvider } from "../providers/smart-audio/smart-audio";
import { IpaService } from "../services/ipa";
import secrets from "../secrets";

import { TabsPage } from '../pages/tabs/tabs';
@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, 
              statusBar: StatusBar, 
              splashScreen: SplashScreen,
              private smartAudio: SmartAudioProvider,
              private ipaService: IpaService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      // console.log("length")
      // console.log(this.ipaService.getAlphabet().length)

      // for(let i = 0; i < this.ipaService.getAlphabet().length; i++) {
      //     let key = this.ipaService.getAlphabet()[i];
      //     let path = "assets/audio/" + this.ipaService.getAlphabet()[i] +".mp3";
      //     console.log(key)
      //     console.log(path)
      //    smartAudio.preload(key, path)
      // }

      
    });
  }
}

