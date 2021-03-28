import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http/http.service';
import { environment } from 'src/environments/environment';
import { Shipments } from '../model/shipments';

@Injectable({
  providedIn: 'root'
})
export class ShipmentsService {

  constructor(protected http: HttpService) { }

  public consultar() {
    return this.http.doGet<Shipments[]>(`${environment.apiUrl}/shipments`).toPromise();
  }
}
