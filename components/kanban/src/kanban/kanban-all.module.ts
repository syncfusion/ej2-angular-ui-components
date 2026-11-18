import { NgModule, ValueProvider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnDirective, ColumnsDirective } from './columns.directive';
import { StackedHeaderDirective, StackedHeadersDirective } from './stackedheaders.directive';
import { KanbanComponent } from './kanban.component';
import { KanbanModule } from './kanban.module';
import {WebMcpKanban} from '@syncfusion/ej2-kanban'


export const WebMcpKanbanService: ValueProvider = { provide: 'KanbanWebMcpKanban', useValue: WebMcpKanban};

/**
 * NgModule definition for the Kanban component with providers.
 */
@NgModule({
    imports: [CommonModule, KanbanModule],
    exports: [
        KanbanModule
    ],
    providers:[
        WebMcpKanbanService
    ]
})
export class KanbanAllModule { }