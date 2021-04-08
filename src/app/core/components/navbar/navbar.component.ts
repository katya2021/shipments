import { NavbarService } from '@core/services/navbar/navbar.service';
import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from '@core/modelo/menu-item';
import { AuthenticationService } from '@core/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input()
  public items: MenuItem[] = [];

  public showItems: MenuItem[];

  public isAuth: boolean;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private navbarService: NavbarService
  ) {}

  public ngOnInit(): void {
    this.navbarService.subscribe((isAuth) => this.loadMenu(isAuth));
    this.navbarService.toggle(this.authenticationService.isAuthenticated);
  }

  public loadMenu(isAuth: boolean): void {
    this.isAuth = isAuth;
    this.showItems = this.items.filter((item) => (item.isAuth === isAuth));
  }

  public logout() {
    this.authenticationService.logout();
    this.navbarService.toggle(false);
    this.router.navigate(['/trm']);
  }
}
