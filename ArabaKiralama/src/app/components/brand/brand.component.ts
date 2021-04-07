import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';
import { BranddataService } from 'src/app/services/data-share/branddata.service';
import { ColorDataService } from 'src/app/services/data-share/color-data.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
})
export class BrandComponent implements OnInit {
  brands: Brand[] = [];
  currentBrand: Brand; //strictproperty =false
  dataLoaded = false;
  constructor(
    private brandService: BrandService,
    private brandData: BranddataService
  ) {}

  ngOnInit(): void {
    this.getBrand();
  }

  getBrand() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
      this.dataLoaded = true;
    });
  }

  setCurrentBrand(brand: Brand) {
    this.currentBrand = brand;
  }

  getCurrentBrandClass(brand: Brand) {
    if (brand == this.currentBrand) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }

  getAllBrandClass() {
    if (!this.currentBrand) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }
  onBrandChange() {
    if (this.currentBrand) {
      this.brandData.changeBrand(this.currentBrand.brands);
    }

    this.brandData.currentBrand.subscribe(
      brand => (this.currentBrand.brands=brand)
    )

  }
}
