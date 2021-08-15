import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidarCamposService {

  constructor() { }

  hasErrorValidar(control: AbstractControl, errorName: string): boolean {
    if ((control.touched || control.dirty) && this.hasError(control, errorName)) {
      return true;
    } else {
      return false;
    }
  }

  hasError(control: AbstractControl, errorName: string): boolean {
    return control.hasError(errorName);
  }

  lengthValidar(control: AbstractControl, errorName: string): number {
    const error = control.errors![errorName];
    return error.requiredLength || error.min || error.max || 0;
  }

  senhasProibidas(control: FormControl) {
    console.log(control.value);
    
  }
 

}

