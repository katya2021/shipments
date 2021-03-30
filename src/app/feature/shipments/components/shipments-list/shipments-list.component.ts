import { Component, OnInit } from '@angular/core';
import { Shipments } from '@feature/shipments/shared/model/shipments';
import { ShipmentsService } from '@feature/shipments/shared/service/shipments.service';

@Component({
  selector: 'app-shipments-list',
  templateUrl: './shipments-list.component.html',
  styleUrls: ['./shipments-list.component.scss']
})
export class ShipmentsListComponent implements OnInit {

  public listShipments: Shipments[];

  constructor(protected shipmentsService: ShipmentsService) { }

  public ngOnInit(): void {
    this.initData();
  }

  public async initData(): Promise<void> {
    this.listShipments = await this.shipmentsService.get();
  }
}
