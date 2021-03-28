import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShipmentsRoutingModule } from './shipments-routing.module';
import { ShipmentsListComponent } from './components/shipments-list/shipments-list.component';
import { ShipmentsCreateComponent } from './components/shipments-create/shipments-create.component';
import { ShipmentsComponent } from './components/shipments/shipments.component';
import { SharedModule } from '@shared/shared.module';
import { ShipmentsService } from './shared/service/shipments.service';
import { HttpService } from '@core/services/http/http.service';

@NgModule({
  declarations: [
    ShipmentsListComponent,
    ShipmentsCreateComponent,
    ShipmentsComponent
  ],
  imports: [
    CommonModule,
    ShipmentsRoutingModule,
    SharedModule
  ],
  providers:[
    HttpService,
    ShipmentsService,

  ]
})
export class ShipmentsModule { }
