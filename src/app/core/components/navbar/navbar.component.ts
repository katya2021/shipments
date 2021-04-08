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
  public items: MenuItem[];

  public showItems: MenuItem[];

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private navbarService: NavbarService
  ) {
  }

  public ngOnInit(): void {
    this.navbarService.subscribe((toggle) => this.loadMenu(toggle));
    this.navbarService.toggle(this.authenticationService.isAuthenticated);
  }

  public loadMenu(toggle: boolean): void {
    console.log(this.showItems, toggle);
    this.showItems = this.items.filter((item) => (item.isAuth === toggle));
  }

  public logout() {
    this.authenticationService.logout();
    this.navbarService.toggle(false);
    this.router.navigate(['/login']);
  }
}
