import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatusRoutingModule } from './status-routing.module';
import { StatusListComponent } from './components/status-list/status-list.component';
import { StatusCreateComponent } from './components/status-create/status-create.component';
import { StatusComponent } from './components/status/status.component';
import { SharedModule } from '@shared/shared.module';
import { StatusService } from './shared/service/status.service';
import { HttpService } from '@core/services/http/http.service';


@NgModule({
  declarations: [
    StatusListComponent,
    StatusCreateComponent,
    StatusComponent
  ],
  imports: [
    CommonModule,
    StatusRoutingModule,
    SharedModule
  ],
  providers: [HttpService, StatusService]
})
export class StatusModule { }
