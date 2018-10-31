import { NgModule, ValueProvider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar.component';
import { CalendarModule } from './calendar.module';





/**
 * NgModule definition for the Calendar component with providers.
 */
@NgModule({
    imports: [CommonModule, CalendarModule],
    exports: [
        CalendarModule
    ],
    providers:[
        
    ]
})
export class CalendarAllModule { }