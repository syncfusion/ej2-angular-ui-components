import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StackedColumnDirective, StackedColumnsDirective } from './stacked-column.directive';
import { ColumnDirective, ColumnsDirective } from './columns.directive';
import { AggregateColumnDirective, AggregateColumnsDirective } from './aggregate-columns.directive';
import { AggregateDirective, AggregatesDirective } from './aggregates.directive';
import { GridComponent } from './grid.component';

/**
 * NgModule definition for the Grid component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        GridComponent,
        StackedColumnDirective,
        StackedColumnsDirective,
        ColumnDirective,
        ColumnsDirective,
        AggregateColumnDirective,
        AggregateColumnsDirective,
        AggregateDirective,
        AggregatesDirective
    ],
    exports: [
        GridComponent,
        StackedColumnDirective,
        StackedColumnsDirective,
        ColumnDirective,
        ColumnsDirective,
        AggregateColumnDirective,
        AggregateColumnsDirective,
        AggregateDirective,
        AggregatesDirective
    ]
})
export class GridModule { }