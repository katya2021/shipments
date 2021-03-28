import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CredentialStorageService {

  constructor() { }

  public getItem(name: string): string | null {
    const item = window.localStorage.getItem(name);
    return item ? item : null;
  }

  public createItem(name: string, data: {[key: string]: string }): void {
    window.localStorage.setItem(name, JSON.stringify(data));
  }

  public deleteItem(name: string): void {
    window.localStorage.deleteItem(name);
  }
}
