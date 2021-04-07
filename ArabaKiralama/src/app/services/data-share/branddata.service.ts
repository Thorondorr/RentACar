import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BranddataService {
  private brand = new BehaviorSubject<string>('');

  currentBrand = this.brand.asObservable();

  constructor() {}

  changeBrand(brand: string) {
    this.brand.next(brand);
  }
}
