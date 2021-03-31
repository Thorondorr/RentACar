import { Pipe, PipeTransform } from '@angular/core';
import { CarDetail } from '../models/carDetail';

@Pipe({
  name: 'filterPipeColor',
})
export class FilterPipeColorPipe implements PipeTransform {
  transform(value: CarDetail[], filterText: string): CarDetail[] {
    filterText = filterText ? filterText.toLowerCase() : '';
    return filterText
      ? value.filter(
          (p: CarDetail) => p.color.toLowerCase().indexOf(filterText) !== -1
        )
      : value;
  }
}
