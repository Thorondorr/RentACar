import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarImages } from 'src/app/models/car-images';
import { CarDetail } from 'src/app/models/carDetail';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarImagesService } from 'src/app/services/car-images.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  carDetails:CarDetail[]=[];
  carImages: CarImages[]=[] ;
  dataLoaded = false;
  
  constructor(private carDetailService: CarDetailService,
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
  
}
