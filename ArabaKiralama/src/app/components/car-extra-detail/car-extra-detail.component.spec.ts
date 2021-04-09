import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarExtraDetailComponent } from './car-extra-detail.component';

describe('CarExtraDetailComponent', () => {
  let component: CarExtraDetailComponent;
  let fixture: ComponentFixture<CarExtraDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarExtraDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarExtraDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
