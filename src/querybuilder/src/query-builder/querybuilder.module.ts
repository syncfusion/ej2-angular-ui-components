import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnDirective, ColumnsDirective } from './columns.directive';
import { QueryBuilderComponent } from './querybuilder.component';

/**
 * NgModule definition for the QueryBuilder component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        QueryBuilderComponent,
        ColumnDirective,
        ColumnsDirective
    ],
    exports: [
        QueryBuilderComponent,
        ColumnDirective,
        ColumnsDirective
    ]
})
export class QueryBuilderModule { }