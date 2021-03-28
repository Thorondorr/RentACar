import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarImagesComponent } from './components/car-images/car-images.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: CarDetailComponent },
  { path: 'cardetails', component: CarDetailComponent },
  { path: 'cardetails/brand/:id', component: CarDetailComponent },
  { path: 'cardetails/color/:colorId', component: CarDetailComponent },
  { path: 'carımages/car/:carId', component: CarImagesComponent },
  //{path,'carimages/color/:carId',component:CarImagesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
