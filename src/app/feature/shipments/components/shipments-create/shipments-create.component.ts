import { WeekDays } from './../../shared/constants/weekdays';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { ShipmentsService } from '@feature/shipments/shared/service/shipments.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-shipments-create',
  templateUrl: './shipments-create.component.html',
  styleUrls: ['./shipments-create.component.scss']
})
export class ShipmentsCreateComponent implements OnInit {

  public shipmentsForm: FormGroup;
  public submitted: boolean;

  constructor(private router: Router, protected shipmentsServices: ShipmentsService) { }

  public ngOnInit(): void {
    this.initPage();
  }

  public initPage(): void {
    this.initForm();

    if (!this.isAvailableToday()) {
      alert('Hoy no es un dia habil para registrar un envío');
      this.shipmentsForm.disable();
    }
  }

  public create() {
    if (!this.shipmentsForm.valid) {
      this.submitted = true;
      return;
    }

    this.shipmentsServices.save(this.shipmentsForm.value);
    this.router.navigate(['/shipments/list']);
    alert('Se creo el envío correctamente');
  }

  public get priceCalculator(): number {
    const weightMaxBasic = 5;
    const basicPrice = 30000;
    const weightExtraPrice = 60000;
    const weight = this.shipmentsForm.controls.weight.value;

    return weight <= weightMaxBasic ? basicPrice : weightExtraPrice;
  }

  private initForm() {
    this.shipmentsForm = new FormGroup({
      descripcion: new FormControl(null, [Validators.required]),
      originAddress: new FormControl(null, [Validators.required]),
      destinationAddress: new FormControl(null, [Validators.required]),
      weight: new FormControl(1, [Validators.required]),
      note: new FormControl(null, [Validators.required]),
    });
  }

  private isAvailableToday(): boolean {
    const today = new Date();
    const weekDays = [WeekDays.MONDAY, WeekDays.TUESDAY, WeekDays.WEDNESDAY, WeekDays.THURSDAY, WeekDays.FRIDAY];

    return weekDays.indexOf(today.getDay()) > -1;
  }

}
