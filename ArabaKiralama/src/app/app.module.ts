import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './components/brand/brand.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CarComponent } from './components/car/car.component';
import { RentalComponent } from './components/rental/rental.component';
import {ColorComponent} from './components/color/color.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { RentalDetailComponent } from './components/rental-detail/rental-detail.component';
import { CarImagesComponent } from './components/car-images/car-images.component';

@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    CustomerComponent,
    CarComponent,
    RentalComponent,
    ColorComponent,
    NavbarComponent,
    CarDetailComponent,
    RentalDetailComponent,
    CarImagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
