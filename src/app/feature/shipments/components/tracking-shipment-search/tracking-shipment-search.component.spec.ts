import { ShipmentsService } from './../../shared/service/shipments.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingShipmentSearchComponent } from './tracking-shipment-search.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http/http.service';

describe('TrackingShipmentSearchComponent', () => {
  let component: TrackingShipmentSearchComponent;
  let fixture: ComponentFixture<TrackingShipmentSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackingShipmentSearchComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [ShipmentsService, HttpService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackingShipmentSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
