import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RentalDetail } from '../models/rental-detail';
import { ResponseDataModel } from '../models/responseDataModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RentalDetailService {
  apiUrl = 'https://localhost:44325/api/rentals/getdetail';
  constructor(private httpClient: HttpClient) {}

  getRentalsDetail(): Observable<ResponseDataModel<RentalDetail>> {
    return this.httpClient.get<ResponseDataModel<RentalDetail>>(this.apiUrl);
  }
}
