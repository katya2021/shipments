import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http/http.service';

import { ShipmentsService } from './shipments.service';

describe('ShipmentsService', () => {
  let service: ShipmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ShipmentsService, HttpService]
    });
    service = TestBed.inject(ShipmentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
