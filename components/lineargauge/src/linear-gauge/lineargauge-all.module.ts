import { NgModule, ValueProvider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RangeDirective, RangesDirective } from './ranges.directive';
import { PointerDirective, PointersDirective } from './pointers.directive';
import { AxisDirective, AxesDirective } from './axes.directive';
import { AnnotationDirective, AnnotationsDirective } from './annotations.directive';
import { LinearGaugeComponent } from './lineargauge.component';
import { LinearGaugeModule } from './lineargauge.module';
import {GaugeTooltip, Annotations} from '@syncfusion/ej2-lineargauge'


export const GaugeTooltipService: ValueProvider = { provide: 'LinearGaugeGaugeTooltip', useValue: GaugeTooltip};
export const AnnotationsService: ValueProvider = { provide: 'LinearGaugeAnnotations', useValue: Annotations};

/**
 * NgModule definition for the LinearGauge component with providers.
 */
@NgModule({
    imports: [CommonModule, LinearGaugeModule],
    exports: [
        LinearGaugeModule
    ],
    providers:[
        GaugeTooltipService,
        AnnotationsService
    ]
})
export class LinearGaugeAllModule { }