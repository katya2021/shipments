import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketRepresentativeRateComponent } from './market-representative-rate/market-representative-rate.component';
import { MarketRepresentativeRateService } from './service/market-representative-rate.service';

@NgModule({
  declarations: [MarketRepresentativeRateComponent],
  imports: [
    CommonModule
  ],
  providers: [
    MarketRepresentativeRateService,
  ]
})
export class MarketRepresentativeRateModule { }
