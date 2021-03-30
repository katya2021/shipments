// import { StatusService } from '@feature/status/shared/service/status.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StatusService } from '@feature/status/shared/service/status.service';
// import { FormGroup, FormControl, Validators } from '@angular/forms';

const LONGITUD_MINIMA_PERMITIDA_TEXTO = 5;
const LONGITUD_MAXIMA_PERMITIDA_TEXTO = 20;

@Component({
  selector: 'app-status-create',
  templateUrl: './status-create.component.html',
  styleUrls: ['./status-create.component.scss']
})
export class StatusCreateComponent implements OnInit {
  public statuForm: FormGroup;

  constructor(protected statuServices: StatusService) { } // protected statuServices: StatusService

  public ngOnInit(): void {
    this.initForm();
  }

  public create() {
    this.statuServices.save(this.statuForm.value);
  }

  private initForm() {
    this.statuForm = new FormGroup({
      name: new FormControl('', [
      Validators.required, Validators.minLength(LONGITUD_MINIMA_PERMITIDA_TEXTO),
      Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_TEXTO)])
    });
  }
}
