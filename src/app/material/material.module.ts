import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule, MatChipsModule,MatCardModule,MatSidenavModule,MatToolbarModule, MatIconModule,MatInputModule,MatButtonModule,MatDialogModule,MatGridListModule,MatDividerModule,MatNativeDateModule,MatDatepickerModule,MatAutocompleteModule,MatMenuModule,MatSelectModule,MatCheckboxModule,MatListModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    MatChipsModule,
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
    MatTabsModule,
    MatChipsModule,
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
