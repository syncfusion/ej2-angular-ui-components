import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnDirective, ColumnsDirective } from './columns.directive';
import { StackedHeaderDirective, StackedHeadersDirective } from './stackedheaders.directive';
import { KanbanComponent } from './kanban.component';

/**
 * NgModule definition for the Kanban component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        KanbanComponent,
        ColumnDirective,
        ColumnsDirective,
        StackedHeaderDirective,
        StackedHeadersDirective
    ],
    exports: [
        KanbanComponent,
        ColumnDirective,
        ColumnsDirective,
        StackedHeaderDirective,
        StackedHeadersDirective
    ]
})
export class KanbanModule { }