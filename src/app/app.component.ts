import { Component } from '@angular/core';
import { MenuItem } from '@core/modelo/menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  public menuItem: MenuItem[] = [
    { url: '/trm', nombre: 'TRM', isAuth: false },
    { url: '/status', nombre: 'Estados', isAuth: true},
    { url: '/shipments', nombre: 'Envíos', isAuth: true},
    { url: '/search', nombre: 'Rastrear Envio', isAuth: false },
    { url: '/login', nombre: 'Login', isAuth: false },
  ];

  constructor() {}
}
