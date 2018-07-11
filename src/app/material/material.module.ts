import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule,MatSidenavModule,MatToolbarModule, MatIconModule,MatInputModule,MatButtonModule,MatDialogModule,MatGridListModule,MatDividerModule,MatNativeDateModule,MatDatepickerModule,MatAutocompleteModule,MatMenuModule,MatSelectModule,MatCheckboxModule,MatListModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatGridListModule,
    MatDividerModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatSelectModule,
    MatCheckboxModule,
    MatListModule
  ],
  exports : [
  	MatCardModule,
    MatSidenavModule,
    MatToolbarModule,
  	MatIconModule,
  	MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatGridListModule,
    MatDividerModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatSelectModule,
    MatCheckboxModule,
    MatListModule
  	],
  declarations: []
})
export class MaterialModule { }
