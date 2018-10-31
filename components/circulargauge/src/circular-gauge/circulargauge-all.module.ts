import { NgModule, ValueProvider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnotationDirective, AnnotationsDirective } from './annotations.directive';
import { RangeDirective, RangesDirective } from './ranges.directive';
import { PointerDirective, PointersDirective } from './pointers.directive';
import { AxisDirective, AxesDirective } from './axes.directive';
import { CircularGaugeComponent } from './circulargauge.component';
import { CircularGaugeModule } from './circulargauge.module';
import {GaugeTooltip, Annotations} from '@syncfusion/ej2-circulargauge'


export const GaugeTooltipService: ValueProvider = { provide: 'CircularGaugeGaugeTooltip', useValue: GaugeTooltip};
export const AnnotationsService: ValueProvider = { provide: 'CircularGaugeAnnotations', useValue: Annotations};

/**
 * NgModule definition for the CircularGauge component with providers.
 */
@NgModule({
    imports: [CommonModule, CircularGaugeModule],
    exports: [
        CircularGaugeModule
    ],
    providers:[
        GaugeTooltipService,
        AnnotationsService
    ]
})
export class CircularGaugeAllModule { }