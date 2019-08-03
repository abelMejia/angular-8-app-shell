import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { InputComponent } from './components/input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectComponent } from './components/select/select.component';
import { ButtonComponent } from './components/button/button.component';


/*********************
    MATERIAL
**********************/
import {
  MatInputModule, MatFormFieldModule, MatNativeDateModule, MatDatepickerModule,
  MatGridListModule, MatSelectModule, MatButtonModule
} from '@angular/material';

@NgModule({
  declarations: [
    InputComponent,
    DatepickerComponent,
    SelectComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    InputComponent,
    SelectComponent,
    DatepickerComponent,
    ButtonComponent,
    MatInputModule,
    MatFormFieldModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule
  ],
  providers: [MatDatepickerModule]
})
export class SharedModule { }