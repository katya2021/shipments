import { NavbarService } from './core/services/navbar/navbar.service';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from '@core/modelo/menu-item';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  public showMenu: boolean;
  public companies: MenuItem[] = [
    { url: '/home', nombre: 'home' },
    { url: '/status', nombre: 'Estados' },
    { url: '/shipments', nombre: 'Envíos' },
    { url: '/logout', nombre: 'Envíos' }
  ];

  constructor(private navbarService: NavbarService) {}

  public ngOnInit(): void {
    this.navbarService.subscribe((result) => {
      console.log(result);
      this.showMenu = result;
    });
  }
}
