import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatAutocompleteModule,
  MatButtonModule, MatCardModule, MatCheckboxModule, MatDatepickerModule, MatDialogModule, MatExpansionModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule, MatMenuModule, MatNativeDateModule,
  MatProgressBarModule, MatRadioModule,
  MatSelectModule,
  MatSidenavModule, MatSlideToggleModule,
  MatTabsModule,
  MatToolbarModule, MatTooltipModule,
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MatDialogTitleBarComponent } from './custom/mat-dialog-title-bar/mat-dialog-title-bar.component';
import { FormControlGroupHeaderComponent } from './custom/form-control-group-header/form-control-group-header.component';
import {NgPipesModule} from 'ngx-pipes';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FieldDisplayHeaderComponent } from './custom/field-display-header/field-display-header.component';
import {NgDraggableModule} from 'angular-draggable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatTooltipModule,
    MatSelectModule,
    MatDialogModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule, // TODO: Replace with MatMomentDateModule
    MatRadioModule,
    MatAutocompleteModule,
    NgPipesModule,
    MatMenuModule,
    MatIconModule,
    NgDraggableModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatTooltipModule,
    MatSelectModule,
    MatDialogModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule, // TODO: Replace with MatMomentDateModule
    MatRadioModule,
    MatDialogTitleBarComponent,
    MatAutocompleteModule,
    NgPipesModule,
    MatMenuModule,
    MatIconModule,
    FormControlGroupHeaderComponent,
    FieldDisplayHeaderComponent,
  ],
  declarations: [MatDialogTitleBarComponent, FormControlGroupHeaderComponent, FieldDisplayHeaderComponent]
})
export class AngularMaterialModule {
}
