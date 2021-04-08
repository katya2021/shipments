import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingShipmentComponent } from './tracking-shipment.component';

describe('TrackingShipmentComponent', () => {
  let component: TrackingShipmentComponent;
  let fixture: ComponentFixture<TrackingShipmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackingShipmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackingShipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
