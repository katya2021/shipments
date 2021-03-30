import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http/http.service';
import { StatusService } from '@feature/status/shared/service/status.service';

import { StatusCreateComponent } from './status-create.component';

describe('StatusCreateComponent', () => {
  let component: StatusCreateComponent;
  let fixture: ComponentFixture<StatusCreateComponent>;
  let statusService: StatusService;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [StatusCreateComponent],
      providers: [StatusService, HttpService],
      imports: [RouterTestingModule, HttpClientTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusCreateComponent);
    component = fixture.componentInstance;
    statusService = TestBed.inject(StatusService);
    fixture.detectChanges();
  });

  it('#create Se envian datos', (done: DoneFn) => {
    // Arrange
    component.statuForm.get('name')?.setValue('');
    const spySave = spyOn(statusService, 'save');

    // Act
    component.create();

    // Assert
    expect(spySave).toHaveBeenCalled();
    done();
  });

  it('#ngOnInit Se inicializa el formulario', (done: DoneFn) => {
    // Arrange
    component.statuForm.get('name')?.setValue('');
    // Act
    component.ngOnInit();
    // Assert
    expect(component.statuForm.get('name')?.value).toBeDefined();
    done();
  });


});
