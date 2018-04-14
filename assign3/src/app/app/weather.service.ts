import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class WeatherService {

  constructor(private http:HttpClient) { }

  getweather(){
    this.http.get('http://api.wunderground.com/api/83a16c7369f768a0/conditions/q/CA/San_Francisco.json');
  }
}
