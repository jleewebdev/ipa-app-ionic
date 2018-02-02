import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Http } from '@angular/http';
import secrets from "../../secrets";
import * as x2js from "x2js";
import { IpaService } from  "../../services/ipa";
import { DictionaryService } from "../../services/dictionary"


@IonicPage()
@Component({
  selector: 'page-practice',
  templateUrl: 'practice.html',
})

export class PracticePage {
  baseURI: string;
  searchTerm: string;
  secrets: object;
  alphabet = [];
  correct = "false";

  word: string = "";
  pronunciations = [];
  def: string = "";
  sentence: string = "";
  audioFilePath: string = "";
  showAnswer = false;

  attempt: string = ""

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private http: Http,
              private ipaService: IpaService,
              private dictionaryService: DictionaryService,
              private toastController: ToastController) {

    this.alphabet = this.ipaService.getAlphabet()
  }

  fetchWord() {
    const word = this.dictionaryService.getRandomWord();
    this.word = word["word"].toLowerCase();
    this.pronunciations = word["pronunciations"]
      .split(",").map(function(ipa) {
        return ipa.trim().replace(/ˈ|ː|ˌ/g, "");
      })
    console.log(this.pronunciations)
  }


  addToAttempt(letter) {
    if (!this.showAnswer) {
      this.attempt += letter;
      console.log(this.attempt)      
    }
  }

  makeAttempt() {
    if (this.pronunciations.length > 0) {
      this.showAnswer = true;
      console.log(this.pronunciations);
      console.log(this.attempt.trim());
      console.log(this.pronunciations.includes(this.attempt.trim()));
      let correct = this.pronunciations.includes(this.attempt.trim());
      let message = correct ? "Correct" : "Wrong"
      this.correct = correct.toString();
      let toast = this.toastController.create({
        message: message,
        cssClass: correct ? "correct-attempt" : "wrong-attempt",
        duration: 2000
      })
      toast.present();
    }
  }

  newAttempt() {
    this.showAnswer = false;
    this.fetchWord();
    this.attempt = ""      
  }


  ionViewWillEnter() {
    if (this.word === "") {
      this.fetchWord();      
    }
  }


  removeLastEntry(){
    if (!this.showAnswer) {
      this.attempt = this.attempt.slice(0, -1);      
    }
  }

}
