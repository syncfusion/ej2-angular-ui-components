import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RangeDirective, RangesDirective } from './ranges.directive';
import { PointerDirective, PointersDirective } from './pointers.directive';
import { AxisDirective, AxesDirective } from './axes.directive';
import { AnnotationDirective, AnnotationsDirective } from './annotations.directive';
import { LinearGaugeComponent } from './lineargauge.component';

/**
 * NgModule definition for the LinearGauge component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        LinearGaugeComponent,
        RangeDirective,
        RangesDirective,
        PointerDirective,
        PointersDirective,
        AxisDirective,
        AxesDirective,
        AnnotationDirective,
        AnnotationsDirective
    ],
    exports: [
        LinearGaugeComponent,
        RangeDirective,
        RangesDirective,
        PointerDirective,
        PointersDirective,
        AxisDirective,
        AxesDirective,
        AnnotationDirective,
        AnnotationsDirective
    ]
})
export class LinearGaugeModule { }