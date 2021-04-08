import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpService } from '@core/services/http/http.service';

import { ShipmentsService } from './shipments.service';
import { Shipments } from '../model/shipments';
import { environment } from 'src/environments/environment';

describe('ShipmentsService', () => {
  let service: ShipmentsService;
  let http: HttpTestingController;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ShipmentsService, HttpService],
    });
    service = TestBed.inject(ShipmentsService);
    http = injector.inject(HttpTestingController);
  });

  it('#get Consume la lista de envios', fakeAsync(() => {
    service.get().then(() => {});
    tick();
    const request = http.expectOne(`${environment.apiUrl}/shipments`);

    expect(request.request.method).toEqual('GET');
  }));

  it('#save envia datos para la creacion de envios', fakeAsync(() => {
    service.save(null).then(() => {});
    tick();
    const request = http.expectOne(`${environment.apiUrl}/shipments`);

    expect(request.request.method).toEqual('POST');
  }));

  it('#update edita de los envios', fakeAsync(() => {
    const shipments = {
      id: '1'
    };
    service.update(shipments as Shipments).then(() => {});

    tick();
    const request = http.expectOne(`${environment.apiUrl}/shipments/` + shipments.id);

    expect(request.request.method).toEqual('PUT');
  }));

  it('#delete edita de los envios', fakeAsync(() => {
    const id = '1';
    service.delete(id).then(() => {});

    tick();
    const request = http.expectOne(`${environment.apiUrl}/shipments/` + id);

    expect(request.request.method).toEqual('DELETE');
  }));

  it('#getById edita de los envios', fakeAsync(() => {
    const id = 1;
    service.getById(id).then(() => {});

    tick();
    const request = http.expectOne(`${environment.apiUrl}/shipments/` + id);

    expect(request.request.method).toEqual('GET');
  }));
});
