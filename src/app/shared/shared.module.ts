import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule,
  MatButtonModule,
  MatGridListModule,
  MatListModule,
  MatRippleModule,
  MatSidenavModule,
  MatCardModule,
  MatSelectModule,
  MatDialogModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTabsModule,
  MatExpansionModule,
  MatDividerModule,
  MatCheckboxModule,
  MatRadioModule,
  MatSnackBarModule
} from '@angular/material';
import { CommonModule } from '@angular/common';
const materialModules = [
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule,
  MatButtonModule,
  MatCheckboxModule,
  MatDialogModule,
  MatGridListModule,
  MatListModule,
  MatSelectModule,
  MatRippleModule,
  MatSidenavModule,
  MatCardModule,
  MatSelectModule,
  MatDialogModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTabsModule,
  MatExpansionModule,
  MatDividerModule,
  MatCheckboxModule,
  MatRadioModule,
  MatSnackBarModule
];
@NgModule({
  declarations: [
  ],

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ...materialModules,

  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    ...materialModules,
  ],

  entryComponents: [],
})
export class SharedModule { }
