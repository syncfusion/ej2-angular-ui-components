import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateTimePickerComponent } from './datetimepicker.component';

/**
 * NgModule definition for the DateTimePicker component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        DateTimePickerComponent
    ],
    exports: [
        DateTimePickerComponent
    ]
})
export class DateTimePickerModule { }