import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PivotFieldListComponent } from './pivotfieldlist.component';

/**
 * NgModule definition for the PivotFieldList component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        PivotFieldListComponent
    ],
    exports: [
        PivotFieldListComponent
    ]
})
export class PivotFieldListModule { }