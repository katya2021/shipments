import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MarketRepresentativeRateComponent } from './market-representative-rate.component';
import { MarketRepresentativeRateService } from '../service/market-representative-rate.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('MarketRepresentativeRateComponent', () => {
  let component: MarketRepresentativeRateComponent;
  let fixture: ComponentFixture<MarketRepresentativeRateComponent>;
  let marketRepresentativeRateService: MarketRepresentativeRateService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketRepresentativeRateComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [MarketRepresentativeRateService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketRepresentativeRateComponent);
    component = fixture.componentInstance;
    marketRepresentativeRateService = TestBed.inject(MarketRepresentativeRateService);
    fixture.detectChanges();
  });

  it('#getMarketRepresentativeRate  Se intenta consultar el TRM actual', async (done: DoneFn) => {
    // Arrange
    const spyInitData = spyOn(marketRepresentativeRateService, 'getMarketRepresentativeRate');

    // Act
    await component.initData();

    // Assert
    expect(spyInitData).toHaveBeenCalledTimes(1);
    done();
  });
});
