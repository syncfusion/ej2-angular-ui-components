import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BulletRangeDirective, BulletRangeCollectionDirective } from './ranges.directive';
import { BulletChartComponent } from './bulletchart.component';

/**
 * NgModule definition for the BulletChart component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        BulletChartComponent,
        BulletRangeDirective,
        BulletRangeCollectionDirective
    ],
    exports: [
        BulletChartComponent,
        BulletRangeDirective,
        BulletRangeCollectionDirective
    ]
})
export class BulletChartModule { }