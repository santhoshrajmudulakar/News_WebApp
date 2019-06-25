import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

import { environment  } from "../../environments/environment";

const API_URL = environment.apiUrl;


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http:Http) { }

  getSources(){
      return this.http.get(API_URL + 'sources?apiKey=230a1b6323504125ba693f7bd2524f7b')
          .map(res => res.json());
  }

  newsFeed(id : any){
    return this.http.get(API_URL + 'everything?sources='+id+'&apiKey=230a1b6323504125ba693f7bd2524f7b')
    .map(res => res.json());
  }


}
