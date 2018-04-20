import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes} from '@angular/router';


import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { OurCustomersComponent } from './our-customers/our-customers.component';
import {WeatherService} from './service/weather.service';
import { OurWeatherComponent } from './our-weather/our-weather.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    OurServicesComponent,
    OurCustomersComponent,
    OurWeatherComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'about-us', component: AboutUsComponent},
      {path: 'our-customers', component: OurCustomersComponent},
      {path: 'our-services', component: OurServicesComponent}
    ])
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
