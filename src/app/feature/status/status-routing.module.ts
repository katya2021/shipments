import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatusCreateComponent } from './components/status-create/status-create.component';
import { StatusListComponent } from './components/status-list/status-list.component';
import { StatusComponent } from './components/status/status.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/status/list',
    pathMatch: 'full',
  },
  {
    path: '',
    component: StatusComponent,
    children: [
      {
        path: 'list',
        component: StatusListComponent
      },
      {
        path: 'create',
        component: StatusCreateComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatusRoutingModule { }
