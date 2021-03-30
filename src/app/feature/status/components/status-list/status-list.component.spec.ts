import { StatusService } from '@feature/status/shared/service/status.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusListComponent } from './status-list.component';
import { HttpService } from '@core/services/http/http.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('StatusListComponent', () => {
  let component: StatusListComponent;
  let fixture: ComponentFixture<StatusListComponent>;
  // let statusServicio: StatusService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusListComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [StatusService, HttpService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusListComponent);
    // statusServicio = TestBed.inject(StatusService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('#listarUsuarios  Se intenta listar usuarios ', (done: DoneFn) => {
  //   // Arrange
  //   const spyListStatus = spyOn(statusServicio, 'listarUsuarios').and.returnValue(Promise.resolve([]));
  //   // Act
  //   component.ngOnInit();
  //   // Assert
  //   expect(spyListStatus).toHaveBeenCalledTimes(1);
  //   expect(Array.isArray(component.usuarios)).toBeTrue();
  //   done();
  // });

});
