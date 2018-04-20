import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {WeatherService} from '../service/weather.service';

@Component({
  selector: 'app-our-weather',
  templateUrl: './our-weather.component.html',
  styleUrls: ['./our-weather.component.css']
})
export class OurWeatherComponent implements OnInit {
  returnedJson:Object = "";
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get('http://api.wunderground.com/api/83a16c7369f768a0/conditions/q/CA/San_Francisco.json').subscribe(data =>{
      console.log(data);
      var strJson: string = JSON.stringify(data);
      var parsedJson = JSON.parse(strJson);
      this.returnedJson = parsedJson.current_observation.temp_c;

    });
  }

}
