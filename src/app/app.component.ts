import { Component } from '@angular/core';
import { MenuItem } from '@core/modelo/menu-item';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  public companies: MenuItem[] = [
    { url: '/home', nombre: 'home' },
    { url: '/producto', nombre: 'producto' },
    { url: '/status', nombre: 'Estados' },
    { url: '/shipments', nombre: 'Envíos' },
    { url: '/login', nombre: 'login' }
  ];
}
