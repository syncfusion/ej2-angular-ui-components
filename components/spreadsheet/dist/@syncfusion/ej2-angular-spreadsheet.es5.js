var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { ChangeDetectionStrategy, Component, ContentChild, ContentChildren, Directive, ElementRef, Injector, NgModule, Renderer2, ViewContainerRef } from '@angular/core';
import { ArrayBase, ComplexBase, ComponentBase, ComponentMixins, Template, setValue } from '@syncfusion/ej2-angular-base';
import { AllModule, BasicModule, CellFormat, Clipboard, CollaborativeEditing, ContextMenu, DataBind, Edit, Formula, FormulaBar, KeyboardNavigation, KeyboardShortcut, NumberFormat, Open, Ribbon, Save, Selection, SheetTabs, Spreadsheet } from '@syncfusion/ej2-spreadsheet';
import { CommonModule } from '@angular/common';
var input = ['format', 'formula', 'hyperlink', 'index', 'style', 'value'];
var outputs = [];
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
var CellDirective = /** @class */ (function (_super) {
    __extends(CellDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function CellDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs);
        _this.directivePropList = input;
        return _this;
    }
    return CellDirective;
}(ComplexBase));
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
CellDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
]; };
/**
 * Cell Array Directive
 */
var CellsDirective = /** @class */ (function (_super) {
    __extends(CellsDirective, _super);
    function CellsDirective() {
        return _super.call(this, 'cells') || this;
    }
    return CellsDirective;
}(ArrayBase));
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
CellsDirective.ctorParameters = function () { return []; };
var input$1 = ['cells', 'customHeight', 'height', 'index'];
var outputs$1 = [];
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
var RowDirective = /** @class */ (function (_super) {
    __extends(RowDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function RowDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        _this.tags = ['cells'];
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$1);
        _this.directivePropList = input$1;
        return _this;
    }
    return RowDirective;
}(ComplexBase));
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
RowDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
]; };
/**
 * Row Array Directive
 */
var RowsDirective = /** @class */ (function (_super) {
    __extends(RowsDirective, _super);
    function RowsDirective() {
        return _super.call(this, 'rows') || this;
    }
    return RowsDirective;
}(ArrayBase));
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
RowsDirective.ctorParameters = function () { return []; };
var input$2 = ['customWidth', 'index', 'width'];
var outputs$2 = [];
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
var ColumnDirective = /** @class */ (function (_super) {
    __extends(ColumnDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function ColumnDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$2);
        _this.directivePropList = input$2;
        return _this;
    }
    return ColumnDirective;
}(ComplexBase));
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
ColumnDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
]; };
/**
 * Column Array Directive
 */
var ColumnsDirective = /** @class */ (function (_super) {
    __extends(ColumnsDirective, _super);
    function ColumnsDirective() {
        return _super.call(this, 'columns') || this;
    }
    return ColumnsDirective;
}(ArrayBase));
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
ColumnsDirective.ctorParameters = function () { return []; };
var input$3 = ['dataSource', 'query', 'range', 'showFieldAsHeader', 'startCell', 'template'];
var outputs$3 = [];
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
var RangeSettingDirective = /** @class */ (function (_super) {
    __extends(RangeSettingDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function RangeSettingDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$3);
        _this.directivePropList = input$3;
        return _this;
    }
    return RangeSettingDirective;
}(ComplexBase));
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
RangeSettingDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
]; };
/**
 * RangeSetting Array Directive
 */
var RangeSettingsDirective = /** @class */ (function (_super) {
    __extends(RangeSettingsDirective, _super);
    function RangeSettingsDirective() {
        return _super.call(this, 'rangesettings') || this;
    }
    return RangeSettingsDirective;
}(ArrayBase));
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
RangeSettingsDirective.ctorParameters = function () { return []; };
var input$4 = ['activeCell', 'colCount', 'columns', 'index', 'name', 'rangeSettings', 'rowCount', 'rows', 'selectedRange', 'showGridLines', 'showHeaders', 'state', 'topLeftCell', 'usedRange'];
var outputs$4 = [];
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
var SheetDirective = /** @class */ (function (_super) {
    __extends(SheetDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function SheetDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        _this.tags = ['rows', 'columns', 'rangeSettings'];
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$4);
        _this.directivePropList = input$4;
        return _this;
    }
    return SheetDirective;
}(ComplexBase));
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
SheetDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
]; };
/**
 * Sheet Array Directive
 */
var SheetsDirective = /** @class */ (function (_super) {
    __extends(SheetsDirective, _super);
    function SheetsDirective() {
        return _super.call(this, 'sheets') || this;
    }
    return SheetsDirective;
}(ArrayBase));
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
SheetsDirective.ctorParameters = function () { return []; };
var input$5 = ['comment', 'name', 'refersTo', 'scope'];
var outputs$5 = [];
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
var DefinedNameDirective = /** @class */ (function (_super) {
    __extends(DefinedNameDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function DefinedNameDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$5);
        _this.directivePropList = input$5;
        return _this;
    }
    return DefinedNameDirective;
}(ComplexBase));
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
DefinedNameDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
]; };
/**
 * DefinedName Array Directive
 */
var DefinedNamesDirective = /** @class */ (function (_super) {
    __extends(DefinedNamesDirective, _super);
    function DefinedNamesDirective() {
        return _super.call(this, 'definednames') || this;
    }
    return DefinedNamesDirective;
}(ArrayBase));
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
DefinedNamesDirective.ctorParameters = function () { return []; };
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
var inputs = ['activeSheetTab', 'allowCellFormatting', 'allowEditing', 'allowFiltering', 'allowHyperlink', 'allowNumberFormatting', 'allowOpen', 'allowResizing', 'allowSave', 'allowScrolling', 'allowSorting', 'allowUndoRedo', 'cellStyle', 'cssClass', 'definedNames', 'enableClipboard', 'enableContextMenu', 'enableKeyboardNavigation', 'enableKeyboardShortcut', 'enablePersistence', 'enableRtl', 'height', 'locale', 'openUrl', 'saveUrl', 'scrollSettings', 'selectionSettings', 'sheets', 'showFormulaBar', 'showRibbon', 'showSheetTabs', 'width'];
var outputs$6 = ['actionBegin', 'actionComplete', 'afterHyperlinkClick', 'afterHyperlinkCreate', 'beforeCellFormat', 'beforeCellRender', 'beforeDataBound', 'beforeHyperlinkClick', 'beforeHyperlinkCreate', 'beforeOpen', 'beforeSave', 'beforeSelect', 'beforeSort', 'cellEdit', 'cellEditing', 'cellSave', 'contextMenuBeforeClose', 'contextMenuBeforeOpen', 'contextMenuItemSelect', 'created', 'dataBound', 'fileItemSelect', 'fileMenuBeforeClose', 'fileMenuBeforeOpen', 'openComplete', 'openFailure', 'saveComplete', 'select', 'sortComplete'];
var twoWays = [''];
/**
 * `ejs-spreadsheet` represents the Angular Spreadsheet Component.
 * ```html
 * <ejs-spreadsheet></ejs-spreadsheet>
 * ```
 */
var SpreadsheetComponent = /** @class */ (function (_super) {
    __extends(SpreadsheetComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function SpreadsheetComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.srenderer = srenderer;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.tags = ['sheets', 'definedNames'];
        _this.element = _this.ngEle.nativeElement;
        _this.injectedModules = _this.injectedModules || [];
        try {
            var mod = _this.injector.get('SpreadsheetClipboard');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_a) { }
        try {
            var mod = _this.injector.get('SpreadsheetEdit');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_b) { }
        try {
            var mod = _this.injector.get('SpreadsheetKeyboardNavigation');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_c) { }
        try {
            var mod = _this.injector.get('SpreadsheetKeyboardShortcut');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_d) { }
        try {
            var mod = _this.injector.get('SpreadsheetCollaborativeEditing');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_e) { }
        try {
            var mod = _this.injector.get('SpreadsheetSelection');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_f) { }
        try {
            var mod = _this.injector.get('SpreadsheetContextMenu');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_g) { }
        try {
            var mod = _this.injector.get('SpreadsheetFormulaBar');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_h) { }
        try {
            var mod = _this.injector.get('SpreadsheetRibbon');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_j) { }
        try {
            var mod = _this.injector.get('SpreadsheetSave');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_k) { }
        try {
            var mod = _this.injector.get('SpreadsheetOpen');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_l) { }
        try {
            var mod = _this.injector.get('SpreadsheetSheetTabs');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_m) { }
        try {
            var mod = _this.injector.get('SpreadsheetDataBind');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_o) { }
        try {
            var mod = _this.injector.get('SpreadsheetAllModule');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_p) { }
        try {
            var mod = _this.injector.get('SpreadsheetBasicModule');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_q) { }
        try {
            var mod = _this.injector.get('SpreadsheetCellFormat');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_r) { }
        try {
            var mod = _this.injector.get('SpreadsheetNumberFormat');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_s) { }
        try {
            var mod = _this.injector.get('SpreadsheetFormula');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_t) { }
        _this.registerEvents(outputs$6);
        _this.addTwoWay.call(_this, twoWays);
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.context = new ComponentBase();
        return _this;
    }
    /**
     * @return {?}
     */
    SpreadsheetComponent.prototype.ngOnInit = function () {
        this.context.ngOnInit(this);
    };
    /**
     * @return {?}
     */
    SpreadsheetComponent.prototype.ngAfterViewInit = function () {
        this.context.ngAfterViewInit(this);
    };
    /**
     * @return {?}
     */
    SpreadsheetComponent.prototype.ngOnDestroy = function () {
        this.context.ngOnDestroy(this);
    };
    /**
     * @return {?}
     */
    SpreadsheetComponent.prototype.ngAfterContentChecked = function () {
        this.tagObjects[0].instance = this.childSheets;
        if (this.childDefinedNames) {
            this.tagObjects[1].instance = ((this.childDefinedNames)).list[0].childSheets;
            for (var /** @type {?} */ d = 0; d < ((this.childDefinedNames)).list.length; d++) {
                if (((this.childDefinedNames)).list[d + 1]) {
                    this.tagObjects[1].instance.list.push(((this.childDefinedNames)).list[d + 1].childSheets.list[0]);
                }
            }
        }
        this.context.ngAfterContentChecked(this);
    };
    return SpreadsheetComponent;
}(Spreadsheet));
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
SpreadsheetComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
]; };
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
var SpreadsheetModule = /** @class */ (function () {
    function SpreadsheetModule() {
    }
    return SpreadsheetModule;
}());
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
SpreadsheetModule.ctorParameters = function () { return []; };
var ClipboardService = { provide: 'SpreadsheetClipboard', useValue: Clipboard };
var EditService = { provide: 'SpreadsheetEdit', useValue: Edit };
var KeyboardNavigationService = { provide: 'SpreadsheetKeyboardNavigation', useValue: KeyboardNavigation };
var KeyboardShortcutService = { provide: 'SpreadsheetKeyboardShortcut', useValue: KeyboardShortcut };
var CollaborativeEditingService = { provide: 'SpreadsheetCollaborativeEditing', useValue: CollaborativeEditing };
var SelectionService = { provide: 'SpreadsheetSelection', useValue: Selection };
var ContextMenuService = { provide: 'SpreadsheetContextMenu', useValue: ContextMenu };
var FormulaBarService = { provide: 'SpreadsheetFormulaBar', useValue: FormulaBar };
var RibbonService = { provide: 'SpreadsheetRibbon', useValue: Ribbon };
var SaveService = { provide: 'SpreadsheetSave', useValue: Save };
var OpenService = { provide: 'SpreadsheetOpen', useValue: Open };
var SheetTabsService = { provide: 'SpreadsheetSheetTabs', useValue: SheetTabs };
var DataBindService = { provide: 'SpreadsheetDataBind', useValue: DataBind };
var AllModuleService = { provide: 'SpreadsheetAllModule', useValue: AllModule };
var BasicModuleService = { provide: 'SpreadsheetBasicModule', useValue: BasicModule };
var CellFormatService = { provide: 'SpreadsheetCellFormat', useValue: CellFormat };
var NumberFormatService = { provide: 'SpreadsheetNumberFormat', useValue: NumberFormat };
var FormulaService = { provide: 'SpreadsheetFormula', useValue: Formula };
/**
 * NgModule definition for the Spreadsheet component with providers.
 */
var SpreadsheetAllModule = /** @class */ (function () {
    function SpreadsheetAllModule() {
    }
    return SpreadsheetAllModule;
}());
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
SpreadsheetAllModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */
export { CellDirective, CellsDirective, RowDirective, RowsDirective, ColumnDirective, ColumnsDirective, RangeSettingDirective, RangeSettingsDirective, SheetDirective, SheetsDirective, DefinedNameDirective, DefinedNamesDirective, SpreadsheetComponent, SpreadsheetModule, SpreadsheetAllModule, ClipboardService, EditService, KeyboardNavigationService, KeyboardShortcutService, CollaborativeEditingService, SelectionService, ContextMenuService, FormulaBarService, RibbonService, SaveService, OpenService, SheetTabsService, DataBindService, AllModuleService, BasicModuleService, CellFormatService, NumberFormatService, FormulaService, inputs as ɵa, outputs$6 as ɵb };
export { Workbook, RangeSetting, UsedRange, Sheet, getSheetIndex, getSheetIndexFromId, getSheetNameFromAddress, getSheetIndexByName, updateSelectedRange, getSelectedRange, getSheet, getSheetNameCount, getMaxSheetId, initSheet, getSheetName, Row, getRow, setRow, isHiddenRow, getRowHeight, setRowHeight, getRowsHeight, Column, getColumn, getColumnWidth, getColumnsWidth, isHiddenCol, Cell, getCell, setCell, getCellPosition, skipDefaultValue, getData, getModel, processIdx, clearRange, getRangeIndexes, getCellIndexes, getColIndex, getCellAddress, getRangeAddress, getColumnHeaderText, getIndexesFromAddress, getRangeFromAddress, getSwapRange, isSingleCell, executeTaskAsync, WorkbookBasicModule, WorkbookAllModule, getWorkbookRequiredModules, CellStyle, DefineName, Hyperlink, workbookDestroyed, updateSheetFromDataSource, dataSourceChanged, workbookOpen, beginSave, saveCompleted, applyNumberFormatting, getFormattedCellObject, refreshCellElement, setCellFormat, textDecorationUpdate, applyCellFormat, updateUsedRange, workbookFormulaOperation, workbookEditOperation, checkDateFormat, getFormattedBarText, activeCellChanged, openSuccess, openFailure, sheetCreated, sheetsDestroyed, aggregateComputation, beforeSort, initiateSort, sortComplete, sortRangeAlert, initiatelink, beforeHyperlinkCreate, afterHyperlinkCreate, beforeHyperlinkClick, afterHyperlinkClick, addHyperlink, setLinkModel, beforeFilter, initiateFilter, filterComplete, filterRangeAlert, clearAllFilter, onSave, checkIsFormula, toFraction, getGcd, intToDate, dateToInt, isDateTime, isNumber, toDate, workbookLocale, localeData, DataBind, WorkbookOpen, WorkbookSave, WorkbookFormula, WorkbookNumberFormat, getFormatFromType, getTypeFromFormat, WorkbookSort, WorkbookFilter, WorkbookCellFormat, WorkbookEdit, WorkbookHyperlink, getRequiredModules, ribbon, formulaBar, sheetTabs, refreshSheetTabs, dataRefresh, initialLoad, contentLoaded, mouseDown, spreadsheetDestroyed, editOperation, formulaOperation, formulaBarOperation, click, keyUp, keyDown, formulaKeyUp, formulaBarUpdate, onVerticalScroll, onHorizontalScroll, beforeContentLoaded, beforeVirtualContentLoaded, virtualContentLoaded, contextMenuOpen, cellNavigate, mouseUpAfterSelection, selectionComplete, cMenuBeforeOpen, addSheetTab, removeSheetTab, renameSheetTab, ribbonClick, refreshRibbon, enableToolbarItems, tabSwitch, selectRange, cut, copy, paste, clearCopy, dataBound, beforeDataBound, addContextMenuItems, removeContextMenuItems, enableContextMenuItems, enableFileMenuItems, hideFileMenuItems, addFileMenuItems, hideRibbonTabs, enableRibbonTabs, addRibbonTabs, addToolbarItems, hideToolbarItems, beforeRibbonCreate, rowHeightChanged, colWidthChanged, beforeHeaderLoaded, onContentScroll, deInitProperties, activeSheetChanged, renameSheet, initiateCustomSort, applySort, collaborativeUpdate, hideShowRow, hideShowCol, autoFit, updateToggleItem, initiateHyperlink, editHyperlink, openHyperlink, removeHyperlink, createHyperlinkElement, sheetNameUpdate, hideSheet, performUndoRedo, updateUndoRedoCollection, setActionData, getBeforeActionData, clearUndoRedoCollection, initiateFilterUI, renderFilterCell, reapplyFilter, filterByCellValue, clearFilter, getFilteredColumn, completeAction, beginAction, filterCellKeyDown, getFilterRange, setAutoFit, refreshFormulaDatasource, getUpdateUsingRaf, removeAllChildren, getColGroupWidth, getScrollBarWidth, getSiblingsHeight, inView, locateElem, setStyleAttribute, getStartEvent, getMoveEvent, getEndEvent, isTouchStart, isTouchMove, isTouchEnd, getClientX, getClientY, setAriaOptions, destroyComponent, setResize, setWidthAndHeight, findMaxValue, updateAction, hasTemplate, BasicModule, AllModule, ScrollSettings, SelectionSettings, DISABLED, locale, dialog, actionEvents, fontColor, fillColor, defaultLocale, Spreadsheet, Clipboard, Edit, Selection, Scroll, VirtualScroll, KeyboardNavigation, KeyboardShortcut, CellFormat, Resize, CollaborativeEditing, ShowHide, SpreadsheetHyperlink, UndoRedo, Ribbon, FormulaBar, Formula, SheetTabs, Open, Save, ContextMenu, NumberFormat, Sort, Filter, Render, SheetRender, RowRenderer, CellRenderer, Calculate, FormulaError, FormulaInfo, CalcSheetFamilyItem, getAlphalabel, ValueChangedArgs, Parser, CalculateCommon, isUndefined, getModules, getValue, setValue, ModuleLoader, CommonErrors, FormulasErrorsStrings, BasicFormulas } from '@syncfusion/ej2-spreadsheet';
//# sourceMappingURL=ej2-angular-spreadsheet.es5.js.map
