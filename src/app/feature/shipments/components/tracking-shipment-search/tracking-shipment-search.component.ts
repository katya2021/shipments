import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ShipmentsService } from '@feature/shipments/shared/service/shipments.service';

@Component({
  selector: 'app-tracking-shipment-search',
  templateUrl: './tracking-shipment-search.component.html',
  styleUrls: ['./tracking-shipment-search.component.scss']
})
export class TrackingShipmentSearchComponent implements OnInit {
  public shipmentsForm: FormGroup;
  public ShipmentDetailById: {};
  public listTrackingShipment: [];

  constructor(
    private router: Router,
    protected shipmentsServices: ShipmentsService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  public async search() {
    this.ShipmentDetailById = await this.shipmentsServices.getById(this.shipmentsForm.value.codigo);
  }

  private initForm() {
    this.shipmentsForm = new FormGroup({
      codigo: new FormControl(),
    });
  }

  public redirect() {
    this.router.navigate(['/trm']);
  }

}
