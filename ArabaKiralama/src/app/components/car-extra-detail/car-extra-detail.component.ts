import { Component, OnInit } from '@angular/core';
import { CarImages } from 'src/app/models/car-images';
import { CarDetail } from 'src/app/models/carDetail';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarImagesService } from 'src/app/services/car-images.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';
import { BranddataService } from 'src/app/services/data-share/branddata.service';
import { ColorDataService } from 'src/app/services/data-share/color-data.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Rental } from 'src/app/models/rental';
import { RentalService } from 'src/app/services/rental.service';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/models/customer';
import { empty } from 'rxjs';
import { isThisTypeNode } from 'typescript';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-car-extra-detail',
  templateUrl: './car-extra-detail.component.html',
  styleUrls: ['./car-extra-detail.component.css'],
})
export class CarExtraDetailComponent implements OnInit {
  carDetails: CarDetail[] = [];
  carImages: CarImages[] = [];
  rentals: Rental[] = [];
  dataLoaded = false;

  directToPayment = false;

  constructor(
    private carDetailService: CarDetailService,
    private carImagesService: CarImagesService,
    private rentalSErvice: RentalService,
    private customerService: CustomerService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getCarDetailById(params['carId']);
        this.getCarImagesByCarId(params['carId']);
        this.getRentalByCarId(params['carId']);
      }
    });
  }
  getCarDetailById(carId: number) {
    this.carDetailService.getCardetailsById(carId).subscribe((response) => {
      this.carDetails = response.data;
      this.dataLoaded = true;
    });
  }

  getCarImagesByCarId(carId: number) {
    this.carImagesService.getCarImagesByCarId(carId).subscribe((response) => {
      this.carImages = response.data;
      this.dataLoaded = true;
    });
  }

  getCustomerByCustomerName(customer: Customer) {
    this.customerService.getCustomerByName(customer).subscribe((response) => {
      return response.data;
    });
  }

  getRentalByCarId(carId: number) {
    this.rentalSErvice.getRentalByCarId(carId).subscribe((response) => {
      this.rentals = response.data;
      this.dataLoaded = true;
    });
  }

  async checkDate(rentDate: any, returnDate: any, callback: any) {
    let myPromise = new Promise(function (myResolve, myReject) {});
    let rental = this.getRentalByCarId(1);
  }

  async onButtonClicked(rentDay: any, returnDate: any) {
    console.log('buttonClick inside');
    this.checkCarCanBeRent(1, rentDay, returnDate);

    console.log(
      new Date(rentDay).toISOString(),
      new Date(returnDate).toISOString()
    );
  }

  async checkCarCanBeRent(id: number, rentDate: any, returnDate: any) {
    let rental: Rental;
    let myPromise = new Promise((myResolve, myReject) => {
      this.rentalSErvice.getRentals().subscribe((response) => {
        rental = response.data.filter((r: Rental) => r.carId == id).pop(); //slice ile arrayı kopyalayıp tekrar pop() kullanılabilir.her iki fonksyonda başarısız olursa undefined döner
        if (response.succes == true) {
          myResolve(rental);
        } else {
          myResolve('Bir hata ile karşılaşıldı');
        }
      });
    });

    myPromise.then((value) => {
      console.log(rental);
      if (rental.returnDate < returnDate) {
        console.log('kiralanabilir');
        this.router.navigate(['payment/' + rental.carId]);
      } else {
        console.log('kiralanamaz');
      }
    });
  }

  eventCheck(event: any) {
    console.log(event);
  }
}
//arabanın ıdsine göre kiralanan tarihleri çağır
//alınan tarihte kiralanmışsa bu araba müsait değil mesaji çıkra
//müsaitse payment component çağır
//nesne gönderiyorsan post metodu ile göndermen gerek
