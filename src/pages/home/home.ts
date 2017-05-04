import { Component, OnInit, Injectable } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Response }    from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { SettingService } from "../contact/setting.service";
import { NewsDataService } from "./newsdata.service";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
imageSource: string ='';
description: string = '';
news_title: string = '';
allSources = [];
newsObjects = [];
rawData = [];
newsData = [];
startIndex = 0;
index = 0;



errorMessage: string;
 constructor(public navCtrl: NavController, private _myService: SettingService, private _dataService: NewsDataService ) {

  }
 ngOnInit(): void {

   this._myService.setUserSettings(true, true, true, false, false);
  
   this._dataService.createGetUrls();
  
   
     this._dataService.getNewsData()
                            .subscribe(data => {for(this.startIndex = 0; this.startIndex < data.length; this.startIndex++){
     for(this.index = 0; this.index < data[this.startIndex].articles.length; this.index++){
       this.allSources.push(data[this.startIndex].articles[this.index])
     }
   }  console.log(this.allSources);},
                                       error => this.errorMessage = <any>error);

}

 printSettings(){


     this._dataService.getNewsData()
                            .subscribe(data => {for(this.startIndex = 0; this.startIndex < data.length; this.startIndex++){
     for(this.index = 0; this.index < data[this.startIndex].articles.length; this.index++){
       this.allSources.push(data[this.startIndex].articles[this.index])
     }
   } console.log(this.allSources);},
                                       error => this.errorMessage = <any>error);
   
   
   this.allSources = [];
   console.log("business: "+this._myService.business);
   console.log("entertainment: "+this._myService.entertainment);
   console.log("science: "+this._myService.science);
   console.log("technology: "+this._myService.technology);
   console.log("sports: "+this._myService.sports);

 }
}
