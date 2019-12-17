import { ChangeDetectionStrategy, Component, ContentChild, ContentChildren, Directive, ElementRef, Injector, NgModule, Renderer2, ViewContainerRef } from '@angular/core';
import { ArrayBase, ComplexBase, ComponentBase, ComponentMixins, Template, setValue } from '@syncfusion/ej2-angular-base';
import { AllModule, BasicModule, CellFormat, Clipboard, CollaborativeEditing, ContextMenu, DataBind, Edit, Formula, FormulaBar, KeyboardNavigation, KeyboardShortcut, NumberFormat, Open, Ribbon, Save, Selection, SheetTabs, Spreadsheet } from '@syncfusion/ej2-spreadsheet';
import { CommonModule } from '@angular/common';

let input = ['format', 'formula', 'hyperlink', 'index', 'style', 'value'];
let outputs = [];
/**
 * `e-cell` directive represent a cell of the Angular Spreadsheet.
 * It must be contained in a `e-row` directive.
 * ```html
 * <ejs-spreadsheet>
 *   <e-sheets>
 *    <e-sheet>
 *    <e-rows>
 *    <e-row>
 *    <e-cells>
 *    <e-cell value='A1'></e-cell>
 *    </e-cells>
 *    </e-row>
 *    </e-rows>
 *    </e-sheet>
 *   </e-sheets>
 * </ejs-spreadsheet>
 * ```
 */
class CellDirective extends ComplexBase {
    /**
     * @param {?} viewContainerRef
     */
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
    }
}
CellDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-cells>e-cell',
                inputs: input,
                outputs: outputs,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
CellDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
/**
 * Cell Array Directive
 */
class CellsDirective extends ArrayBase {
    constructor() {
        super('cells');
    }
}
CellsDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-row>e-cells',
                queries: {
                    children: new ContentChildren(CellDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
CellsDirective.ctorParameters = () => [];

let input$1 = ['cells', 'customHeight', 'height', 'index'];
let outputs$1 = [];
/**
 * `e-row` directive represent a row of the Angular Spreadsheet.
 * It must be contained in a `e-sheet` directive.
 * ```html
 * <ejs-spreadsheet>
 *   <e-sheets>
 *    <e-sheet>
 *    <e-rows>
 *    <e-row></e-row>
 *    </e-rows>
 *    </e-sheet>
 *   </e-sheets>
 * </ejs-spreadsheet>
 * ```
 */
class RowDirective extends ComplexBase {
    /**
     * @param {?} viewContainerRef
     */
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        this.tags = ['cells'];
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$1);
    }
}
RowDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-rows>e-row',
                inputs: input$1,
                outputs: outputs$1,
                queries: {
                    childCells: new ContentChild(CellsDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
RowDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
/**
 * Row Array Directive
 */
class RowsDirective extends ArrayBase {
    constructor() {
        super('rows');
    }
}
RowsDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-sheet>e-rows',
                queries: {
                    children: new ContentChildren(RowDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
RowsDirective.ctorParameters = () => [];

let input$2 = ['customWidth', 'index', 'width'];
let outputs$2 = [];
/**
 * `e-column` directive represent a column of the Angular Spreadsheet.
 * It must be contained in a `e-sheet` directive.
 * ```html
 * <ejs-spreadsheet>
 *   <e-sheets>
 *    <e-sheet>
 *    <e-columns>
 *    <e-column width='100'></e-column>
 *    </e-columns>
 *    </e-sheet>
 *   </e-sheets>
 * </ejs-spreadsheet>
 * ```
 */
class ColumnDirective extends ComplexBase {
    /**
     * @param {?} viewContainerRef
     */
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$2);
    }
}
ColumnDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-columns>e-column',
                inputs: input$2,
                outputs: outputs$2,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
ColumnDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
/**
 * Column Array Directive
 */
class ColumnsDirective extends ArrayBase {
    constructor() {
        super('columns');
    }
}
ColumnsDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-sheet>e-columns',
                queries: {
                    children: new ContentChildren(ColumnDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
ColumnsDirective.ctorParameters = () => [];

let input$3 = ['dataSource', 'query', 'showFieldAsHeader', 'startCell'];
let outputs$3 = [];
/**
 * `e-rangesetting` directive represent a range setting of the Angular Spreadsheet.
 * It must be contained in a `e-sheet` directive.
 * ```html
 * <ejs-spreadsheet>
 *   <e-sheets>
 *    <e-sheet>
 *    <e-rangesettings>
 *    <e-rangesetting [dataSource]='data'></e-rangesetting>
 *    </e-rangesettings>
 *    </e-sheet>
 *   </e-sheets>
 * </ejs-spreadsheet>
 * ```
 */
class RangeSettingDirective extends ComplexBase {
    /**
     * @param {?} viewContainerRef
     */
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$3);
    }
}
RangeSettingDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-rangesettings>e-rangesetting',
                inputs: input$3,
                outputs: outputs$3,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
RangeSettingDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
/**
 * RangeSetting Array Directive
 */
class RangeSettingsDirective extends ArrayBase {
    constructor() {
        super('rangesettings');
    }
}
RangeSettingsDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-sheet>e-rangesettings',
                queries: {
                    children: new ContentChildren(RangeSettingDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
RangeSettingsDirective.ctorParameters = () => [];

let input$4 = ['activeCell', 'colCount', 'columns', 'index', 'name', 'rangeSettings', 'rowCount', 'rows', 'selectedRange', 'showGridLines', 'showHeaders', 'topLeftCell', 'usedRange'];
let outputs$4 = [];
/**
 * `e-sheet` directive represent a sheet of the Angular Spreadsheet.
 * It must be contained in a Spreadsheet component(`ejs-spreadsheet`).
 * ```html
 * <ejs-spreadsheet>
 *   <e-sheets>
 *    <e-sheet></e-sheet>
 *    <e-sheet></e-sheet>
 *   </e-sheets>
 * </ejs-spreadsheet>
 * ```
 */
class SheetDirective extends ComplexBase {
    /**
     * @param {?} viewContainerRef
     */
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        this.tags = ['rows', 'columns', 'rangeSettings'];
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$4);
    }
}
SheetDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-sheets>e-sheet',
                inputs: input$4,
                outputs: outputs$4,
                queries: {
                    childRows: new ContentChild(RowsDirective),
                    childColumns: new ContentChild(ColumnsDirective),
                    childRangeSettings: new ContentChild(RangeSettingsDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
SheetDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
/**
 * Sheet Array Directive
 */
class SheetsDirective extends ArrayBase {
    constructor() {
        super('sheets');
    }
}
SheetsDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-spreadsheet>e-sheets',
                queries: {
                    children: new ContentChildren(SheetDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
SheetsDirective.ctorParameters = () => [];

let input$5 = ['comment', 'name', 'refersTo', 'scope'];
let outputs$5 = [];
/**
 * `e-definedname` directive represent a defined name of the Angular Spreadsheet.
 * It must be contained in a Spreadsheet component(`ejs-spreadsheet`).
 * ```html
 * <ejs-spreadsheet>
 *   <e-definednames>
 *    <e-definedname></e-definedname>
 *    <e-definedname></e-definedname>
 *   </e-definednames>
 * </ejs-spreadsheet>
 * ```
 */
class DefinedNameDirective extends ComplexBase {
    /**
     * @param {?} viewContainerRef
     */
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$5);
    }
}
DefinedNameDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-definednames>e-definedname',
                inputs: input$5,
                outputs: outputs$5,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
DefinedNameDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
/**
 * DefinedName Array Directive
 */
class DefinedNamesDirective extends ArrayBase {
    constructor() {
        super('definednames');
    }
}
DefinedNamesDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-spreadsheet>e-definednames',
                queries: {
                    children: new ContentChildren(DefinedNameDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
DefinedNamesDirective.ctorParameters = () => [];

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const inputs = ['activeSheetTab', 'allowCellFormatting', 'allowEditing', 'allowFiltering', 'allowHyperlink', 'allowNumberFormatting', 'allowOpen', 'allowResizing', 'allowSave', 'allowScrolling', 'allowSorting', 'allowUndoRedo', 'cellStyle', 'cssClass', 'definedNames', 'enableClipboard', 'enableContextMenu', 'enableKeyboardNavigation', 'enableKeyboardShortcut', 'enablePersistence', 'enableRtl', 'height', 'locale', 'openUrl', 'saveUrl', 'scrollSettings', 'selectionSettings', 'sheets', 'showFormulaBar', 'showRibbon', 'showSheetTabs', 'width'];
const outputs$6 = ['actionBegin', 'actionComplete', 'afterHyperlinkClick', 'afterHyperlinkCreate', 'beforeCellFormat', 'beforeCellRender', 'beforeDataBound', 'beforeHyperlinkClick', 'beforeHyperlinkCreate', 'beforeOpen', 'beforeSave', 'beforeSelect', 'beforeSort', 'cellEdit', 'cellEditing', 'cellSave', 'contextMenuBeforeClose', 'contextMenuBeforeOpen', 'contextMenuItemSelect', 'created', 'dataBound', 'fileItemSelect', 'fileMenuBeforeClose', 'fileMenuBeforeOpen', 'openComplete', 'openFailure', 'saveComplete', 'select', 'sortComplete'];
const twoWays = [''];
/**
 * `ejs-spreadsheet` represents the Angular Spreadsheet Component.
 * ```html
 * <ejs-spreadsheet></ejs-spreadsheet>
 * ```
 */
let SpreadsheetComponent = class SpreadsheetComponent extends Spreadsheet {
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.tags = ['sheets', 'definedNames'];
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
            let mod = this.injector.get('SpreadsheetClipboard');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_a) { }
        try {
            let mod = this.injector.get('SpreadsheetEdit');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_b) { }
        try {
            let mod = this.injector.get('SpreadsheetKeyboardNavigation');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_c) { }
        try {
            let mod = this.injector.get('SpreadsheetKeyboardShortcut');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_d) { }
        try {
            let mod = this.injector.get('SpreadsheetCollaborativeEditing');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_e) { }
        try {
            let mod = this.injector.get('SpreadsheetSelection');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_f) { }
        try {
            let mod = this.injector.get('SpreadsheetContextMenu');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_g) { }
        try {
            let mod = this.injector.get('SpreadsheetFormulaBar');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_h) { }
        try {
            let mod = this.injector.get('SpreadsheetRibbon');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_j) { }
        try {
            let mod = this.injector.get('SpreadsheetSave');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_k) { }
        try {
            let mod = this.injector.get('SpreadsheetOpen');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_l) { }
        try {
            let mod = this.injector.get('SpreadsheetSheetTabs');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_m) { }
        try {
            let mod = this.injector.get('SpreadsheetDataBind');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_o) { }
        try {
            let mod = this.injector.get('SpreadsheetAllModule');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_p) { }
        try {
            let mod = this.injector.get('SpreadsheetBasicModule');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_q) { }
        try {
            let mod = this.injector.get('SpreadsheetCellFormat');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_r) { }
        try {
            let mod = this.injector.get('SpreadsheetNumberFormat');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_s) { }
        try {
            let mod = this.injector.get('SpreadsheetFormula');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_t) { }
        this.registerEvents(outputs$6);
        this.addTwoWay.call(this, twoWays);
        setValue('currentInstance', this, this.viewContainerRef);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
    }
};
SpreadsheetComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-spreadsheet',
                inputs: inputs,
                outputs: outputs$6,
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                queries: {
                    childSheets: new ContentChild(SheetsDirective),
                    childDefinedNames: new ContentChild(DefinedNamesDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
SpreadsheetComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
];
SpreadsheetComponent.propDecorators = {
    'template': [{ type: ContentChild, args: ['template',] },],
};
__decorate([
    Template(),
    __metadata("design:type", Object)
], SpreadsheetComponent.prototype, "template", void 0);
SpreadsheetComponent = __decorate([
    ComponentMixins([ComponentBase]),
    __metadata("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], SpreadsheetComponent);

/**
 * NgModule definition for the Spreadsheet component.
 */
class SpreadsheetModule {
}
SpreadsheetModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    SpreadsheetComponent,
                    CellDirective,
                    CellsDirective,
                    RowDirective,
                    RowsDirective,
                    ColumnDirective,
                    ColumnsDirective,
                    RangeSettingDirective,
                    RangeSettingsDirective,
                    SheetDirective,
                    SheetsDirective,
                    DefinedNameDirective,
                    DefinedNamesDirective
                ],
                exports: [
                    SpreadsheetComponent,
                    CellDirective,
                    CellsDirective,
                    RowDirective,
                    RowsDirective,
                    ColumnDirective,
                    ColumnsDirective,
                    RangeSettingDirective,
                    RangeSettingsDirective,
                    SheetDirective,
                    SheetsDirective,
                    DefinedNameDirective,
                    DefinedNamesDirective
                ]
            },] },
];
/**
 * @nocollapse
 */
SpreadsheetModule.ctorParameters = () => [];

const ClipboardService = { provide: 'SpreadsheetClipboard', useValue: Clipboard };
const EditService = { provide: 'SpreadsheetEdit', useValue: Edit };
const KeyboardNavigationService = { provide: 'SpreadsheetKeyboardNavigation', useValue: KeyboardNavigation };
const KeyboardShortcutService = { provide: 'SpreadsheetKeyboardShortcut', useValue: KeyboardShortcut };
const CollaborativeEditingService = { provide: 'SpreadsheetCollaborativeEditing', useValue: CollaborativeEditing };
const SelectionService = { provide: 'SpreadsheetSelection', useValue: Selection };
const ContextMenuService = { provide: 'SpreadsheetContextMenu', useValue: ContextMenu };
const FormulaBarService = { provide: 'SpreadsheetFormulaBar', useValue: FormulaBar };
const RibbonService = { provide: 'SpreadsheetRibbon', useValue: Ribbon };
const SaveService = { provide: 'SpreadsheetSave', useValue: Save };
const OpenService = { provide: 'SpreadsheetOpen', useValue: Open };
const SheetTabsService = { provide: 'SpreadsheetSheetTabs', useValue: SheetTabs };
const DataBindService = { provide: 'SpreadsheetDataBind', useValue: DataBind };
const AllModuleService = { provide: 'SpreadsheetAllModule', useValue: AllModule };
const BasicModuleService = { provide: 'SpreadsheetBasicModule', useValue: BasicModule };
const CellFormatService = { provide: 'SpreadsheetCellFormat', useValue: CellFormat };
const NumberFormatService = { provide: 'SpreadsheetNumberFormat', useValue: NumberFormat };
const FormulaService = { provide: 'SpreadsheetFormula', useValue: Formula };
/**
 * NgModule definition for the Spreadsheet component with providers.
 */
class SpreadsheetAllModule {
}
SpreadsheetAllModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, SpreadsheetModule],
                exports: [
                    SpreadsheetModule
                ],
                providers: [
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
            },] },
];
/**
 * @nocollapse
 */
SpreadsheetAllModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { CellDirective, CellsDirective, RowDirective, RowsDirective, ColumnDirective, ColumnsDirective, RangeSettingDirective, RangeSettingsDirective, SheetDirective, SheetsDirective, DefinedNameDirective, DefinedNamesDirective, SpreadsheetComponent, SpreadsheetModule, SpreadsheetAllModule, ClipboardService, EditService, KeyboardNavigationService, KeyboardShortcutService, CollaborativeEditingService, SelectionService, ContextMenuService, FormulaBarService, RibbonService, SaveService, OpenService, SheetTabsService, DataBindService, AllModuleService, BasicModuleService, CellFormatService, NumberFormatService, FormulaService, inputs as ɵa, outputs$6 as ɵb };
export { Workbook, RangeSetting, UsedRange, Sheet, getSheetIndex, getSheetIndexFromId, getSheetNameFromAddress, getSheetIndexByName, updateSelectedRange, getSelectedRange, getSheet, getSheetNameCount, getMaxSheetId, initSheet, getSheetName, Row, getRow, setRow, isHiddenRow, getRowHeight, setRowHeight, getRowsHeight, Column, getColumn, getColumnWidth, getColumnsWidth, isHiddenCol, Cell, getCell, setCell, getCellPosition, skipDefaultValue, getData, getModel, processIdx, clearRange, getRangeIndexes, getCellIndexes, getCellAddress, getRangeAddress, getColumnHeaderText, getIndexesFromAddress, getRangeFromAddress, getSwapRange, isSingleCell, executeTaskAsync, WorkbookBasicModule, WorkbookAllModule, getWorkbookRequiredModules, CellStyle, DefineName, Hyperlink, workbookDestroyed, updateSheetFromDataSource, dataSourceChanged, workbookOpen, beginSave, saveCompleted, applyNumberFormatting, getFormattedCellObject, refreshCellElement, setCellFormat, textDecorationUpdate, applyCellFormat, updateUsedRange, workbookFormulaOperation, workbookEditOperation, checkDateFormat, getFormattedBarText, activeCellChanged, openSuccess, openFailure, sheetCreated, sheetsDestroyed, aggregateComputation, beforeSort, initiateSort, sortComplete, sortRangeAlert, initiatelink, beforeHyperlinkCreate, afterHyperlinkCreate, beforeHyperlinkClick, afterHyperlinkClick, addHyperlink, setLinkModel, beforeFilter, initiateFilter, filterComplete, filterRangeAlert, clearAllFilter, checkIsFormula, toFraction, getGcd, intToDate, dateToInt, isDateTime, isNumber, toDate, workbookLocale, localeData, DataBind, WorkbookOpen, WorkbookSave, WorkbookFormula, WorkbookNumberFormat, getFormatFromType, getTypeFromFormat, WorkbookSort, WorkbookFilter, WorkbookCellFormat, WorkbookEdit, WorkbookHyperlink, getRequiredModules, ribbon, formulaBar, sheetTabs, refreshSheetTabs, dataRefresh, initialLoad, contentLoaded, mouseDown, spreadsheetDestroyed, editOperation, formulaOperation, formulaBarOperation, click, keyUp, keyDown, formulaKeyUp, formulaBarUpdate, onVerticalScroll, onHorizontalScroll, beforeContentLoaded, beforeVirtualContentLoaded, virtualContentLoaded, contextMenuOpen, cellNavigate, mouseUpAfterSelection, selectionComplete, cMenuBeforeOpen, addSheetTab, removeSheetTab, renameSheetTab, ribbonClick, refreshRibbon, enableRibbonItems, tabSwitch, selectRange, cut, copy, paste, clearCopy, dataBound, beforeDataBound, addContextMenuItems, removeContextMenuItems, enableContextMenuItems, beforeRibbonCreate, rowHeightChanged, colWidthChanged, beforeHeaderLoaded, onContentScroll, deInitProperties, activeSheetChanged, renameSheet, enableToolbar, initiateCustomSort, applySort, collaborativeUpdate, hideShowRow, hideShowCol, autoFit, updateToggleItem, initiateHyperlink, editHyperlink, openHyperlink, removeHyperlink, createHyperlinkElement, sheetNameUpdate, performUndoRedo, updateUndoRedoCollection, setActionData, getBeforeActionData, clearUndoRedoCollection, initiateFilterUI, renderFilterCell, reapplyFilter, filterByCellValue, clearFilter, getFilteredColumn, completeAction, beginAction, getFilterRange, filterCellKeyDown, getUpdateUsingRaf, removeAllChildren, getColGroupWidth, getScrollBarWidth, getSiblingsHeight, inView, locateElem, setStyleAttribute, getStartEvent, getMoveEvent, getEndEvent, isTouchStart, isTouchMove, isTouchEnd, getClientX, getClientY, setAriaOptions, destroyComponent, setResize, setWidthAndHeight, findMaxValue, updateAction, BasicModule, AllModule, ScrollSettings, SelectionSettings, DISABLED, locale, dialog, actionEvents, fontColor, fillColor, defaultLocale, Spreadsheet, Clipboard, Edit, Selection, Scroll, VirtualScroll, KeyboardNavigation, KeyboardShortcut, CellFormat, Resize, CollaborativeEditing, ShowHide, SpreadsheetHyperlink, UndoRedo, Ribbon, FormulaBar, Formula, SheetTabs, Open, Save, ContextMenu, NumberFormat, Sort, Filter, Render, SheetRender, RowRenderer, CellRenderer, Calculate, FormulaError, FormulaInfo, CalcSheetFamilyItem, getAlphalabel, ValueChangedArgs, Parser, CalculateCommon, isUndefined, getModules, getValue, setValue, ModuleLoader, CommonErrors, FormulasErrorsStrings, BasicFormulas } from '@syncfusion/ej2-spreadsheet';
//# sourceMappingURL=ej2-angular-spreadsheet.js.map
