import { Injectable } from '@angular/core';
import { CredentialStorageService } from '@core-service/credential-storage/credential-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private readonly TOKEN: string = 'token';

  constructor(private credentialStorageService: CredentialStorageService ) { }

  public getToken() {
    return this.credentialStorageService.getItem(this.TOKEN);
  }

  public createToken(datos: { token: string }): void {
    this.credentialStorageService.createItem(this.TOKEN, datos);
  }

  public deleteToken(): void {
    this.credentialStorageService.deleteItem(this.TOKEN);
  }
}
