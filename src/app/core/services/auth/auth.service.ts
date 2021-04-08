import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http/http.service';
import { TokenService } from '@core/services/token/token.service';
import { API } from '@shared/configs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpService: HttpService,  private tokenService: TokenService) { }

  public login(params: { email: string; password: string }): Promise<unknown> {
    return this.httpService.doPost(environment.apiUrl + API.LOGIN, params).toPromise();
  }

  public logout(): void {
    this.tokenService.deleteToken();
  }

  public get isAuthenticated(): boolean {
    return !!this.tokenService.getToken();
  }
}
