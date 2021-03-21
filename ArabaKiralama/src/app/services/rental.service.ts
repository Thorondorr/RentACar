import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentaltResponseModel } from '../models/rentalResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl = "https://localhost:44325/api/rentals/getall";

  constructor(private httpClient: HttpClient) { }


  getRentals():Observable<RentaltResponseModel> {
   return this.httpClient
      .get<RentaltResponseModel>(this.apiUrl);
  }
}
