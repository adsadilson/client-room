import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from './input-text/input-text.component';
import { InputDateComponent } from './input-date/input-date.component';
import { InputSelectComponent } from './input-select/input-select.component';
import { MaterialModule } from '../../material/material-modulo';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputHoraStartComponent } from './input-hora-start/input-hora-start.component';



@NgModule({
  declarations: [
    InputTextComponent,
    InputDateComponent,
    InputSelectComponent,
    InputHoraStartComponent,
   
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule

  ],
  exports: [
    InputTextComponent,
    InputDateComponent,
    InputSelectComponent,
    InputHoraStartComponent
  ]
})
export class CamposModule { }
