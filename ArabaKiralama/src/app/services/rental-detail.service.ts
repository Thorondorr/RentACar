import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RentalDetail } from '../models/rental-detail';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';

@Injectable({
  providedIn: 'root',
})
export class RentalDetailService {
  apiUrl = 'https://localhost:44325/api/rentals/';
  newPath:string;
  constructor(private httpClient: HttpClient) {}

  getRentalsDetail(): Observable<ListResponseModel<RentalDetail>> {
    this.newPath=this.apiUrl +"getdetail"
    return this.httpClient.get<ListResponseModel<RentalDetail>>(this.newPath);
  }
  postRentalData(rental:Rental): Observable<ListResponseModel<RentalDetail>>{
    this.newPath = this.apiUrl + "add";
    return this.httpClient.post<ListResponseModel<RentalDetail>>(this.newPath,rental);
  }
}
