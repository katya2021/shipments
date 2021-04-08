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

  public listShipments: Shipments[];
  public listStatus: Promise<Status[]>;

  constructor(protected shipmentsService: ShipmentsService, private statusService: StatusService) { }

  public ngOnInit(): void {
    this.initData();
    this. getStatus();
  }

  public async initData(): Promise<void> {
    this.listShipments = await this.shipmentsService.get();
  }

  public update(id: string) {
    console.log(id);
  }

  public deleteShipments(id: string) {
    this.shipmentsService.delete(id);
  }

  public getStatus() {
  this.listStatus = this.statusService.get();
  }
}
