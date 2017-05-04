import { Injectable, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { SettingService } from "../contact/setting.service";
import {Observable} from 'rxjs/Rx';
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";
import 'rxjs/add/observable/forkJoin';

@Injectable()
export class NewsDataService {
        urls: string[];
        newUrl: string;

    private _apiKey = 'e62b7cc667824fa781e9ec4cae6d86bf';
    private _startIndex = 0;
    private myURLs: string[] =[];
    private _url: string = 'https://newsapi.org/v1/articles?source=ars-technica&sortBy=top&apiKey=e62b7cc667824fa781e9ec4cae6d86bf';
    private _allUrls: string[] = [];
   
    constructor(private _myService: SettingService, private _http: Http){

    }
    newsSettings:  any[] = [];

     ngOnInit(): void {
  

     }

    createGetUrls(): string[] {

        /**
         * technology
         * science
         * sports
         * business
         * entertainment
         */
            this._allUrls = [];
            this.newsSettings = this._myService.getUserSettings();
            if(this.newsSettings[0] == true){
                this.newUrl = 'https://newsapi.org/v1/articles?source=ars-technica&apiKey='+this._apiKey;
                this._allUrls.push(this.newUrl);
            }

             if(this.newsSettings[1] == true){
                this.newUrl = 'https://newsapi.org/v1/articles?source=new-scientist&apiKey='+this._apiKey;
                this._allUrls.push(this.newUrl);
            }

             if(this.newsSettings[2] == true){
                this.newUrl = 'https://newsapi.org/v1/articles?source=bbc-sport&apiKey='+this._apiKey;
                this._allUrls.push(this.newUrl);
            }

             if(this.newsSettings[3] == true){
                this.newUrl = 'https://newsapi.org/v1/articles?source=bloomberg&apiKey='+this._apiKey;
                this._allUrls.push(this.newUrl);
            }

             if(this.newsSettings[4] == true){
                this.newUrl = 'https://newsapi.org/v1/articles?source=entertainment-weekly&apiKey='+this._apiKey;
                this._allUrls.push(this.newUrl);
            }
            
            return this._allUrls;
    }



     getNewsData(): Observable<any> {
        this.myURLs = this.createGetUrls();

         return Observable.forkJoin(
            this.myURLs.map(
                i => this._http.get(i)
               .map((response: Response) => response.json())
               .catch(this.handleError))
               
        );
  
    }

    handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'server error');
    }

}
