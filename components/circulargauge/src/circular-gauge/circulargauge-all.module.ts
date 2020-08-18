import { NgModule, ValueProvider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnotationDirective, AnnotationsDirective } from './annotations.directive';
import { RangeDirective, RangesDirective } from './ranges.directive';
import { PointerDirective, PointersDirective } from './pointers.directive';
import { AxisDirective, AxesDirective } from './axes.directive';
import { CircularGaugeComponent } from './circulargauge.component';
import { CircularGaugeModule } from './circulargauge.module';
import {Print, PdfExport, GaugeTooltip, Annotations, Legend, ImageExport, Gradient} from '@syncfusion/ej2-circulargauge'


export const PrintService: ValueProvider = { provide: 'CircularGaugePrint', useValue: Print};
export const PdfExportService: ValueProvider = { provide: 'CircularGaugePdfExport', useValue: PdfExport};
export const GaugeTooltipService: ValueProvider = { provide: 'CircularGaugeGaugeTooltip', useValue: GaugeTooltip};
export const AnnotationsService: ValueProvider = { provide: 'CircularGaugeAnnotations', useValue: Annotations};
export const LegendService: ValueProvider = { provide: 'CircularGaugeLegend', useValue: Legend};
export const ImageExportService: ValueProvider = { provide: 'CircularGaugeImageExport', useValue: ImageExport};
export const GradientService: ValueProvider = { provide: 'CircularGaugeGradient', useValue: Gradient};

/**
 * NgModule definition for the CircularGauge component with providers.
 */
@NgModule({
    imports: [CommonModule, CircularGaugeModule],
    exports: [
        CircularGaugeModule
    ],
    providers:[
        PrintService,
        PdfExportService,
        GaugeTooltipService,
        AnnotationsService,
        LegendService,
        ImageExportService,
        GradientService
    ]
})
export class CircularGaugeAllModule { }