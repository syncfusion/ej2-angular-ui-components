(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@syncfusion/ej2-angular-base'), require('@syncfusion/ej2-spreadsheet'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@syncfusion/ej2-angular-base', '@syncfusion/ej2-spreadsheet', '@angular/common'], factory) :
	(factory((global['ej2-angular-spreadsheet'] = {}),global.ng.core,global.ej2.angular.base,global.ej2.spreadsheet,global.ng.common));
}(this, (function (exports,core,ej2AngularBase,ej2Spreadsheet,common) { 'use strict';

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
var input = ['colSpan', 'format', 'formula', 'hyperlink', 'index', 'isLocked', 'rowSpan', 'style', 'validation', 'value', 'wrap'];
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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs);
        _this.directivePropList = input;
        return _this;
    }
    return CellDirective;
}(ej2AngularBase.ComplexBase));
CellDirective.decorators = [
    { type: core.Directive, args: [{
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
    { type: core.ViewContainerRef, },
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
}(ej2AngularBase.ArrayBase));
CellsDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'e-row>e-cells',
                queries: {
                    children: new core.ContentChildren(CellDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
CellsDirective.ctorParameters = function () { return []; };
var input$1 = ['cells', 'customHeight', 'height', 'hidden', 'index'];
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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$1);
        _this.directivePropList = input$1;
        return _this;
    }
    return RowDirective;
}(ej2AngularBase.ComplexBase));
RowDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'e-rows>e-row',
                inputs: input$1,
                outputs: outputs$1,
                queries: {
                    childCells: new core.ContentChild(CellsDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
RowDirective.ctorParameters = function () { return [
    { type: core.ViewContainerRef, },
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
}(ej2AngularBase.ArrayBase));
RowsDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'e-sheet>e-rows',
                queries: {
                    children: new core.ContentChildren(RowDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
RowsDirective.ctorParameters = function () { return []; };
var input$2 = ['customWidth', 'hidden', 'index', 'width'];
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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$2);
        _this.directivePropList = input$2;
        return _this;
    }
    return ColumnDirective;
}(ej2AngularBase.ComplexBase));
ColumnDirective.decorators = [
    { type: core.Directive, args: [{
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
    { type: core.ViewContainerRef, },
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
}(ej2AngularBase.ArrayBase));
ColumnsDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'e-sheet>e-columns',
                queries: {
                    children: new core.ContentChildren(ColumnDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
ColumnsDirective.ctorParameters = function () { return []; };
var input$3 = ['address', 'dataSource', 'query', 'showFieldAsHeader', 'startCell', 'template'];
var outputs$3 = [];
/**
 * `e-range` directive represent a range of the Angular Spreadsheet.
 * It must be contained in a `e-sheet` directive.
 * ```html
 * <ejs-spreadsheet>
 *   <e-sheets>
 *    <e-sheet>
 *    <e-ranges>
 *    <e-range [dataSource]='data'></e-range>
 *    </e-ranges>
 *    </e-sheet>
 *   </e-sheets>
 * </ejs-spreadsheet>
 * ```
 */
var RangeDirective = /** @class */ (function (_super) {
    __extends(RangeDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function RangeDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$3);
        _this.directivePropList = input$3;
        return _this;
    }
    return RangeDirective;
}(ej2AngularBase.ComplexBase));
RangeDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'e-ranges>e-range',
                inputs: input$3,
                outputs: outputs$3,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
RangeDirective.ctorParameters = function () { return [
    { type: core.ViewContainerRef, },
]; };
/**
 * Range Array Directive
 */
var RangesDirective = /** @class */ (function (_super) {
    __extends(RangesDirective, _super);
    function RangesDirective() {
        return _super.call(this, 'ranges') || this;
    }
    return RangesDirective;
}(ej2AngularBase.ArrayBase));
RangesDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'e-sheet>e-ranges',
                queries: {
                    children: new core.ContentChildren(RangeDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
RangesDirective.ctorParameters = function () { return []; };
var input$4 = ['activeCell', 'colCount', 'columns', 'index', 'isProtected', 'name', 'protectSettings', 'ranges', 'rowCount', 'rows', 'selectedRange', 'showGridLines', 'showHeaders', 'state', 'topLeftCell', 'usedRange'];
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
        _this.tags = ['rows', 'columns', 'ranges'];
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$4);
        _this.directivePropList = input$4;
        return _this;
    }
    return SheetDirective;
}(ej2AngularBase.ComplexBase));
SheetDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'e-sheets>e-sheet',
                inputs: input$4,
                outputs: outputs$4,
                queries: {
                    childRows: new core.ContentChild(RowsDirective),
                    childColumns: new core.ContentChild(ColumnsDirective),
                    childRanges: new core.ContentChild(RangesDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
SheetDirective.ctorParameters = function () { return [
    { type: core.ViewContainerRef, },
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
}(ej2AngularBase.ArrayBase));
SheetsDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'ejs-spreadsheet>e-sheets',
                queries: {
                    children: new core.ContentChildren(SheetDirective)
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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$5);
        _this.directivePropList = input$5;
        return _this;
    }
    return DefinedNameDirective;
}(ej2AngularBase.ComplexBase));
DefinedNameDirective.decorators = [
    { type: core.Directive, args: [{
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
    { type: core.ViewContainerRef, },
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
}(ej2AngularBase.ArrayBase));
DefinedNamesDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'ejs-spreadsheet>e-definednames',
                queries: {
                    children: new core.ContentChildren(DefinedNameDirective)
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
var inputs = ['activeSheetIndex', 'allowCellFormatting', 'allowDataValidation', 'allowDelete', 'allowEditing', 'allowFiltering', 'allowFindAndReplace', 'allowHyperlink', 'allowInsert', 'allowMerge', 'allowNumberFormatting', 'allowOpen', 'allowResizing', 'allowSave', 'allowScrolling', 'allowSorting', 'allowUndoRedo', 'allowWrap', 'cellStyle', 'cssClass', 'definedNames', 'enableClipboard', 'enableContextMenu', 'enableKeyboardNavigation', 'enableKeyboardShortcut', 'enablePersistence', 'enableRtl', 'height', 'locale', 'openUrl', 'saveUrl', 'scrollSettings', 'selectionSettings', 'sheets', 'showFormulaBar', 'showRibbon', 'showSheetTabs', 'width'];
var outputs$6 = ['actionBegin', 'actionComplete', 'afterHyperlinkClick', 'afterHyperlinkCreate', 'beforeCellFormat', 'beforeCellRender', 'beforeCellSave', 'beforeDataBound', 'beforeHyperlinkClick', 'beforeHyperlinkCreate', 'beforeOpen', 'beforeSave', 'beforeSelect', 'beforeSort', 'cellEdit', 'cellEditing', 'cellSave', 'contextMenuBeforeClose', 'contextMenuBeforeOpen', 'contextMenuItemSelect', 'created', 'dataBound', 'fileMenuBeforeClose', 'fileMenuBeforeOpen', 'fileMenuItemSelect', 'openComplete', 'openFailure', 'queryCellInfo', 'saveComplete', 'select', 'sortComplete'];
var twoWays = [''];
/**
 * `ejs-spreadsheet` represents the Angular Spreadsheet Component.
 * ```html
 * <ejs-spreadsheet></ejs-spreadsheet>
 * ```
 */
exports.SpreadsheetComponent = /** @class */ (function (_super) {
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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.context = new ej2AngularBase.ComponentBase();
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
            this.tagObjects[1].instance = /** @type {?} */ (this.childDefinedNames);
        }
        this.context.ngAfterContentChecked(this);
    };
    return SpreadsheetComponent;
}(ej2Spreadsheet.Spreadsheet));
exports.SpreadsheetComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ejs-spreadsheet',
                inputs: inputs,
                outputs: outputs$6,
                template: '',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                queries: {
                    childSheets: new core.ContentChild(SheetsDirective),
                    childDefinedNames: new core.ContentChild(DefinedNamesDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
exports.SpreadsheetComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: core.ViewContainerRef, },
    { type: core.Injector, },
]; };
exports.SpreadsheetComponent.propDecorators = {
    'template': [{ type: core.ContentChild, args: ['template',] },],
};
__decorate([
    ej2AngularBase.Template(),
    __metadata("design:type", Object)
], exports.SpreadsheetComponent.prototype, "template", void 0);
exports.SpreadsheetComponent = __decorate([
    ej2AngularBase.ComponentMixins([ej2AngularBase.ComponentBase]),
    __metadata("design:paramtypes", [core.ElementRef,
        core.Renderer2,
        core.ViewContainerRef,
        core.Injector])
], exports.SpreadsheetComponent);
/**
 * NgModule definition for the Spreadsheet component.
 */
var SpreadsheetModule = /** @class */ (function () {
    function SpreadsheetModule() {
    }
    return SpreadsheetModule;
}());
SpreadsheetModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [
                    exports.SpreadsheetComponent,
                    CellDirective,
                    CellsDirective,
                    RowDirective,
                    RowsDirective,
                    ColumnDirective,
                    ColumnsDirective,
                    RangeDirective,
                    RangesDirective,
                    SheetDirective,
                    SheetsDirective,
                    DefinedNameDirective,
                    DefinedNamesDirective
                ],
                exports: [
                    exports.SpreadsheetComponent,
                    CellDirective,
                    CellsDirective,
                    RowDirective,
                    RowsDirective,
                    ColumnDirective,
                    ColumnsDirective,
                    RangeDirective,
                    RangesDirective,
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
var ClipboardService = { provide: 'SpreadsheetClipboard', useValue: ej2Spreadsheet.Clipboard };
var EditService = { provide: 'SpreadsheetEdit', useValue: ej2Spreadsheet.Edit };
var KeyboardNavigationService = { provide: 'SpreadsheetKeyboardNavigation', useValue: ej2Spreadsheet.KeyboardNavigation };
var KeyboardShortcutService = { provide: 'SpreadsheetKeyboardShortcut', useValue: ej2Spreadsheet.KeyboardShortcut };
var CollaborativeEditingService = { provide: 'SpreadsheetCollaborativeEditing', useValue: ej2Spreadsheet.CollaborativeEditing };
var SelectionService = { provide: 'SpreadsheetSelection', useValue: ej2Spreadsheet.Selection };
var ContextMenuService = { provide: 'SpreadsheetContextMenu', useValue: ej2Spreadsheet.ContextMenu };
var FormulaBarService = { provide: 'SpreadsheetFormulaBar', useValue: ej2Spreadsheet.FormulaBar };
var RibbonService = { provide: 'SpreadsheetRibbon', useValue: ej2Spreadsheet.Ribbon };
var SaveService = { provide: 'SpreadsheetSave', useValue: ej2Spreadsheet.Save };
var OpenService = { provide: 'SpreadsheetOpen', useValue: ej2Spreadsheet.Open };
var SheetTabsService = { provide: 'SpreadsheetSheetTabs', useValue: ej2Spreadsheet.SheetTabs };
var DataBindService = { provide: 'SpreadsheetDataBind', useValue: ej2Spreadsheet.DataBind };
var AllModuleService = { provide: 'SpreadsheetAllModule', useValue: ej2Spreadsheet.AllModule };
var BasicModuleService = { provide: 'SpreadsheetBasicModule', useValue: ej2Spreadsheet.BasicModule };
var CellFormatService = { provide: 'SpreadsheetCellFormat', useValue: ej2Spreadsheet.CellFormat };
var NumberFormatService = { provide: 'SpreadsheetNumberFormat', useValue: ej2Spreadsheet.NumberFormat };
var FormulaService = { provide: 'SpreadsheetFormula', useValue: ej2Spreadsheet.Formula };
/**
 * NgModule definition for the Spreadsheet component with providers.
 */
var SpreadsheetAllModule = /** @class */ (function () {
    function SpreadsheetAllModule() {
    }
    return SpreadsheetAllModule;
}());
SpreadsheetAllModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule, SpreadsheetModule],
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

exports.CellDirective = CellDirective;
exports.CellsDirective = CellsDirective;
exports.RowDirective = RowDirective;
exports.RowsDirective = RowsDirective;
exports.ColumnDirective = ColumnDirective;
exports.ColumnsDirective = ColumnsDirective;
exports.RangeDirective = RangeDirective;
exports.RangesDirective = RangesDirective;
exports.SheetDirective = SheetDirective;
exports.SheetsDirective = SheetsDirective;
exports.DefinedNameDirective = DefinedNameDirective;
exports.DefinedNamesDirective = DefinedNamesDirective;
exports.SpreadsheetModule = SpreadsheetModule;
exports.SpreadsheetAllModule = SpreadsheetAllModule;
exports.ClipboardService = ClipboardService;
exports.EditService = EditService;
exports.KeyboardNavigationService = KeyboardNavigationService;
exports.KeyboardShortcutService = KeyboardShortcutService;
exports.CollaborativeEditingService = CollaborativeEditingService;
exports.SelectionService = SelectionService;
exports.ContextMenuService = ContextMenuService;
exports.FormulaBarService = FormulaBarService;
exports.RibbonService = RibbonService;
exports.SaveService = SaveService;
exports.OpenService = OpenService;
exports.SheetTabsService = SheetTabsService;
exports.DataBindService = DataBindService;
exports.AllModuleService = AllModuleService;
exports.BasicModuleService = BasicModuleService;
exports.CellFormatService = CellFormatService;
exports.NumberFormatService = NumberFormatService;
exports.FormulaService = FormulaService;
exports.ɵa = inputs;
exports.ɵb = outputs$6;
exports.Workbook = ej2Spreadsheet.Workbook;
exports.Range = ej2Spreadsheet.Range;
exports.UsedRange = ej2Spreadsheet.UsedRange;
exports.Sheet = ej2Spreadsheet.Sheet;
exports.getSheetIndex = ej2Spreadsheet.getSheetIndex;
exports.getSheetIndexFromId = ej2Spreadsheet.getSheetIndexFromId;
exports.getSheetNameFromAddress = ej2Spreadsheet.getSheetNameFromAddress;
exports.getSheetIndexByName = ej2Spreadsheet.getSheetIndexByName;
exports.updateSelectedRange = ej2Spreadsheet.updateSelectedRange;
exports.getSelectedRange = ej2Spreadsheet.getSelectedRange;
exports.getSheet = ej2Spreadsheet.getSheet;
exports.getSheetNameCount = ej2Spreadsheet.getSheetNameCount;
exports.getMaxSheetId = ej2Spreadsheet.getMaxSheetId;
exports.initSheet = ej2Spreadsheet.initSheet;
exports.getSheetName = ej2Spreadsheet.getSheetName;
exports.Row = ej2Spreadsheet.Row;
exports.getRow = ej2Spreadsheet.getRow;
exports.setRow = ej2Spreadsheet.setRow;
exports.isHiddenRow = ej2Spreadsheet.isHiddenRow;
exports.getRowHeight = ej2Spreadsheet.getRowHeight;
exports.setRowHeight = ej2Spreadsheet.setRowHeight;
exports.getRowsHeight = ej2Spreadsheet.getRowsHeight;
exports.Column = ej2Spreadsheet.Column;
exports.getColumn = ej2Spreadsheet.getColumn;
exports.setColumn = ej2Spreadsheet.setColumn;
exports.getColumnWidth = ej2Spreadsheet.getColumnWidth;
exports.getColumnsWidth = ej2Spreadsheet.getColumnsWidth;
exports.isHiddenCol = ej2Spreadsheet.isHiddenCol;
exports.Cell = ej2Spreadsheet.Cell;
exports.getCell = ej2Spreadsheet.getCell;
exports.setCell = ej2Spreadsheet.setCell;
exports.skipDefaultValue = ej2Spreadsheet.skipDefaultValue;
exports.wrap = ej2Spreadsheet.wrap;
exports.getData = ej2Spreadsheet.getData;
exports.getModel = ej2Spreadsheet.getModel;
exports.processIdx = ej2Spreadsheet.processIdx;
exports.clearRange = ej2Spreadsheet.clearRange;
exports.getRangeIndexes = ej2Spreadsheet.getRangeIndexes;
exports.getCellIndexes = ej2Spreadsheet.getCellIndexes;
exports.getColIndex = ej2Spreadsheet.getColIndex;
exports.getCellAddress = ej2Spreadsheet.getCellAddress;
exports.getRangeAddress = ej2Spreadsheet.getRangeAddress;
exports.getColumnHeaderText = ej2Spreadsheet.getColumnHeaderText;
exports.getIndexesFromAddress = ej2Spreadsheet.getIndexesFromAddress;
exports.getRangeFromAddress = ej2Spreadsheet.getRangeFromAddress;
exports.getAddressFromSelectedRange = ej2Spreadsheet.getAddressFromSelectedRange;
exports.getAddressInfo = ej2Spreadsheet.getAddressInfo;
exports.getSwapRange = ej2Spreadsheet.getSwapRange;
exports.isSingleCell = ej2Spreadsheet.isSingleCell;
exports.executeTaskAsync = ej2Spreadsheet.executeTaskAsync;
exports.WorkbookBasicModule = ej2Spreadsheet.WorkbookBasicModule;
exports.WorkbookAllModule = ej2Spreadsheet.WorkbookAllModule;
exports.getWorkbookRequiredModules = ej2Spreadsheet.getWorkbookRequiredModules;
exports.CellStyle = ej2Spreadsheet.CellStyle;
exports.DefineName = ej2Spreadsheet.DefineName;
exports.ProtectSettings = ej2Spreadsheet.ProtectSettings;
exports.Hyperlink = ej2Spreadsheet.Hyperlink;
exports.Validation = ej2Spreadsheet.Validation;
exports.workbookDestroyed = ej2Spreadsheet.workbookDestroyed;
exports.updateSheetFromDataSource = ej2Spreadsheet.updateSheetFromDataSource;
exports.dataSourceChanged = ej2Spreadsheet.dataSourceChanged;
exports.workbookOpen = ej2Spreadsheet.workbookOpen;
exports.beginSave = ej2Spreadsheet.beginSave;
exports.saveCompleted = ej2Spreadsheet.saveCompleted;
exports.applyNumberFormatting = ej2Spreadsheet.applyNumberFormatting;
exports.getFormattedCellObject = ej2Spreadsheet.getFormattedCellObject;
exports.refreshCellElement = ej2Spreadsheet.refreshCellElement;
exports.setCellFormat = ej2Spreadsheet.setCellFormat;
exports.findAllValues = ej2Spreadsheet.findAllValues;
exports.textDecorationUpdate = ej2Spreadsheet.textDecorationUpdate;
exports.applyCellFormat = ej2Spreadsheet.applyCellFormat;
exports.updateUsedRange = ej2Spreadsheet.updateUsedRange;
exports.workbookFormulaOperation = ej2Spreadsheet.workbookFormulaOperation;
exports.workbookEditOperation = ej2Spreadsheet.workbookEditOperation;
exports.checkDateFormat = ej2Spreadsheet.checkDateFormat;
exports.getFormattedBarText = ej2Spreadsheet.getFormattedBarText;
exports.activeCellChanged = ej2Spreadsheet.activeCellChanged;
exports.openSuccess = ej2Spreadsheet.openSuccess;
exports.openFailure = ej2Spreadsheet.openFailure;
exports.sheetCreated = ej2Spreadsheet.sheetCreated;
exports.sheetsDestroyed = ej2Spreadsheet.sheetsDestroyed;
exports.aggregateComputation = ej2Spreadsheet.aggregateComputation;
exports.beforeSort = ej2Spreadsheet.beforeSort;
exports.initiateSort = ej2Spreadsheet.initiateSort;
exports.sortComplete = ej2Spreadsheet.sortComplete;
exports.sortRangeAlert = ej2Spreadsheet.sortRangeAlert;
exports.initiatelink = ej2Spreadsheet.initiatelink;
exports.beforeHyperlinkCreate = ej2Spreadsheet.beforeHyperlinkCreate;
exports.afterHyperlinkCreate = ej2Spreadsheet.afterHyperlinkCreate;
exports.beforeHyperlinkClick = ej2Spreadsheet.beforeHyperlinkClick;
exports.afterHyperlinkClick = ej2Spreadsheet.afterHyperlinkClick;
exports.addHyperlink = ej2Spreadsheet.addHyperlink;
exports.setLinkModel = ej2Spreadsheet.setLinkModel;
exports.beforeFilter = ej2Spreadsheet.beforeFilter;
exports.initiateFilter = ej2Spreadsheet.initiateFilter;
exports.filterComplete = ej2Spreadsheet.filterComplete;
exports.filterRangeAlert = ej2Spreadsheet.filterRangeAlert;
exports.clearAllFilter = ej2Spreadsheet.clearAllFilter;
exports.wrapEvent = ej2Spreadsheet.wrapEvent;
exports.onSave = ej2Spreadsheet.onSave;
exports.insert = ej2Spreadsheet.insert;
exports.deleteAction = ej2Spreadsheet.deleteAction;
exports.insertModel = ej2Spreadsheet.insertModel;
exports.deleteModel = ej2Spreadsheet.deleteModel;
exports.isValidation = ej2Spreadsheet.isValidation;
exports.setValidation = ej2Spreadsheet.setValidation;
exports.addHighlight = ej2Spreadsheet.addHighlight;
exports.dataValidate = ej2Spreadsheet.dataValidate;
exports.findNext = ej2Spreadsheet.findNext;
exports.findPrevious = ej2Spreadsheet.findPrevious;
exports.goto = ej2Spreadsheet.goto;
exports.findWorkbookHandler = ej2Spreadsheet.findWorkbookHandler;
exports.replaceHandler = ej2Spreadsheet.replaceHandler;
exports.replaceAllHandler = ej2Spreadsheet.replaceAllHandler;
exports.showDialog = ej2Spreadsheet.showDialog;
exports.findUndoRedo = ej2Spreadsheet.findUndoRedo;
exports.findKeyUp = ej2Spreadsheet.findKeyUp;
exports.removeValidation = ej2Spreadsheet.removeValidation;
exports.removeHighlight = ej2Spreadsheet.removeHighlight;
exports.queryCellInfo = ej2Spreadsheet.queryCellInfo;
exports.count = ej2Spreadsheet.count;
exports.findCount = ej2Spreadsheet.findCount;
exports.protectSheetWorkBook = ej2Spreadsheet.protectSheetWorkBook;
exports.updateToggle = ej2Spreadsheet.updateToggle;
exports.protectsheetHandler = ej2Spreadsheet.protectsheetHandler;
exports.unprotectsheetHandler = ej2Spreadsheet.unprotectsheetHandler;
exports.replaceAllDialog = ej2Spreadsheet.replaceAllDialog;
exports.workBookeditAlert = ej2Spreadsheet.workBookeditAlert;
exports.setLockCells = ej2Spreadsheet.setLockCells;
exports.applyLockCells = ej2Spreadsheet.applyLockCells;
exports.setMerge = ej2Spreadsheet.setMerge;
exports.applyMerge = ej2Spreadsheet.applyMerge;
exports.mergedRange = ej2Spreadsheet.mergedRange;
exports.activeCellMergedRange = ej2Spreadsheet.activeCellMergedRange;
exports.insertMerge = ej2Spreadsheet.insertMerge;
exports.pasteMerge = ej2Spreadsheet.pasteMerge;
exports.checkIsFormula = ej2Spreadsheet.checkIsFormula;
exports.toFraction = ej2Spreadsheet.toFraction;
exports.getGcd = ej2Spreadsheet.getGcd;
exports.intToDate = ej2Spreadsheet.intToDate;
exports.dateToInt = ej2Spreadsheet.dateToInt;
exports.isDateTime = ej2Spreadsheet.isDateTime;
exports.isNumber = ej2Spreadsheet.isNumber;
exports.toDate = ej2Spreadsheet.toDate;
exports.workbookLocale = ej2Spreadsheet.workbookLocale;
exports.localeData = ej2Spreadsheet.localeData;
exports.DataBind = ej2Spreadsheet.DataBind;
exports.WorkbookOpen = ej2Spreadsheet.WorkbookOpen;
exports.WorkbookSave = ej2Spreadsheet.WorkbookSave;
exports.WorkbookFormula = ej2Spreadsheet.WorkbookFormula;
exports.WorkbookNumberFormat = ej2Spreadsheet.WorkbookNumberFormat;
exports.getFormatFromType = ej2Spreadsheet.getFormatFromType;
exports.getTypeFromFormat = ej2Spreadsheet.getTypeFromFormat;
exports.WorkbookSort = ej2Spreadsheet.WorkbookSort;
exports.WorkbookFilter = ej2Spreadsheet.WorkbookFilter;
exports.WorkbookCellFormat = ej2Spreadsheet.WorkbookCellFormat;
exports.WorkbookEdit = ej2Spreadsheet.WorkbookEdit;
exports.WorkbookHyperlink = ej2Spreadsheet.WorkbookHyperlink;
exports.WorkbookInsert = ej2Spreadsheet.WorkbookInsert;
exports.WorkbookDelete = ej2Spreadsheet.WorkbookDelete;
exports.WorkbookDataValidation = ej2Spreadsheet.WorkbookDataValidation;
exports.WorkbookFindAndReplace = ej2Spreadsheet.WorkbookFindAndReplace;
exports.WorkbookProtectSheet = ej2Spreadsheet.WorkbookProtectSheet;
exports.WorkbookMerge = ej2Spreadsheet.WorkbookMerge;
exports.getRequiredModules = ej2Spreadsheet.getRequiredModules;
exports.ribbon = ej2Spreadsheet.ribbon;
exports.formulaBar = ej2Spreadsheet.formulaBar;
exports.sheetTabs = ej2Spreadsheet.sheetTabs;
exports.refreshSheetTabs = ej2Spreadsheet.refreshSheetTabs;
exports.dataRefresh = ej2Spreadsheet.dataRefresh;
exports.initialLoad = ej2Spreadsheet.initialLoad;
exports.contentLoaded = ej2Spreadsheet.contentLoaded;
exports.mouseDown = ej2Spreadsheet.mouseDown;
exports.spreadsheetDestroyed = ej2Spreadsheet.spreadsheetDestroyed;
exports.editOperation = ej2Spreadsheet.editOperation;
exports.formulaOperation = ej2Spreadsheet.formulaOperation;
exports.formulaBarOperation = ej2Spreadsheet.formulaBarOperation;
exports.click = ej2Spreadsheet.click;
exports.keyUp = ej2Spreadsheet.keyUp;
exports.keyDown = ej2Spreadsheet.keyDown;
exports.formulaKeyUp = ej2Spreadsheet.formulaKeyUp;
exports.formulaBarUpdate = ej2Spreadsheet.formulaBarUpdate;
exports.onVerticalScroll = ej2Spreadsheet.onVerticalScroll;
exports.onHorizontalScroll = ej2Spreadsheet.onHorizontalScroll;
exports.beforeContentLoaded = ej2Spreadsheet.beforeContentLoaded;
exports.beforeVirtualContentLoaded = ej2Spreadsheet.beforeVirtualContentLoaded;
exports.virtualContentLoaded = ej2Spreadsheet.virtualContentLoaded;
exports.contextMenuOpen = ej2Spreadsheet.contextMenuOpen;
exports.cellNavigate = ej2Spreadsheet.cellNavigate;
exports.mouseUpAfterSelection = ej2Spreadsheet.mouseUpAfterSelection;
exports.selectionComplete = ej2Spreadsheet.selectionComplete;
exports.cMenuBeforeOpen = ej2Spreadsheet.cMenuBeforeOpen;
exports.insertSheetTab = ej2Spreadsheet.insertSheetTab;
exports.removeSheetTab = ej2Spreadsheet.removeSheetTab;
exports.renameSheetTab = ej2Spreadsheet.renameSheetTab;
exports.ribbonClick = ej2Spreadsheet.ribbonClick;
exports.refreshRibbon = ej2Spreadsheet.refreshRibbon;
exports.enableToolbarItems = ej2Spreadsheet.enableToolbarItems;
exports.tabSwitch = ej2Spreadsheet.tabSwitch;
exports.selectRange = ej2Spreadsheet.selectRange;
exports.cut = ej2Spreadsheet.cut;
exports.copy = ej2Spreadsheet.copy;
exports.paste = ej2Spreadsheet.paste;
exports.clearCopy = ej2Spreadsheet.clearCopy;
exports.dataBound = ej2Spreadsheet.dataBound;
exports.beforeDataBound = ej2Spreadsheet.beforeDataBound;
exports.addContextMenuItems = ej2Spreadsheet.addContextMenuItems;
exports.removeContextMenuItems = ej2Spreadsheet.removeContextMenuItems;
exports.enableContextMenuItems = ej2Spreadsheet.enableContextMenuItems;
exports.enableFileMenuItems = ej2Spreadsheet.enableFileMenuItems;
exports.hideFileMenuItems = ej2Spreadsheet.hideFileMenuItems;
exports.addFileMenuItems = ej2Spreadsheet.addFileMenuItems;
exports.hideRibbonTabs = ej2Spreadsheet.hideRibbonTabs;
exports.enableRibbonTabs = ej2Spreadsheet.enableRibbonTabs;
exports.addRibbonTabs = ej2Spreadsheet.addRibbonTabs;
exports.addToolbarItems = ej2Spreadsheet.addToolbarItems;
exports.hideToolbarItems = ej2Spreadsheet.hideToolbarItems;
exports.beforeRibbonCreate = ej2Spreadsheet.beforeRibbonCreate;
exports.rowHeightChanged = ej2Spreadsheet.rowHeightChanged;
exports.colWidthChanged = ej2Spreadsheet.colWidthChanged;
exports.beforeHeaderLoaded = ej2Spreadsheet.beforeHeaderLoaded;
exports.onContentScroll = ej2Spreadsheet.onContentScroll;
exports.deInitProperties = ej2Spreadsheet.deInitProperties;
exports.activeSheetChanged = ej2Spreadsheet.activeSheetChanged;
exports.renameSheet = ej2Spreadsheet.renameSheet;
exports.initiateCustomSort = ej2Spreadsheet.initiateCustomSort;
exports.applySort = ej2Spreadsheet.applySort;
exports.collaborativeUpdate = ej2Spreadsheet.collaborativeUpdate;
exports.hideShow = ej2Spreadsheet.hideShow;
exports.autoFit = ej2Spreadsheet.autoFit;
exports.updateToggleItem = ej2Spreadsheet.updateToggleItem;
exports.initiateHyperlink = ej2Spreadsheet.initiateHyperlink;
exports.editHyperlink = ej2Spreadsheet.editHyperlink;
exports.openHyperlink = ej2Spreadsheet.openHyperlink;
exports.removeHyperlink = ej2Spreadsheet.removeHyperlink;
exports.createHyperlinkElement = ej2Spreadsheet.createHyperlinkElement;
exports.sheetNameUpdate = ej2Spreadsheet.sheetNameUpdate;
exports.hideSheet = ej2Spreadsheet.hideSheet;
exports.performUndoRedo = ej2Spreadsheet.performUndoRedo;
exports.updateUndoRedoCollection = ej2Spreadsheet.updateUndoRedoCollection;
exports.setActionData = ej2Spreadsheet.setActionData;
exports.getBeforeActionData = ej2Spreadsheet.getBeforeActionData;
exports.clearUndoRedoCollection = ej2Spreadsheet.clearUndoRedoCollection;
exports.initiateFilterUI = ej2Spreadsheet.initiateFilterUI;
exports.renderFilterCell = ej2Spreadsheet.renderFilterCell;
exports.reapplyFilter = ej2Spreadsheet.reapplyFilter;
exports.filterByCellValue = ej2Spreadsheet.filterByCellValue;
exports.clearFilter = ej2Spreadsheet.clearFilter;
exports.getFilteredColumn = ej2Spreadsheet.getFilteredColumn;
exports.completeAction = ej2Spreadsheet.completeAction;
exports.beginAction = ej2Spreadsheet.beginAction;
exports.filterCellKeyDown = ej2Spreadsheet.filterCellKeyDown;
exports.getFilterRange = ej2Spreadsheet.getFilterRange;
exports.setAutoFit = ej2Spreadsheet.setAutoFit;
exports.refreshFormulaDatasource = ej2Spreadsheet.refreshFormulaDatasource;
exports.setScrollEvent = ej2Spreadsheet.setScrollEvent;
exports.initiateDataValidation = ej2Spreadsheet.initiateDataValidation;
exports.validationError = ej2Spreadsheet.validationError;
exports.startEdit = ej2Spreadsheet.startEdit;
exports.invalidData = ej2Spreadsheet.invalidData;
exports.clearInvalid = ej2Spreadsheet.clearInvalid;
exports.protectSheet = ej2Spreadsheet.protectSheet;
exports.unprotectSheet = ej2Spreadsheet.unprotectSheet;
exports.applyProtect = ej2Spreadsheet.applyProtect;
exports.protectCellFormat = ej2Spreadsheet.protectCellFormat;
exports.gotoDlg = ej2Spreadsheet.gotoDlg;
exports.findDlg = ej2Spreadsheet.findDlg;
exports.findHandler = ej2Spreadsheet.findHandler;
exports.replace = ej2Spreadsheet.replace;
exports.created = ej2Spreadsheet.created;
exports.editAlert = ej2Spreadsheet.editAlert;
exports.setUndoRedo = ej2Spreadsheet.setUndoRedo;
exports.enableFormulaInput = ej2Spreadsheet.enableFormulaInput;
exports.protectSelection = ej2Spreadsheet.protectSelection;
exports.hiddenMerge = ej2Spreadsheet.hiddenMerge;
exports.checkPrevMerge = ej2Spreadsheet.checkPrevMerge;
exports.checkMerge = ej2Spreadsheet.checkMerge;
exports.removeDataValidation = ej2Spreadsheet.removeDataValidation;
exports.getUpdateUsingRaf = ej2Spreadsheet.getUpdateUsingRaf;
exports.removeAllChildren = ej2Spreadsheet.removeAllChildren;
exports.getColGroupWidth = ej2Spreadsheet.getColGroupWidth;
exports.getScrollBarWidth = ej2Spreadsheet.getScrollBarWidth;
exports.getSiblingsHeight = ej2Spreadsheet.getSiblingsHeight;
exports.inView = ej2Spreadsheet.inView;
exports.getCellPosition = ej2Spreadsheet.getCellPosition;
exports.locateElem = ej2Spreadsheet.locateElem;
exports.setStyleAttribute = ej2Spreadsheet.setStyleAttribute;
exports.getStartEvent = ej2Spreadsheet.getStartEvent;
exports.getMoveEvent = ej2Spreadsheet.getMoveEvent;
exports.getEndEvent = ej2Spreadsheet.getEndEvent;
exports.isTouchStart = ej2Spreadsheet.isTouchStart;
exports.isTouchMove = ej2Spreadsheet.isTouchMove;
exports.isTouchEnd = ej2Spreadsheet.isTouchEnd;
exports.getClientX = ej2Spreadsheet.getClientX;
exports.getClientY = ej2Spreadsheet.getClientY;
exports.setAriaOptions = ej2Spreadsheet.setAriaOptions;
exports.destroyComponent = ej2Spreadsheet.destroyComponent;
exports.setResize = ej2Spreadsheet.setResize;
exports.setWidthAndHeight = ej2Spreadsheet.setWidthAndHeight;
exports.findMaxValue = ej2Spreadsheet.findMaxValue;
exports.updateAction = ej2Spreadsheet.updateAction;
exports.hasTemplate = ej2Spreadsheet.hasTemplate;
exports.setRowEleHeight = ej2Spreadsheet.setRowEleHeight;
exports.getTextHeight = ej2Spreadsheet.getTextHeight;
exports.getTextWidth = ej2Spreadsheet.getTextWidth;
exports.getLines = ej2Spreadsheet.getLines;
exports.setMaxHgt = ej2Spreadsheet.setMaxHgt;
exports.getMaxHgt = ej2Spreadsheet.getMaxHgt;
exports.skipHiddenIdx = ej2Spreadsheet.skipHiddenIdx;
exports.BasicModule = ej2Spreadsheet.BasicModule;
exports.AllModule = ej2Spreadsheet.AllModule;
exports.ScrollSettings = ej2Spreadsheet.ScrollSettings;
exports.SelectionSettings = ej2Spreadsheet.SelectionSettings;
exports.DISABLED = ej2Spreadsheet.DISABLED;
exports.WRAPTEXT = ej2Spreadsheet.WRAPTEXT;
exports.locale = ej2Spreadsheet.locale;
exports.dialog = ej2Spreadsheet.dialog;
exports.actionEvents = ej2Spreadsheet.actionEvents;
exports.fontColor = ej2Spreadsheet.fontColor;
exports.fillColor = ej2Spreadsheet.fillColor;
exports.defaultLocale = ej2Spreadsheet.defaultLocale;
exports.Spreadsheet = ej2Spreadsheet.Spreadsheet;
exports.Clipboard = ej2Spreadsheet.Clipboard;
exports.Edit = ej2Spreadsheet.Edit;
exports.Selection = ej2Spreadsheet.Selection;
exports.Scroll = ej2Spreadsheet.Scroll;
exports.VirtualScroll = ej2Spreadsheet.VirtualScroll;
exports.KeyboardNavigation = ej2Spreadsheet.KeyboardNavigation;
exports.KeyboardShortcut = ej2Spreadsheet.KeyboardShortcut;
exports.CellFormat = ej2Spreadsheet.CellFormat;
exports.Resize = ej2Spreadsheet.Resize;
exports.CollaborativeEditing = ej2Spreadsheet.CollaborativeEditing;
exports.ShowHide = ej2Spreadsheet.ShowHide;
exports.SpreadsheetHyperlink = ej2Spreadsheet.SpreadsheetHyperlink;
exports.UndoRedo = ej2Spreadsheet.UndoRedo;
exports.WrapText = ej2Spreadsheet.WrapText;
exports.Insert = ej2Spreadsheet.Insert;
exports.Delete = ej2Spreadsheet.Delete;
exports.DataValidation = ej2Spreadsheet.DataValidation;
exports.ProtectSheet = ej2Spreadsheet.ProtectSheet;
exports.FindAndReplace = ej2Spreadsheet.FindAndReplace;
exports.Merge = ej2Spreadsheet.Merge;
exports.Ribbon = ej2Spreadsheet.Ribbon;
exports.FormulaBar = ej2Spreadsheet.FormulaBar;
exports.Formula = ej2Spreadsheet.Formula;
exports.SheetTabs = ej2Spreadsheet.SheetTabs;
exports.Open = ej2Spreadsheet.Open;
exports.Save = ej2Spreadsheet.Save;
exports.ContextMenu = ej2Spreadsheet.ContextMenu;
exports.NumberFormat = ej2Spreadsheet.NumberFormat;
exports.Sort = ej2Spreadsheet.Sort;
exports.Filter = ej2Spreadsheet.Filter;
exports.Render = ej2Spreadsheet.Render;
exports.SheetRender = ej2Spreadsheet.SheetRender;
exports.RowRenderer = ej2Spreadsheet.RowRenderer;
exports.CellRenderer = ej2Spreadsheet.CellRenderer;
exports.Calculate = ej2Spreadsheet.Calculate;
exports.FormulaError = ej2Spreadsheet.FormulaError;
exports.FormulaInfo = ej2Spreadsheet.FormulaInfo;
exports.CalcSheetFamilyItem = ej2Spreadsheet.CalcSheetFamilyItem;
exports.getAlphalabel = ej2Spreadsheet.getAlphalabel;
exports.ValueChangedArgs = ej2Spreadsheet.ValueChangedArgs;
exports.Parser = ej2Spreadsheet.Parser;
exports.CalculateCommon = ej2Spreadsheet.CalculateCommon;
exports.isUndefined = ej2Spreadsheet.isUndefined;
exports.getModules = ej2Spreadsheet.getModules;
exports.getValue = ej2Spreadsheet.getValue;
exports.setValue = ej2Spreadsheet.setValue;
exports.ModuleLoader = ej2Spreadsheet.ModuleLoader;
exports.CommonErrors = ej2Spreadsheet.CommonErrors;
exports.FormulasErrorsStrings = ej2Spreadsheet.FormulasErrorsStrings;
exports.BasicFormulas = ej2Spreadsheet.BasicFormulas;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ej2-angular-spreadsheet.umd.js.map
