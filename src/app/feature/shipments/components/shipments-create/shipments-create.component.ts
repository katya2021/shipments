import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { ShipmentsService } from '@feature/shipments/shared/service/shipments.service';
@Component({
  selector: 'app-shipments-create',
  templateUrl: './shipments-create.component.html',
  styleUrls: ['./shipments-create.component.scss']
})
export class ShipmentsCreateComponent implements OnInit {

  public shipmentsForm: FormGroup;

  constructor(protected shipmentsServices: ShipmentsService) { }

  public ngOnInit(): void {
    this.initForm();
  }

  public create() {
    this.shipmentsServices.save(this.shipmentsForm.value);
  }

  private initForm() {
    this.shipmentsForm = new FormGroup({
      descripcion: new FormControl(),
      originAddress: new FormControl(),
      destinationAddress: new FormControl(),
      weight: new FormControl(),
      note: new FormControl(),
    });
  }

}
