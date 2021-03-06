import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { NewsPage } from '../pages/news/news';
import { LoginPage } from '../pages/login/login';
import { GamesPage } from '../pages/games/games';
import { SettingsPage } from '../pages/settings/settings';
import { AboutGoldenGuineaPage } from '../pages/about-golden-guinea/about-golden-guinea';
import { AboutAgillantGroupPage } from '../pages/about-agillant-group/about-agillant-group';
import { ListPage } from '../pages/list/list';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
	  { title: 'News', component: NewsPage },
      { title: 'Login', component: LoginPage },
	  { title: 'Games', component: GamesPage },
	  { title: 'Settings', component: SettingsPage },
	  { title: 'About Golden Guinea', component: AboutGoldenGuineaPage },
	  { title: 'About Agillant Group', component: AboutAgillantGroupPage },
	  { title: 'List', component: ListPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
