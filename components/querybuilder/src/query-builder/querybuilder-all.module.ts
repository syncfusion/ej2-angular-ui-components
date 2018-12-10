import { NgModule, ValueProvider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnDirective, ColumnsDirective } from './columns.directive';
import { QueryBuilderComponent } from './querybuilder.component';
import { QueryBuilderModule } from './querybuilder.module';





/**
 * NgModule definition for the QueryBuilder component with providers.
 */
@NgModule({
    imports: [CommonModule, QueryBuilderModule],
    exports: [
        QueryBuilderModule
    ],
    providers:[
        
    ]
})
export class QueryBuilderAllModule { }