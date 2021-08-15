import { Component, Input } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { ValidarCamposService } from 'src/app/shared/validarCampos/validar-campos.service';

@Component({
  selector: 'apss-input-hora-start',
  templateUrl: './input-hora-start.component.html',
  styleUrls: ['./input-hora-start.component.css']
})
export class InputHoraStartComponent  {

  @Input() formGroup!: FormGroup;
  @Input() titulo!: string;
  @Input() controlName!: string;

  constructor(public validacao: ValidarCamposService) { }

  get formControl(): AbstractControl {
    return this.formGroup.controls[this.controlName]
    }

}
