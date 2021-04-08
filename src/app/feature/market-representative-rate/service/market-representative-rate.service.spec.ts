import { TestBed } from '@angular/core/testing';

import { MarketRepresentativeRateService } from './market-representative-rate.service';

describe('MarketRepresentativeRateService', () => {
  let service: MarketRepresentativeRateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarketRepresentativeRateService]
    });
    service = TestBed.inject(MarketRepresentativeRateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
