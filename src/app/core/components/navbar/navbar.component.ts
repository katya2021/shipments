import { NavbarService } from '@core/services/navbar/navbar.service';
import { Component, Input } from '@angular/core';
import { MenuItem } from '@core/modelo/menu-item';
import { AuthenticationService } from '@core/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  @Input()
  public items: MenuItem[];

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private navbarService: NavbarService
  ) { }

  public logout() {
    this.authenticationService.logout();
    this.navbarService.toggle(false);
    this.router.navigate(['/login']);
  }
}
