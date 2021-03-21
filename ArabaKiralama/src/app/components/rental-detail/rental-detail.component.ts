import { Component, OnInit } from '@angular/core';
import { RentalDetail } from 'src/app/models/rental-detail';
import { RentalDetailService } from 'src/app/services/rental-detail.service';

@Component({
  selector: 'app-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.css'],
})
export class RentalDetailComponent implements OnInit {
  rentalDetails: RentalDetail[] = [];
  data_loaded = false;

  constructor(private rentaldetailService: RentalDetailService) {}

  ngOnInit(): void {
    this.getRentalDetail();
  }

  getRentalDetail() {
    this.rentaldetailService.getRentalsDetail().subscribe((response) => {
      this.rentalDetails = response.data;
      this.data_loaded = true;
    });
  }
}
