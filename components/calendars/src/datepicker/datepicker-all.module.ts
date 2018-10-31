import { NgModule, ValueProvider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePickerComponent } from './datepicker.component';
import { DatePickerModule } from './datepicker.module';





/**
 * NgModule definition for the DatePicker component with providers.
 */
@NgModule({
    imports: [CommonModule, DatePickerModule],
    exports: [
        DatePickerModule
    ],
    providers:[
        
    ]
})
export class DatePickerAllModule { }