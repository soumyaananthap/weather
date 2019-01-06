import { Injectable } from '@angular/core';
// import{Http} from '@angular/http';
import {HttpClient} from '@angular/common/http';
// import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey='fc0c4e1ec49d0c022df6519574a1a2ca';
  url;

  constructor(private http: HttpClient) {
    this.url = 'http://api.openweathermap.org/data/2.5/forecast?q=';
   }

  getWeather(city,code){
    return this.http.get(this.url+city+','+code+'&APPID='+this.apiKey)
    .pipe(map((res)=>{
      console.log(res);
    })
  )
  }
}
