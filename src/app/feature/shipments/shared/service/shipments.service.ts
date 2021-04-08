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

  public delete(id: string) {
    return this.http.doDelete<Shipments>(`${environment.apiUrl}/shipments/${id}`).toPromise();
  }

  public getById(id: number) {
    return this.http.doGet<Shipments[]>(`${environment.apiUrl}/shipments/${id}`).toPromise();
  }
}
