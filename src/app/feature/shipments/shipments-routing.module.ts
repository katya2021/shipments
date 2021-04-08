import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShipmentsCreateComponent } from './components/shipments-create/shipments-create.component';
import { ShipmentsListComponent } from './components/shipments-list/shipments-list.component';
import { ShipmentsComponent } from './components/shipments/shipments.component';
import { TrackingShipmentSearchComponent } from './components/tracking-shipment-search/tracking-shipment-search.component';

const routes: Routes = [
  {
    path: '',
    component: ShipmentsComponent,
    children: [
      {
        path: 'list',
        component: ShipmentsListComponent
      },
      {
        path: 'create',
        component: ShipmentsCreateComponent
      },
      {
        path: 'search',
        component: TrackingShipmentSearchComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShipmentsRoutingModule { }
