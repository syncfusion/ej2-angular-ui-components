import { NgModule, ValueProvider } from '@angular/core';
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
import { SpreadsheetModule } from './spreadsheet.module';
import {Clipboard, Edit, KeyboardNavigation, KeyboardShortcut, CollaborativeEditing, Selection, ContextMenu, FormulaBar, Ribbon, Save, Open, SheetTabs, DataBind, AllModule, BasicModule, CellFormat, NumberFormat, Formula} from '@syncfusion/ej2-spreadsheet'


export const ClipboardService: ValueProvider = { provide: 'SpreadsheetClipboard', useValue: Clipboard};
export const EditService: ValueProvider = { provide: 'SpreadsheetEdit', useValue: Edit};
export const KeyboardNavigationService: ValueProvider = { provide: 'SpreadsheetKeyboardNavigation', useValue: KeyboardNavigation};
export const KeyboardShortcutService: ValueProvider = { provide: 'SpreadsheetKeyboardShortcut', useValue: KeyboardShortcut};
export const CollaborativeEditingService: ValueProvider = { provide: 'SpreadsheetCollaborativeEditing', useValue: CollaborativeEditing};
export const SelectionService: ValueProvider = { provide: 'SpreadsheetSelection', useValue: Selection};
export const ContextMenuService: ValueProvider = { provide: 'SpreadsheetContextMenu', useValue: ContextMenu};
export const FormulaBarService: ValueProvider = { provide: 'SpreadsheetFormulaBar', useValue: FormulaBar};
export const RibbonService: ValueProvider = { provide: 'SpreadsheetRibbon', useValue: Ribbon};
export const SaveService: ValueProvider = { provide: 'SpreadsheetSave', useValue: Save};
export const OpenService: ValueProvider = { provide: 'SpreadsheetOpen', useValue: Open};
export const SheetTabsService: ValueProvider = { provide: 'SpreadsheetSheetTabs', useValue: SheetTabs};
export const DataBindService: ValueProvider = { provide: 'SpreadsheetDataBind', useValue: DataBind};
export const AllModuleService: ValueProvider = { provide: 'SpreadsheetAllModule', useValue: AllModule};
export const BasicModuleService: ValueProvider = { provide: 'SpreadsheetBasicModule', useValue: BasicModule};
export const CellFormatService: ValueProvider = { provide: 'SpreadsheetCellFormat', useValue: CellFormat};
export const NumberFormatService: ValueProvider = { provide: 'SpreadsheetNumberFormat', useValue: NumberFormat};
export const FormulaService: ValueProvider = { provide: 'SpreadsheetFormula', useValue: Formula};

/**
 * NgModule definition for the Spreadsheet component with providers.
 */
@NgModule({
    imports: [CommonModule, SpreadsheetModule],
    exports: [
        SpreadsheetModule
    ],
    providers:[
        ClipboardService,
        EditService,
        KeyboardNavigationService,
        KeyboardShortcutService,
        CollaborativeEditingService,
        SelectionService,
        ContextMenuService,
        FormulaBarService,
        RibbonService,
        SaveService,
        OpenService,
        SheetTabsService,
        DataBindService,
        AllModuleService,
        BasicModuleService,
        CellFormatService,
        NumberFormatService,
        FormulaService
    ]
})
export class SpreadsheetAllModule { }