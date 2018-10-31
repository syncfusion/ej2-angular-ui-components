import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PivotViewComponent } from './pivotview.component';

/**
 * NgModule definition for the PivotView component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        PivotViewComponent
    ],
    exports: [
        PivotViewComponent
    ]
})
export class PivotViewModule { }