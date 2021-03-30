import { HttpService } from '@core/services/http/http.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';
import { TokenService } from '@core/services/token/token.service';
import { Router } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthenticationService } from '@core/services/auth/auth.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authenticationService: AuthenticationService;
  let tokenService: TokenService;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [AuthenticationService, TokenService, HttpService],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    authenticationService = TestBed.inject(AuthenticationService);
    tokenService = TestBed.inject(TokenService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('#sendData  send data', (done: DoneFn) => {
    // Arrange
    const spyLogin = spyOn(authenticationService, 'login').and.returnValue(Promise.resolve());
    spyOn(tokenService, 'createToken');
    spyOn(router, 'navigate');
    component.form.get('email')?.setValue('katya@gmail.com');
    component.form.get('password')?.setValue('clave');
    // Act
    component.sendData();
    // Assert
    expect(spyLogin).toHaveBeenCalledTimes(1);
    done();
  });

  it('#ngOnInit  form is initialized', (done: DoneFn) => {
    // Arrange
    // Act
    component.ngOnInit();
    // Assert
    expect(component.form.get('email')?.value).toBeDefined();
    expect(component.form.get('password')?.value).toBeDefined();
    done();
  });

});
