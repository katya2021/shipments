import { Status } from '@feature/status/shared/model/status';

import { Component, OnInit } from '@angular/core';
import { StatusService } from '@feature/status/shared/service/status.service';

@Component({
  selector: 'app-status-list',
  templateUrl: './status-list.component.html',
  styleUrls: ['./status-list.component.scss']
})
export class StatusListComponent implements OnInit {
  public listStatus: Status[];

  constructor(protected statuService: StatusService) { } // protected statuService: StatusService

  public ngOnInit(): void {
    this.initData();
  }

  public async initData(): Promise<void> {
    this.listStatus = await this.statuService.get();
  }
}
