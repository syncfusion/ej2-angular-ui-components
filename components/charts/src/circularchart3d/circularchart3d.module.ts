import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircularChart3DSeriesDirective, CircularChart3DSeriesCollectionDirective } from './series.directive';
import { CircularChart3DSelectedDataIndexDirective, CircularChart3DSelectedDataIndexesDirective } from './selecteddataindexes.directive';
import { CircularChart3DComponent } from './circularchart3d.component';

/**
 * NgModule definition for the CircularChart3D component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        CircularChart3DComponent,
        CircularChart3DSeriesDirective,
        CircularChart3DSeriesCollectionDirective,
        CircularChart3DSelectedDataIndexDirective,
        CircularChart3DSelectedDataIndexesDirective
    ],
    exports: [
        CircularChart3DComponent,
        CircularChart3DSeriesDirective,
        CircularChart3DSeriesCollectionDirective,
        CircularChart3DSelectedDataIndexDirective,
        CircularChart3DSelectedDataIndexesDirective
    ]
})
export class CircularChart3DModule { }