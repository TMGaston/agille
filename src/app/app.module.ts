import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NewsPage } from '../pages/news/news';
import { LoginPage } from '../pages/login/login';
import { GamesPage } from '../pages/games/games';
import { SettingsPage } from '../pages/settings/settings';
import { AboutGoldenGuineaPage } from '../pages/about-golden-guinea/about-golden-guinea';
import { AboutAgillantGroupPage } from '../pages/about-agillant-group/about-agillant-group';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
	NewsPage,
	LoginPage,
	GamesPage,
	SettingsPage,
	AboutGoldenGuineaPage,
	AboutAgillantGroupPage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
	NewsPage,
	LoginPage,
	GamesPage,
	SettingsPage,
	AboutGoldenGuineaPage,
	AboutAgillantGroupPage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
	InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
