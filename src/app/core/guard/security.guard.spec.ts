import { RouterTestingModule } from '@angular/router/testing';
import { TestBed, inject } from '@angular/core/testing';

import { SecurityGuard } from './security.guard';
import { AuthenticationService } from '@core/services/auth/auth.service';
import { HttpService } from '@core/services/http/http.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

describe('SecurityGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        HttpClientModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [SecurityGuard, AuthenticationService, HttpService]
    });
  });

  it('should ...', inject([SecurityGuard], (guard: SecurityGuard) => {
    expect(guard).toBeTruthy();
  }));
});
