import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule
  ],
  declarations: [],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule
  ]
})
export class MaterialModule { }
