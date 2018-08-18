import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCheckboxModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  declarations: [],
  exports: [
    MatButtonModule,
    MatCheckboxModule
  ]
})
export class MaterialModule { }
