import { ShipmentsService } from '@feature/shipments/shared/service/shipments.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ShipmentsListComponent } from './shipments-list.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http/http.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ShipmentsListComponent', () => {
  let component: ShipmentsListComponent;
  let fixture: ComponentFixture<ShipmentsListComponent>;
  let shipmentsService: ShipmentsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipmentsListComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [ShipmentsService, HttpService]
    })
      .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentsListComponent);
    component = fixture.componentInstance;
    shipmentsService = TestBed.inject(ShipmentsService);
    fixture.detectChanges();
  });

  it('#get  Se intenta listar usuarios ', async (done: DoneFn) => {
    // Arrange
    const spyInitData = spyOn(shipmentsService, 'get').and.returnValue(Promise.resolve([]));
    // Act
    await component.initData();
    // Assert
    expect(spyInitData).toHaveBeenCalledTimes(1);
    expect(Array.isArray(component.listShipments)).toBeTruthy();
    done();
  });

});
