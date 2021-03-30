import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './components/brand/brand.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CarComponent } from './components/car/car.component';
import { RentalComponent } from './components/rental/rental.component';
import { ColorComponent } from './components/color/color.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { RentalDetailComponent } from './components/rental-detail/rental-detail.component';
import { CarImagesComponent } from './components/car-images/car-images.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FilterPipeColorPipe } from './pipes/filter-pipe-color.pipe';
import { FilterPipeCarPipe } from './pipes/filter-pipe-car.pipe';
import { FilterPipeBrandPipe } from './pipes/filter-pipe-brand.pipe';

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
    CarImagesComponent,
    VatAddedPipe,
    FilterPipeColorPipe,
    FilterPipeCarPipe,
    FilterPipeBrandPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
