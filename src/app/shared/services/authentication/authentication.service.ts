import { Injectable } from '@angular/core';
import {TokenService} from '@core/services/token/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private tokenService: TokenService) {}

  public login(params: { email: string; password: string }): Promise<any> {
    return Promise.resolve(params);
  }

  public signOff(): void {
    this.tokenService.deleteToken();
  }

  public get authenticated(): boolean {
    return !!this.tokenService.getToken();
  }
}

