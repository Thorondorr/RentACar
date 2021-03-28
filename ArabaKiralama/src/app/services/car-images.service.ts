import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImages } from '../models/car-images';
import { CarDetail } from '../models/carDetail';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarImagesService {
  apiUrl = 'https://localhost:44325/api/';
  constructor(private httpClient: HttpClient) {}

  getCarImagesByCarId(carId: number): Observable<ListResponseModel<CarImages>> {
    let newPath = this.apiUrl + 'carImages/getbycar?carId=' + carId;
    return this.httpClient.get<ListResponseModel<CarImages>>(newPath);
  }
}
