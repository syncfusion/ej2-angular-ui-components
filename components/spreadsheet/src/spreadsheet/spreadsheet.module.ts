import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageDirective, ImagesDirective } from './image.directive';
import { ChartDirective, ChartsDirective } from './chart.directive';
import { CellDirective, CellsDirective } from './cells.directive';
import { RowDirective, RowsDirective } from './rows.directive';
import { ColumnDirective, ColumnsDirective } from './columns.directive';
import { RangeDirective, RangesDirective } from './ranges.directive';
import { ConditionalFormatDirective, ConditionalFormatsDirective } from './conditionalformats.directive';
import { SheetDirective, SheetsDirective } from './sheets.directive';
import { DefinedNameDirective, DefinedNamesDirective } from './definednames.directive';
import { SpreadsheetComponent } from './spreadsheet.component';

/**
 * NgModule definition for the Spreadsheet component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        SpreadsheetComponent,
        ImageDirective,
        ImagesDirective,
        ChartDirective,
        ChartsDirective,
        CellDirective,
        CellsDirective,
        RowDirective,
        RowsDirective,
        ColumnDirective,
        ColumnsDirective,
        RangeDirective,
        RangesDirective,
        ConditionalFormatDirective,
        ConditionalFormatsDirective,
        SheetDirective,
        SheetsDirective,
        DefinedNameDirective,
        DefinedNamesDirective
    ],
    exports: [
        SpreadsheetComponent,
        ImageDirective,
        ImagesDirective,
        ChartDirective,
        ChartsDirective,
        CellDirective,
        CellsDirective,
        RowDirective,
        RowsDirective,
        ColumnDirective,
        ColumnsDirective,
        RangeDirective,
        RangesDirective,
        ConditionalFormatDirective,
        ConditionalFormatsDirective,
        SheetDirective,
        SheetsDirective,
        DefinedNameDirective,
        DefinedNamesDirective
    ]
})
export class SpreadsheetModule { }