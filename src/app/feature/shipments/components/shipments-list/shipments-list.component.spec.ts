import { Shipments } from './../../shared/model/shipments';
import { FormControl } from '@angular/forms';
import { ShipmentsService } from '@feature/shipments/shared/service/shipments.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ShipmentsListComponent } from './shipments-list.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http/http.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StatusService } from '@shared/service/status.service';

describe('ShipmentsListComponent', () => {
  let component: ShipmentsListComponent;
  let fixture: ComponentFixture<ShipmentsListComponent>;
  let shipmentsService: ShipmentsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShipmentsListComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      providers: [ShipmentsService, HttpService, StatusService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentsListComponent);
    component = fixture.componentInstance;
    shipmentsService = TestBed.inject(ShipmentsService);
    fixture.detectChanges();
  });

  it('#initData  Se intenta listar envíos', async (done: DoneFn) => {
    // Arrange
    const spyInitData = spyOn(shipmentsService, 'get').and.returnValue(
      Promise.resolve([])
    );
    // Act
    await component.initData();
    // Assert
    expect(spyInitData).toHaveBeenCalledTimes(1);
    expect(Array.isArray(await component.listShipments)).toBeTruthy();
    done();
  });

  it('#deleteShipments  Se intenta elimina un envio', async (done: DoneFn) => {
    // Arrange
    const id = '1';
    const spyInitData = spyOn(shipmentsService, 'delete');
    // Act
    await component.deleteShipments(id);
    // Assert
    expect(spyInitData).toHaveBeenCalledTimes(1);
    done();
  });

  it('#invalidStatus  Se intenta ', async (done: DoneFn) => {
    // Arrange
    component.shipment = {
      id: '11',
      weight: 17,
      price: 98,
      originAddress: '884 Waelchi Glen',
      destinationAddress: '9425 Powlowski Drive',
      createdAt: new Date('2021-04-08T06:56:21.739Z'),
      deliveryDate: new Date('2021-04-07T22:45:37.499Z'),
      updatedAt: new Date('2021-04-07T21:19:03.202Z'),
      tracking: [
        {
          id: '3',
          name: 'Entregado',
          type: 'finalizado',
          createdAt: new Date('2021-04-09T04:58:46.465Z'),
        },
        {
          id: '10',
          name: 'Bodega Bogotá',
          type: 'Coordinator',
          createdAt: new Date('2021-04-09T04:59:26.989Z'),
        },
      ],
      note: 'note 11',
      description: 'description 11',
      currentStatus: {},
    };

    component.status = new FormControl({
      value: {
        id: '5',
        createdAt: new Date('2021-03-27T16:22:35.901Z'),
        name: 'Anulado',
        type: 'finalizado',
      },
    });

    // Act
    const result = component.invalidStatus();

    // Assert
    expect(result).toBeFalsy();
    done();
  });

  it('#update  Actualiza el listado en el listado de envios ', async (done: DoneFn) => {
    component.status.setValue('GG');
    const invalidStatus = spyOn(component, 'invalidStatus').and.returnValue(
      false
    );
    const spyShipmentsService = spyOn(shipmentsService, 'update');
    const spyInitData = spyOn(component, 'initData');
    component.shipment = {
      tracking: [
        {
          id: '3',
          name: 'Entregado',
          type: 'finalizado',
          createdAt: new Date('2021-04-09T04:58:46.465Z'),
        },
        {
          id: '10',
          name: 'Bodega Bogotá',
          type: 'Coordinator',
          createdAt: new Date('2021-04-09T04:59:26.989Z'),
        },
      ],
    } as Shipments;

    await component.update();

    expect(component.submitted).toBeUndefined();
    expect(invalidStatus).toHaveBeenCalled();
    expect(spyShipmentsService).toHaveBeenCalled();
    expect(spyInitData).toHaveBeenCalled();
    done();
  });
});
