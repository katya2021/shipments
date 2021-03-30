import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  public subject = new Subject<boolean>();
  private subscription: Subscription;

  public subscribe(handler: (params: boolean) => void) {
    this.subscription = this.subject.subscribe(handler);
  }

  public unsubscribe(): void {
    this.subscription?.unsubscribe();
  }

  public toggle(data: boolean): void {
    this.subject.next(data);
  }
}
