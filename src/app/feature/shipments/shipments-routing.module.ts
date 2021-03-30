import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShipmentsCreateComponent } from './components/shipments-create/shipments-create.component';
import { ShipmentsListComponent } from './components/shipments-list/shipments-list.component';
import { ShipmentsComponent } from './components/shipments/shipments.component';

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShipmentsRoutingModule { }
