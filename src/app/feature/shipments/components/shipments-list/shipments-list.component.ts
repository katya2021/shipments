import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Shipments } from '@feature/shipments/shared/model/shipments';
import { ShipmentsService } from '@feature/shipments/shared/service/shipments.service';
import { Status } from '@shared/model/status';
import { StatusService } from '@shared/service/status.service';

@Component({
  selector: 'app-shipments-list',
  templateUrl: './shipments-list.component.html',
  styleUrls: ['./shipments-list.component.scss']
})
export class ShipmentsListComponent implements OnInit {

  public listShipments: Promise<Shipments[]>;
  public listStatus: Promise<Status[]>;
  public shipment: Shipments;
  public status: FormControl;
  public showModal: boolean;
  public submitted: boolean;

  constructor(protected shipmentsService: ShipmentsService, private statusService: StatusService) { }

  public ngOnInit(): void {
    this.initData();
    this.initForm();
  }

  public initData(): void {
    this.listShipments = this.shipmentsService.get();
    this.listStatus = this.statusService.get();
  }

  public initForm(): void {
    this.status = new FormControl(null, [Validators.required]);
  }

  public async update() {
    if (!this.status.valid) {
      this.submitted = true;
      return;
    }

    if (this.invalidStatus()) {
      alert('El estado fue previamente registrado');
      return;
    }

    this.shipment.tracking.push({
      id: this.status.value?.id,
      name: this.status.value?.name,
      type: this.status.value?.type,
      createdAt: new Date(),
    });

    await this.shipmentsService.update(this.shipment);
    this.initData();
    this.showModal = false;
  }

  public showStatusModal(item: Shipments) {
    this.shipment = item;
    this.showModal = true;
  }

  public async deleteShipments(id: string) {
    await this.shipmentsService.delete(id);
    this.initData();
    alert('Se ha eliminado correctamente');
  }

  public invalidStatus(): boolean {
    return this.shipment.tracking.findIndex(status => this.status.value.id === status.id) > -1;
  }
}
