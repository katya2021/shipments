import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http/http.service';
import { ShipmentsService } from '@feature/shipments/shared/service/shipments.service';

import { ShipmentsCreateComponent } from './shipments-create.component';


describe('ShipmentsCreateComponent', () => {
  let component: ShipmentsCreateComponent;
  let fixture: ComponentFixture<ShipmentsCreateComponent>;
  let shipmentsService: ShipmentsService;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipmentsCreateComponent ],
      providers: [ShipmentsService, HttpService],
      imports: [RouterTestingModule, HttpClientTestingModule]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentsCreateComponent);
    component = fixture.componentInstance;
    shipmentsService = TestBed.inject(ShipmentsService);
    router = TestBed.inject(Router);
    spyOn(router, 'navigate').and.callThrough();
    fixture.detectChanges();
  });

  it('#create Se intenta enviar datos pero el formulario es invalido', (done: DoneFn) => {
    // Arrange
    component.shipmentsForm.get('descripcion')?.setValue('');
    component.shipmentsForm.get('originAddress')?.setValue('');
    component.shipmentsForm.get('destinationAddress')?.setValue('');
    component.shipmentsForm.get('weight')?.setValue('');
    component.shipmentsForm.get('note')?.setValue('');
    const spySave = spyOn(shipmentsService, 'save');

    // Act
    component.create();

    // Assert
    expect(spySave).not.toHaveBeenCalled();
    done();
  });

  it('#create Se envian datos', (done: DoneFn) => {
    // Arrange
    component.shipmentsForm.get('descripcion')?.setValue('Carga delicada');
    component.shipmentsForm.get('originAddress')?.setValue('cartagena');
    component.shipmentsForm.get('destinationAddress')?.setValue('medellin');
    component.shipmentsForm.get('weight')?.setValue('10');
    component.shipmentsForm.get('note')?.setValue('computdora DELL');
    const spySave = spyOn(shipmentsService, 'save');

    // Act
    component.create();

    // Assert
    expect(spySave).toHaveBeenCalled();
    done();
  });
});
