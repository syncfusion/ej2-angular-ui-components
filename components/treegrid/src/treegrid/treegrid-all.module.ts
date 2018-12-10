import { NgModule, ValueProvider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnDirective, ColumnsDirective } from './columns.directive';
import { AggregateColumnDirective, AggregateColumnsDirective } from './aggregate-columns.directive';
import { AggregateDirective, AggregatesDirective } from './aggregates.directive';
import { TreeGridComponent } from './treegrid.component';
import { TreeGridModule } from './treegrid.module';
import {Filter, Page, Sort, Reorder, Toolbar, Aggregate, Resize, ColumnMenu, ExcelExport, PdfExport, CommandColumn, ContextMenu, Edit} from '@syncfusion/ej2-treegrid'


export const FilterService: ValueProvider = { provide: 'TreeGridFilter', useValue: Filter};
export const PageService: ValueProvider = { provide: 'TreeGridPage', useValue: Page};
export const SortService: ValueProvider = { provide: 'TreeGridSort', useValue: Sort};
export const ReorderService: ValueProvider = { provide: 'TreeGridReorder', useValue: Reorder};
export const ToolbarService: ValueProvider = { provide: 'TreeGridToolbar', useValue: Toolbar};
export const AggregateService: ValueProvider = { provide: 'TreeGridAggregate', useValue: Aggregate};
export const ResizeService: ValueProvider = { provide: 'TreeGridResize', useValue: Resize};
export const ColumnMenuService: ValueProvider = { provide: 'TreeGridColumnMenu', useValue: ColumnMenu};
export const ExcelExportService: ValueProvider = { provide: 'TreeGridExcelExport', useValue: ExcelExport};
export const PdfExportService: ValueProvider = { provide: 'TreeGridPdfExport', useValue: PdfExport};
export const CommandColumnService: ValueProvider = { provide: 'TreeGridCommandColumn', useValue: CommandColumn};
export const ContextMenuService: ValueProvider = { provide: 'TreeGridContextMenu', useValue: ContextMenu};
export const EditService: ValueProvider = { provide: 'TreeGridEdit', useValue: Edit};

/**
 * NgModule definition for the TreeGrid component with providers.
 */
@NgModule({
    imports: [CommonModule, TreeGridModule],
    exports: [
        TreeGridModule
    ],
    providers:[
        FilterService,
        PageService,
        SortService,
        ReorderService,
        ToolbarService,
        AggregateService,
        ResizeService,
        ColumnMenuService,
        ExcelExportService,
        PdfExportService,
        CommandColumnService,
        ContextMenuService,
        EditService
    ]
})
export class TreeGridAllModule { }