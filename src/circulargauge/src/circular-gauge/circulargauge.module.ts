import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnotationDirective, AnnotationsDirective } from './annotations.directive';
import { RangeDirective, RangesDirective } from './ranges.directive';
import { PointerDirective, PointersDirective } from './pointers.directive';
import { AxisDirective, AxesDirective } from './axes.directive';
import { CircularGaugeComponent } from './circulargauge.component';

/**
 * NgModule definition for the CircularGauge component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        CircularGaugeComponent,
        AnnotationDirective,
        AnnotationsDirective,
        RangeDirective,
        RangesDirective,
        PointerDirective,
        PointersDirective,
        AxisDirective,
        AxesDirective
    ],
    exports: [
        CircularGaugeComponent,
        AnnotationDirective,
        AnnotationsDirective,
        RangeDirective,
        RangesDirective,
        PointerDirective,
        PointersDirective,
        AxisDirective,
        AxesDirective
    ]
})
export class CircularGaugeModule { }