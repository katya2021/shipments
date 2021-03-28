// import { StatusService } from '@feature/status/shared/service/status.service';
import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl, Validators } from '@angular/forms';

// const LONGITUD_MINIMA_PERMITIDA_TEXTO = 3;
// const LONGITUD_MAXIMA_PERMITIDA_TEXTO = 20;

@Component({
  selector: 'app-status-create',
  templateUrl: './status-create.component.html',
  styleUrls: ['./status-create.component.scss']
})
export class StatusCreateComponent implements OnInit {
  // statuForm: FormGroup;
  constructor() { } //protected statuServices: StatusService

  ngOnInit(): void {
    // this.construirFormularioEstado();
  }

  // create() {
  //   this.statuServices.save(this.statuForm.value);
  // }

  // private construirFormularioEstado() {
  //   this.statuForm = new FormGroup({
  //     id: new FormControl('', [Validators.required]),
  //     descripcion: new FormControl('', [
  //     Validators.required, Validators.minLength(LONGITUD_MINIMA_PERMITIDA_TEXTO),
  //     Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_TEXTO)])
  //   });
  // }
}
