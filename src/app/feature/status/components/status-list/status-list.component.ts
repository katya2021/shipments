import { Status } from '@feature/status/shared/model/status';

import { Component, OnInit } from '@angular/core';
import { StatusService } from '@feature/status/shared/service/status.service';

@Component({
  selector: 'app-status-list',
  templateUrl: './status-list.component.html',
  styleUrls: ['./status-list.component.sass']
})
export class StatusListComponent implements OnInit {
  public listStatus: Status[];

  constructor(protected statuService: StatusService) { } //protected statuService: StatusService

  ngOnInit(): void {
    this.statuService.consultar().then((response) => {
      this.listStatus = response;
    })
  }

}
