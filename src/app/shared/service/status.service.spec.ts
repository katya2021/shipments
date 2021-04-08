import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { TestBed, fakeAsync, tick  } from '@angular/core/testing';
import { HttpService } from '@core/services/http/http.service';
import { environment } from 'src/environments/environment';

import { StatusService } from './status.service';

describe('StatusService', () => {
  let service: StatusService;
  let http: HttpTestingController;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [StatusService, HttpService]
    });
    service = TestBed.inject(StatusService);
    http = injector.inject(HttpTestingController);

  });

  it('#get Consume la lista de estados', fakeAsync(() => {
    service.get().then(() => {});
    tick();
    const request = http.expectOne(`${environment.apiUrl}/status`);

    expect(request.request.method).toEqual('GET');
  }));

  it('#save envia datos para la creacion de envios', fakeAsync(() => {
    service.save(null).then(() => {});
    tick();
    const request = http.expectOne(`${environment.apiUrl}/status`);

    expect(request.request.method).toEqual('POST');
  }));

  it('#delete edita de los envios', fakeAsync(() => {
    const id = '1';
    service.delete(id).then(() => {});

    tick();
    const request = http.expectOne(`${environment.apiUrl}/status/` + id);

    expect(request.request.method).toEqual('DELETE');
  }));
});
