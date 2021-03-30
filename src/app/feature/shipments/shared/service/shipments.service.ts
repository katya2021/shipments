import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http/http.service';
import { environment } from 'src/environments/environment';
import { Shipments } from '../model/shipments';

@Injectable()
export class ShipmentsService {
  constructor(protected http: HttpService) { }

  public get() {
    return this.http.doGet<Shipments[]>(`${environment.apiUrl}/shipments`).toPromise();
  }

  public save(shipments: Shipments) {
    return this.http.doPost<Shipments, boolean>(`${environment.apiUrl}/shipments`, shipments).toPromise();
  }

  public update(shipments: Shipments) {
    return this.http.doPost<Shipments, boolean>(`${environment.apiUrl}/shipments`, shipments).toPromise();
  }

  public delete(id: Shipments) {
    return this.http.doPost<Shipments, boolean>(`${environment.apiUrl}/shipments`, id).toPromise();
  }
}
// descripcion: "katya"
// destinationAddress: "fesfe"
// note: "fdvfdsgrdgd"
// originAddress: "wdwfe"
// weight: 3424

// ------

// createdAt: "2021-03-27T13:52:26.523Z"
// deliveryDate: "2021-03-27T02:11:54.838Z"
// id: "1"
// price: 20
// tracking: []
// updatedAt: "2021-03-27T15:41:53.198Z"
