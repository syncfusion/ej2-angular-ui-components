import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnDirective, ColumnsDirective } from './columns.directive';
import { AggregateColumnDirective, AggregateColumnsDirective } from './aggregate-columns.directive';
import { AggregateDirective, AggregatesDirective } from './aggregates.directive';
import { TreeGridComponent } from './treegrid.component';

/**
 * NgModule definition for the TreeGrid component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        TreeGridComponent,
        ColumnDirective,
        ColumnsDirective,
        AggregateColumnDirective,
        AggregateColumnsDirective,
        AggregateDirective,
        AggregatesDirective
    ],
    exports: [
        TreeGridComponent,
        ColumnDirective,
        ColumnsDirective,
        AggregateColumnDirective,
        AggregateColumnsDirective,
        AggregateDirective,
        AggregatesDirective
    ]
})
export class TreeGridModule { }