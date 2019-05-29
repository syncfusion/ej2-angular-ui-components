import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeatMapComponent } from './heatmap.component';

/**
 * NgModule definition for the HeatMap component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        HeatMapComponent
    ],
    exports: [
        HeatMapComponent
    ]
})
export class HeatMapModule { }