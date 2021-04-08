import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StatusService } from '@shared/service/status.service';

@Component({
  selector: 'app-status-create',
  templateUrl: './status-create.component.html',
  styleUrls: ['./status-create.component.scss']
})
export class StatusCreateComponent implements OnInit {
  public statuForm: FormGroup;
  public submitted: boolean;

  constructor(private router: Router, protected statuServices: StatusService) { } // protected statuServices: StatusService

  public ngOnInit(): void {
    this.initForm();
  }

  public create() {
    if (!this.statuForm.valid) {
      this.submitted = true;
      return;
    }

    this.statuServices.save(this.statuForm.value);
    this.router.navigate(['/status/list']);
    alert('Se creo estado correctamente');
  }

  private initForm() {
    this.statuForm = new FormGroup({
      name: new FormControl(null, [Validators.required])
    });
  }
}
