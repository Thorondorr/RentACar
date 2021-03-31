import { Pipe, PipeTransform } from '@angular/core';
import { CarDetail } from '../models/carDetail';

@Pipe({
  name: 'filterPipeCar',
})
export class FilterPipeCarPipe implements PipeTransform {
  transform(value: CarDetail[], filterText: string): CarDetail[] {
    return filterText
      ? value.filter((p: CarDetail) => p.id.toString() == filterText)
      : value;
  }
}
