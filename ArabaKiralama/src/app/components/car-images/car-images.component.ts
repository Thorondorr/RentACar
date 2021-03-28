import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarImages } from 'src/app/models/car-images';
import { CarImagesService } from 'src/app/services/car-images.service';

@Component({
  selector: 'app-car-images',
  templateUrl: './car-images.component.html',
  styleUrls: ['./car-images.component.css'],
})
export class CarImagesComponent implements OnInit {
  carImages: CarImages[] = [];
  dataLoaded = false;

  constructor(
    private carImagesService: CarImagesService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getCarImagesByCarId(params['carId']);
      }
    });
  }

  getCarImagesByCarId(carId: number) {
    this.carImagesService.getCarImagesByCarId(carId).subscribe((response) => {
      this.carImages = response.data;
      this.dataLoaded = true;
    });
  }
}
