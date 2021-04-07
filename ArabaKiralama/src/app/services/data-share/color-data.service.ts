import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ColorDataService {
  private color = new BehaviorSubject<string>('');

  currentMessage = this.color.asObservable();

  constructor() {}

  changeMessage(message: string) {
    this.color.next(message);
  }
}
