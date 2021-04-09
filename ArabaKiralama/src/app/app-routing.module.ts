import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarExtraDetailComponent } from './components/car-extra-detail/car-extra-detail.component';
import { CarImagesComponent } from './components/car-images/car-images.component';
import { PaymentComponent } from './components/payment/payment.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: CarDetailComponent },
  { path: 'cardetails', component: CarDetailComponent },
  { path: 'cardetails/brand/:id', component: CarDetailComponent },
  { path: 'cardetails/color/:colorId', component: CarDetailComponent },
  { path: 'carımages/car/:carId', component: CarImagesComponent },
  {path: 'carextras/:carId',component:CarExtraDetailComponent},
  { path :'payment/:carId',component:PaymentComponent},
  //{path,'carimages/color/:carId',component:CarImagesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
