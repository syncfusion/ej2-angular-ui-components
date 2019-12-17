import { NgModule, ValueProvider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BulletRangeDirective, BulletRangeCollectionDirective } from './ranges.directive';
import { BulletChartComponent } from './bulletchart.component';
import { BulletChartModule } from './bulletchart.module';
import {BulletTooltip} from '@syncfusion/ej2-charts'


export const BulletTooltipService: ValueProvider = { provide: 'ChartsBulletTooltip', useValue: BulletTooltip};

/**
 * NgModule definition for the BulletChart component with providers.
 */
@NgModule({
    imports: [CommonModule, BulletChartModule],
    exports: [
        BulletChartModule
    ],
    providers:[
        BulletTooltipService
    ]
})
export class BulletChartAllModule { }