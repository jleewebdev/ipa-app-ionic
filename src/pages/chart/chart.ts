import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IpaService } from  "../../services/ipa";
import { SmartAudioProvider } from "../../providers/smart-audio/smart-audio";


@IonicPage()
@Component({
  selector: 'page-chart',
  templateUrl: 'chart.html',
})
export class ChartPage {

  alphabet = [];
  vowels = [];
  consonants = []

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private ipaService: IpaService,
              private smartAudio: SmartAudioProvider) {
    this.alphabet = this.ipaService.getAlphabet();
    this.vowels = this.ipaService.getVowels();
    this.consonants = this.ipaService.getConsonants();
  }


  playAudio(key) {
    // console.log(key)
    // this.smartAudio.play(key);
  }

}
