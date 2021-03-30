import { NavbarService } from '@core/services/navbar/navbar.service';
import { Router } from '@angular/router';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { AuthenticationService } from '@core/services/auth/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TokenService } from '@core/services/token/token.service';
import { HttpService } from '@core/services/http/http.service';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let authenticationService: AuthenticationService;
  let navbarService: NavbarService;
  let router: Router;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarComponent],
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
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    authenticationService = TestBed.inject(AuthenticationService);
    navbarService = TestBed.inject(NavbarService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('#logout  send data', (done: DoneFn) => {
    // Arrange
    const spyLogout = spyOn(authenticationService, 'logout');
    const spyToggle = spyOn(navbarService, 'toggle');
    const spyNavigate = spyOn(router, 'navigate');
    // Act
    component.logout();
    // Assert
    expect(spyLogout).toHaveBeenCalledTimes(1);
    expect(spyToggle).toHaveBeenCalledTimes(1);
    expect(spyNavigate).toHaveBeenCalledTimes(1);

    done();
  });



});
