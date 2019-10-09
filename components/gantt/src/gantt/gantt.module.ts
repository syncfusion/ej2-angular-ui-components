import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnDirective, ColumnsDirective } from './columns.directive';
import { AddDialogFieldDirective, AddDialogFieldsDirective } from './adddialogfields.directive';
import { EditDialogFieldDirective, EditDialogFieldsDirective } from './editdialogfields.directive';
import { DayWorkingTimeDirective, DayWorkingTimeCollectionDirective } from './dayworkingtime.directive';
import { HolidayDirective, HolidaysDirective } from './holidays.directive';
import { EventMarkerDirective, EventMarkersDirective } from './eventmarkers.directive';
import { GanttComponent } from './gantt.component';

/**
 * NgModule definition for the Gantt component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        GanttComponent,
        ColumnDirective,
        ColumnsDirective,
        AddDialogFieldDirective,
        AddDialogFieldsDirective,
        EditDialogFieldDirective,
        EditDialogFieldsDirective,
        DayWorkingTimeDirective,
        DayWorkingTimeCollectionDirective,
        HolidayDirective,
        HolidaysDirective,
        EventMarkerDirective,
        EventMarkersDirective
    ],
    exports: [
        GanttComponent,
        ColumnDirective,
        ColumnsDirective,
        AddDialogFieldDirective,
        AddDialogFieldsDirective,
        EditDialogFieldDirective,
        EditDialogFieldsDirective,
        DayWorkingTimeDirective,
        DayWorkingTimeCollectionDirective,
        HolidayDirective,
        HolidaysDirective,
        EventMarkerDirective,
        EventMarkersDirective
    ]
})
export class GanttModule { }