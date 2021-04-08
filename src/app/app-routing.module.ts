import { StatusModule } from '@feature/status/status.module';
import { AuthenticationModule } from '@feature/authentication/authentication.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityGuard } from '@core/guard/security.guard';
import { LoginComponent } from '@feature/authentication/login/login.component';
import { ShipmentsModule } from '@feature/shipments/shipments.module';
import {
  MarketRepresentativeRateComponent
} from './feature/market-representative-rate/market-representative-rate/market-representative-rate.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'trm',
    component: MarketRepresentativeRateComponent
  },
  {
    path: 'status',
    canActivate: [SecurityGuard],
    loadChildren: () => import('@feature/status/status.module').then(mod => mod.StatusModule)
  },
  {
    path: 'shipments',
    canActivate: [SecurityGuard],
    loadChildren: () => import('@feature/shipments/shipments.module').then(m => m.ShipmentsModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthenticationModule,
    StatusModule,
    ShipmentsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
