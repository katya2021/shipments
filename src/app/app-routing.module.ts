import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { SecurityGuard } from '@core/guard/security.guard';
import { LoginComponent } from '@feature/authentication/login/login.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'producto', loadChildren: () => import('@producto/producto.module').then(mod => mod.ProductoModule)},
  { path: 'status', loadChildren: () => import('@feature/status/status.module').then(mod => mod.StatusModule)},

  // { path: 'state', component: StateComponent},
  // { path: 'shipping', component: ShippingComponent},
  { path: 'login', component: LoginComponent},
  { path: 'shipments', loadChildren: () => import('@feature/shipments/shipments.module').then(m => m.ShipmentsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
