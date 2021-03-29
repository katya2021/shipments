import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http/http.service';
import { environment } from 'src/environments/environment';
import { Status } from '../model/status';

@Injectable()
export class StatusService {

  constructor(protected http: HttpService) { }

  public consultar() {
    return this.http.doGet<Status[]>(`${environment.apiUrl}/status`).toPromise();
  }
}
