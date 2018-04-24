// CORE
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

// ANGULAR MATERIAL COMPONENTS
import {MatIconModule, MatToolbarModule} from '@angular/material';
import {MatTabsModule} from '@angular/material';
import {MatButtonToggleModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatDialogModule} from '@angular/material';
import {MatTableModule} from '@angular/material';
import {MatCardModule} from '@angular/material';

export const CORE = [
  CommonModule,
];

export const ANGULAR_MATERIAL_COMPONENTS = [
  MatToolbarModule,
  MatTabsModule,
  MatButtonToggleModule,
  MatIconModule,
  MatButtonModule,
  MatDialogModule,
  MatTableModule,
  MatCardModule,
];

@NgModule({
  imports: [
    CORE,
    ANGULAR_MATERIAL_COMPONENTS,
  ],
  declarations: [],
  exports: [
    ANGULAR_MATERIAL_COMPONENTS,
  ]
})
export class SharedModule {
}
