import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from '../models/carDetail';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  apiUrl = 'https://localhost:44325/api/rentals/';
  newPath: string;

  constructor(private httpClient: HttpClient) {}

  getRentals(): Observable<ListResponseModel<Rental>> {
    this.newPath = this.apiUrl + 'getall';
    return this.httpClient.get<ListResponseModel<Rental>>(this.newPath);
  }

  addRentals(rental: Rental): Observable<ListResponseModel<Rental>> {
    this.newPath = this.apiUrl + 'add';
    return this.httpClient.post<ListResponseModel<Rental>>(
      this.newPath,
      rental
    );
  }

  getRentalByCarId(carId: number): Observable<ListResponseModel<Rental>> {
    // let newPath = this.apiUrl + 'carImages/getbycar?carId=' + carId;

    let newPath = this.apiUrl + 'getbycarid?carId=' + carId;
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }

  checkDateIsValid(rental: Rental) {
    this.newPath = this.apiUrl + 'checkdateisvalid';
    return this.httpClient.post<ListResponseModel<Rental>>(
      this.newPath,
      rental
    );
  }
}
