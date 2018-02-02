import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule} from '@angular/http';

import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { ChartPage } from "../pages/chart/chart";
import { MorePage } from "../pages/more/more";
import { PracticePage } from "../pages/practice/practice";
import { SearchPage } from "../pages/search/search";

import { IpaService } from "../services/ipa";
import { DictionaryService } from "../services/dictionary";
import { SmartAudioProvider } from '../providers/smart-audio/smart-audio';
import { NativeAudio } from "@ionic-native/native-audio";

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    ChartPage,
    MorePage,
    PracticePage,
    SearchPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    ChartPage,
    MorePage,
    PracticePage,
    SearchPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    IpaService,
    DictionaryService,
    SmartAudioProvider,
    NativeAudio
  ]
})
export class AppModule {}
