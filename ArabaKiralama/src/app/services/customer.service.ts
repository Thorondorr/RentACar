import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  apiUrl = 'https://localhost:44325/api/customers/';
  newPath: string;

  constructor(private httpClient: HttpClient) {}

  getCustomers(): Observable<ListResponseModel<Customer>> {
    this.newPath = this.apiUrl + 'getall';
    return this.httpClient.get<ListResponseModel<Customer>>(this.newPath);
  }
  getCustomerByName(
    customer: Customer
  ): Observable<ListResponseModel<Customer>> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Token',
      }),
    };
    return this.httpClient.post<ListResponseModel<Customer>>(
      this.newPath,
      customer
    );
  }
}
