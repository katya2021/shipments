import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentsCreateComponent } from './shipments-create.component';

describe('ShipmentsCreateComponent', () => {
  let component: ShipmentsCreateComponent;
  let fixture: ComponentFixture<ShipmentsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipmentsCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
