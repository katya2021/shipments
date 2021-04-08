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
    // component.listTrackingShipment = {
    //   id: '5',
    //   weight: 16,
    //   price: 25,
    //   originAddress: '587 Pollich Estates',
    //   destinationAddress: '35477 Bauch Fords',
    //   createdAt: new Date('2021-03-27T10:12:10.597Z'),
    //   deliveryDate: new Date('2021-03-27T20:47:22.666Z'),
    //   updatedAt: new Date('2021-03-27T09:11:51.726Z'),
    //   tracking: [],
    //   note: 'note 5',
    //   description: 'description 5'
    // };

    expect(component).toBeTruthy();
  });
});
