import { TokenService } from './../token/token.service';
import { HttpService } from '@core/services/http/http.service';
import { TestBed } from '@angular/core/testing';

import { AuthenticationService } from './auth.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AuthenticationService', () => {
  let service: AuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [AuthenticationService, HttpService, TokenService]
    });
    TestBed.inject(HttpService);
    TestBed.inject(TokenService);
    service = TestBed.inject(AuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
