import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ChartPage } from "../chart/chart";
import { MorePage } from "../more/more";
import { PracticePage } from "../practice/practice";
import { SearchPage } from "../search/search";

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  
  chartPage = ChartPage;
  morePage = MorePage;
  practicePage = PracticePage;
  searchPage = SearchPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
