import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

export class NewsCategory {
  name: string;
  categoryList: [String];
}

const NEWS: NewsCategory[] = [
  { name: 'technology', categoryList:['ars-technica', 'engadget', 'hacker-news', 'mashable', 'recode', 'techchrunch', 'techradar'] },
  { name:'science', categoryList:['new-scientist']},
  { name: 'business', categoryList:['bloomberg','cnbc', 'business-insider', 'business-insider-uk', 'financial-times', 'the-economist']},
  { name: 'sports', categoryList: ['bbc-sport', 'espn', 'espn-cric-info', 'football-italia', 'nfl-news', 'the-sport-bible' ]},
  { name: 'entertainment', categoryList: ['entertainment-weekly', 'mtv-news', 'mtv-news-uk', 'daily-mail']}
];

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
