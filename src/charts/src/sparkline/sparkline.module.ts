import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RangeBandSettingDirective, RangeBandSettingsDirective } from './rangebandsettings.directive';
import { SparklineComponent } from './sparkline.component';

/**
 * NgModule definition for the Sparkline component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        SparklineComponent,
        RangeBandSettingDirective,
        RangeBandSettingsDirective
    ],
    exports: [
        SparklineComponent,
        RangeBandSettingDirective,
        RangeBandSettingsDirective
    ]
})
export class SparklineModule { }