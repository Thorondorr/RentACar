import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RentalDetail } from '../models/rental-detail';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class RentalDetailService {
  apiUrl = 'https://localhost:44325/api/rentals/getdetail';
  constructor(private httpClient: HttpClient) {}

  getRentalsDetail(): Observable<ListResponseModel<RentalDetail>> {
    return this.httpClient.get<ListResponseModel<RentalDetail>>(this.apiUrl);
  }
}
