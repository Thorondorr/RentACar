import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarImages } from 'src/app/models/car-images';
import { CarDetail } from 'src/app/models/carDetail';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarImagesService } from 'src/app/services/car-images.service';
import { CartService } from 'src/app/services/cart.service';
import { BranddataService } from 'src/app/services/data-share/branddata.service';
import { ColorDataService } from 'src/app/services/data-share/color-data.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
  carDetails: CarDetail[] = [];
  dataLoaded = false;
  currentCar: CarDetail;
  filterText: string;

  carImages: CarImages[] = [];

  deneme: string = 'mavi';
  brand: string = 'fako';

  constructor(
    private cardetailService: CarDetailService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private cartService: CartService,
    private colorData: ColorDataService,
    private brandData: BranddataService,
    private carImageService: CarImagesService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['colorId']) {
        this.getCarDetailByColor(params['colorId']);
      }
      if (params['id']) {
        this.getCarDetailByBrand(params['id']);
      } else {
        this.getCarDetail();
      }
    });
   this.colorData.currentMessage.subscribe((color) => (this.deneme = color));
    this.brandData.currentBrand.subscribe((brand) => (this.brand = brand));
  }
  getCarDetail() {
    this.cardetailService.getCardetails().subscribe((response) => {
      this.carDetails = response.data;
      this.dataLoaded = true;
    });
  }
  getCarDetailByBrand(id: number) {
    this.cardetailService.getCarDetailByBrand(id).subscribe((response) => {
      this.carDetails = response.data;
      this.dataLoaded = true;
    });
  }
  getCarDetailByColor(colorId: number) {
    this.cardetailService.getCarDetailByColor(colorId).subscribe((response) => {
      this.carDetails = response.data;
      this.dataLoaded = true;
    });
  }

  setCurrentBrand(car: CarDetail) {
    this.currentCar = car;
  }

  addToCart(car: CarDetail) {
    this.toastrService.success('sepete eklendi', car.brand);
    this.cartService.addToCart(car);
  }

  getCarImagesByCarId(car: CarDetail) {
    this.carImageService.getCarImagesByCarId(car.id).subscribe((response) => {
      this.carImages = response.data;
    });
  }

  getCarFirstImageByCarId(car: CarDetail) {
    this.getCarImagesByCarId(car);
    //return this.carImages;
    console.log(this.carImages);
  }

 log(a : any){
   console.log(a);
 }
}
