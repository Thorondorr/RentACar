import { Pipe, PipeTransform } from '@angular/core';
import { CarDetail } from '../models/carDetail';

@Pipe({
  name: 'filterPipeBrand',
})
export class FilterPipeBrandPipe implements PipeTransform {
  transform(value: CarDetail[], filterText: string): CarDetail[] {
    filterText = filterText ? filterText.toLowerCase() : '';
    return filterText
      ? value.filter(
          (p: CarDetail) => p.brand.toLowerCase().indexOf(filterText) !== -1
        )
      : value;
  }
}
