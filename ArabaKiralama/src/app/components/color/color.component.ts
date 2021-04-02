import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';
import { Color } from 'src/app/models/color';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { ColorService } from 'src/app/services/color.service';
import { ColorDataService } from 'src/app/services/data-share/color-data.service';
import { CarDetailComponent } from '../car-detail/car-detail.component';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent implements OnInit {
  colors: Color[] = [];
  dataLoaded = false;
  currentColor: Color;

  cars: CarDetail[] = [];

  currentStr: string = 'fakasdasdasd1!';
  constructor(
    private colorService: ColorService,
    private carDetailService: CarDetailService,
    private colorData: ColorDataService
  ) {}

  ngOnInit(): void {
    this.getColors();
    this.getCars();
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
      this.dataLoaded = true;
    });
  }

  getCars() {
    this.carDetailService.getCardetails().subscribe((response) => {
      this.cars = response.data;
    });
  }

  setCurrentColor(color: Color) {
    this.currentColor = color;
  }

  getCurrentBrandClass(color: Color) {
    if (color == this.currentColor) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }

  getAllBrandClass() {
    if (!this.currentColor) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }

  getColor() {
    console.log(this.currentColor);
    if (this.currentColor) {
      this.colorData.changeMessage(this.currentColor.colors);
    }

    this.colorData.currentMessage.subscribe(
      (color) => (this.currentStr = color)
    );

    console.log(this.currentStr);
  }
}
