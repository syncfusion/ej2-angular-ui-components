import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresetDirective, PresetsDirective } from './presets.directive';
import { DateRangePickerComponent } from './daterangepicker.component';

/**
 * NgModule definition for the DateRangePicker component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        DateRangePickerComponent,
        PresetDirective,
        PresetsDirective
    ],
    exports: [
        DateRangePickerComponent,
        PresetDirective,
        PresetsDirective
    ]
})
export class DateRangePickerModule { }