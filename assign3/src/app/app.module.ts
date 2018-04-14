import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
//Router module is responsible for navigation, Routes is the list of places to navigate too
import { RouterModule, Routes} from '@angular/router';


import { AppComponent } from './app.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { OurCustomersComponent } from './components/our-customers/our-customers.component';



@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    OurServicesComponent,
    OurCustomersComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      //each of these is an object
      {path:'about-us', component:AboutUsComponent},
      {path:'our-customers', component:OurCustomersComponent},
      {path:'our-services', component:OurServicesComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
