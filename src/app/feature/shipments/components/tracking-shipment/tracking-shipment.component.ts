import { Component, Input, OnInit } from '@angular/core';
import { Shipments } from '@feature/shipments/shared/model/shipments';

@Component({
  selector: 'app-tracking-shipment',
  templateUrl: './tracking-shipment.component.html',
  styleUrls: ['./tracking-shipment.component.scss']
})
export class TrackingShipmentComponent implements OnInit {
  @Input()
  public listTrackingShipment: Shipments;

  constructor() { }

  ngOnInit(): void {
  }
}
