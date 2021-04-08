import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import TrmApi, { TrmApiQuote } from 'trm-api';

@Injectable()
export class MarketRepresentativeRateService {

  private trmApi: TrmApi;

  constructor() {
    this.trmApi = new TrmApi(environment.trmToken);
  }

  public getMarketRepresentativeRate(): Promise<TrmApiQuote> {
    return this.trmApi.latest();
  }
}
