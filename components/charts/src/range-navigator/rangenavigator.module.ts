import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RangenavigatorSeriesDirective, RangenavigatorSeriesCollectionDirective } from './series.directive';
import { RangeNavigatorComponent } from './rangenavigator.component';

/**
 * NgModule definition for the RangeNavigator component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        RangeNavigatorComponent,
        RangenavigatorSeriesDirective,
        RangenavigatorSeriesCollectionDirective
    ],
    exports: [
        RangeNavigatorComponent,
        RangenavigatorSeriesDirective,
        RangenavigatorSeriesCollectionDirective
    ]
})
export class RangeNavigatorModule { }