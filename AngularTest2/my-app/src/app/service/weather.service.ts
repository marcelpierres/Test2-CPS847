import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class WeatherService {

  data = [ 'Test1' , 'Test2' ];
  constructor(public http: HttpClient) {
    console.log('Data service is made');
  }

  getWeater() {
    this.http.get('http://api.wunderground.com/api/83a16c7369f768a0/conditions/q/CA/San_Francisco.json');
  }

  getData() {
    return this.data;
  }

}
