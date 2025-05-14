import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmithchartSeriesDirective, SmithchartSeriesCollectionDirective } from './series.directive';
import { SmithchartComponent } from './smithchart.component';

/**
 * NgModule definition for the Smithchart component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        SmithchartComponent,
        SmithchartSeriesDirective,
        SmithchartSeriesCollectionDirective
    ],
    exports: [
        SmithchartComponent,
        SmithchartSeriesDirective,
        SmithchartSeriesCollectionDirective
    ]
})
export class SmithchartModule { }