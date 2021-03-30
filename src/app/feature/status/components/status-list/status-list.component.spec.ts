import { StatusService } from '@feature/status/shared/service/status.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusListComponent } from './status-list.component';
import { HttpService } from '@core/services/http/http.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('StatusListComponent', () => {
  let component: StatusListComponent;
  let fixture: ComponentFixture<StatusListComponent>;
  let statusService: StatusService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusListComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [StatusService, HttpService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusListComponent);
    statusService = TestBed.inject(StatusService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('#get  Se intenta listar usuarios ', async (done: DoneFn) => {
    // Arrange
    const spyInitData = spyOn(statusService, 'get').and.returnValue(Promise.resolve([]));
    // Act
    await component.initData();
    // Assert
    expect(spyInitData).toHaveBeenCalledTimes(1);
    expect(Array.isArray(component.listStatus)).toBeTruthy();
    done();
  });

});
