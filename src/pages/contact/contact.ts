import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { FormsModule } from '@angular/forms'
import { SettingService } from "./setting.service";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  topRecentPopularButton = {
    value: ''
  };
  val: string;
  technology: boolean = false;
  science: boolean = false;
  sports: boolean = false;
  business: boolean = false;
  entertainment: boolean = false;
  topRecentPopularValue: string = 'top';

  constructor(public navCtrl: NavController, private _mySettingService: SettingService) {

  }

  ngOnInit() {

  }

  selectedCategories(input) {
    if (input.science) {
      this.science = true;
    }

    if (input.technology) {
      this.technology = true;
    }

    if (input.sports) {
      this.sports = true;
    }

    if (input.business) {
      this.business = true;
    }

    if (input.entertainment) {
      this.entertainment = true;
    }

    this._mySettingService.setUserSettings(this.technology, this.science, this.sports, this.business, this.entertainment);

  }

}
