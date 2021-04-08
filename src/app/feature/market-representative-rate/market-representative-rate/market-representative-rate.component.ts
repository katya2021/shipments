import { Component, OnInit } from '@angular/core';
import { TrmApiQuote } from 'trm-api';
import { MarketRepresentativeRateService } from '../service/market-representative-rate.service';

@Component({
  selector: 'app-market-representative-rate',
  templateUrl: './market-representative-rate.component.html',
  styleUrls: ['./market-representative-rate.component.scss']
})
export class MarketRepresentativeRateComponent implements OnInit {

  public marketRepresentativeRate: TrmApiQuote;

  constructor(private marketRepresentativeRateService: MarketRepresentativeRateService) { }

  public ngOnInit(): void {
    this.initData();
  }

  public async initData(): Promise<void> {
    this.marketRepresentativeRate = await this.marketRepresentativeRateService.getMarketRepresentativeRate();
  }
}
