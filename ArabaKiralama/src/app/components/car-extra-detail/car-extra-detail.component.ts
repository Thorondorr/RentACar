import { Component, OnInit } from '@angular/core';
import { CarImages } from 'src/app/models/car-images';
import { CarDetail } from 'src/app/models/carDetail';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarImagesService } from 'src/app/services/car-images.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';
import { BranddataService } from 'src/app/services/data-share/branddata.service';
import { ColorDataService } from 'src/app/services/data-share/color-data.service';
import {FormGroup, FormControl} from '@angular/forms';
import { Rental } from 'src/app/models/rental';


@Component({
  selector: 'app-car-extra-detail',
  templateUrl: './car-extra-detail.component.html',
  styleUrls: ['./car-extra-detail.component.css'],
 
})
export class CarExtraDetailComponent implements OnInit {

  carDetails:CarDetail[]=[];
  carImages: CarImages[]=[] ;
  rental:Rental;
  dataLoaded = false;
  
  constructor(
    private carDetailService: CarDetailService,
    private carImagesService : CarImagesService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
   this.activatedRoute.params.subscribe((params)=>{
     if(params['carId']){
      this.getCarDetailById(params['carId']);
      this.getCarImagesByCarId(params['carId']);
     }

   });
   
  }
  getCarDetailById(carId:number){
    this.carDetailService.getCardetailsById(carId).subscribe((response)=>{
      this.carDetails=response.data;
      this.dataLoaded=true;
      console.log(this.carDetails);
    })
  }

  getCarImagesByCarId(carId: number) {
    this.carImagesService.getCarImagesByCarId(carId).subscribe((response) => {
      this.carImages = response.data;
      this.dataLoaded = true;
      console.log(this.carImages);
    });
  }

  onButtonClicked(){

    console.log("sa chat")

    this.rental.carId=this.carDetails[0].id;
    

    /*
      "carId": 1,
    "customerId": 1,
    "rentDate": "2021-07-11T00:00:00",
    "returnDate": "2021-09-13T00:00:00"


    */


  }

  
  
}
