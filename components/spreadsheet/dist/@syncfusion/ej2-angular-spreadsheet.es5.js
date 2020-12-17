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
var input = ['height', 'id', 'left', 'src', 'top', 'width'];
var outputs = [];
var ImageDirective = /** @class */ (function (_super) {
    __extends(ImageDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function ImageDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs);
        _this.directivePropList = input;
        return _this;
    }
    return ImageDirective;
}(ComplexBase));
ImageDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-images>e-image',
                inputs: input,
                outputs: outputs,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
ImageDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
]; };
/**
 * Image Array Directive
 */
var ImagesDirective = /** @class */ (function (_super) {
    __extends(ImagesDirective, _super);
    function ImagesDirective() {
        return _super.call(this, 'image') || this;
    }
    return ImagesDirective;
}(ArrayBase));
ImagesDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-cell>e-images',
                queries: {
                    children: new ContentChildren(ImageDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
ImagesDirective.ctorParameters = function () { return []; };
var input$1 = ['id', 'isSeriesInRows', 'range', 'theme', 'type'];
var outputs$1 = [];
var ChartDirective = /** @class */ (function (_super) {
    __extends(ChartDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function ChartDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$1);
        _this.directivePropList = input$1;
        return _this;
    }
    return ChartDirective;
}(ComplexBase));
ChartDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-charts>e-chart',
                inputs: input$1,
                outputs: outputs$1,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
ChartDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
]; };
/**
 * Chart Array Directive
 */
var ChartsDirective = /** @class */ (function (_super) {
    __extends(ChartsDirective, _super);
    function ChartsDirective() {
        return _super.call(this, 'chart') || this;
    }
    return ChartsDirective;
}(ArrayBase));
ChartsDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-cell>e-charts',
                queries: {
                    children: new ContentChildren(ChartDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
ChartsDirective.ctorParameters = function () { return []; };
var input$2 = ['chart', 'colSpan', 'format', 'formula', 'hyperlink', 'image', 'index', 'isLocked', 'rowSpan', 'style', 'validation', 'value', 'wrap'];
var outputs$2 = [];
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
        _this.tags = ['image', 'chart'];
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$2);
        _this.directivePropList = input$2;
        return _this;
    }
    return CellDirective;
}(ComplexBase));
CellDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-cells>e-cell',
                inputs: input$2,
                outputs: outputs$2,
                queries: {
                    childImage: new ContentChild(ImagesDirective),
                    childChart: new ContentChild(ChartsDirective)
                }
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
var input$3 = ['cells', 'customHeight', 'format', 'height', 'hidden', 'index'];
var outputs$3 = [];
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
        _this.registerEvents(outputs$3);
        _this.directivePropList = input$3;
        return _this;
    }
    return RowDirective;
}(ComplexBase));
RowDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-rows>e-row',
                inputs: input$3,
                outputs: outputs$3,
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
var input$4 = ['customWidth', 'format', 'hidden', 'index', 'isLocked', 'width'];
var outputs$4 = [];
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
        _this.registerEvents(outputs$4);
        _this.directivePropList = input$4;
        return _this;
    }
    return ColumnDirective;
}(ComplexBase));
ColumnDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-columns>e-column',
                inputs: input$4,
                outputs: outputs$4,
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
var input$5 = ['address', 'dataSource', 'query', 'showFieldAsHeader', 'startCell', 'template'];
var outputs$5 = [];
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
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$5);
        _this.directivePropList = input$5;
        return _this;
    }
    return RangeDirective;
}(ComplexBase));
RangeDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-ranges>e-range',
                inputs: input$5,
                outputs: outputs$5,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
RangeDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
]; };
RangeDirective.propDecorators = {
    'template': [{ type: ContentChild, args: ['template',] },],
};
__decorate([
    Template(),
    __metadata("design:type", Object)
], RangeDirective.prototype, "template", void 0);
/**
 * Range Array Directive
 */
var RangesDirective = /** @class */ (function (_super) {
    __extends(RangesDirective, _super);
    function RangesDirective() {
        return _super.call(this, 'ranges') || this;
    }
    return RangesDirective;
}(ArrayBase));
RangesDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-sheet>e-ranges',
                queries: {
                    children: new ContentChildren(RangeDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
RangesDirective.ctorParameters = function () { return []; };
var input$6 = ['cFColor', 'format', 'range', 'type', 'value'];
var outputs$6 = [];
/**
 * `e-conditionalformat` directive represent a conditionalformat of the Angular Spreadsheet.
 * It must be contained in a `e-sheet` directive.
 * ```html
 * <ejs-spreadsheet>
 *   <e-sheets>
 *    <e-sheet>
 *    <e-conditionalformats>
 *    <e-conditionalformat></e-conditionalformat>
 *    </e-conditionalformats>
 *    </e-sheet>
 *   </e-sheets>
 * </ejs-spreadsheet>
 * ```
 */
var ConditionalFormatDirective = /** @class */ (function (_super) {
    __extends(ConditionalFormatDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function ConditionalFormatDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$6);
        _this.directivePropList = input$6;
        return _this;
    }
    return ConditionalFormatDirective;
}(ComplexBase));
ConditionalFormatDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-conditionalformats>e-conditionalformat',
                inputs: input$6,
                outputs: outputs$6,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
ConditionalFormatDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
]; };
/**
 * ConditionalFormat Array Directive
 */
var ConditionalFormatsDirective = /** @class */ (function (_super) {
    __extends(ConditionalFormatsDirective, _super);
    function ConditionalFormatsDirective() {
        return _super.call(this, 'conditionalformats') || this;
    }
    return ConditionalFormatsDirective;
}(ArrayBase));
ConditionalFormatsDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-sheet>e-conditionalformats',
                queries: {
                    children: new ContentChildren(ConditionalFormatDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
ConditionalFormatsDirective.ctorParameters = function () { return []; };
var input$7 = ['activeCell', 'colCount', 'columns', 'conditionalFormats', 'index', 'isProtected', 'name', 'protectSettings', 'ranges', 'rowCount', 'rows', 'selectedRange', 'showGridLines', 'showHeaders', 'state', 'topLeftCell', 'usedRange'];
var outputs$7 = [];
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
        _this.tags = ['rows', 'columns', 'ranges', 'conditionalFormats'];
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$7);
        _this.directivePropList = input$7;
        return _this;
    }
    return SheetDirective;
}(ComplexBase));
SheetDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-sheets>e-sheet',
                inputs: input$7,
                outputs: outputs$7,
                queries: {
                    childRows: new ContentChild(RowsDirective),
                    childColumns: new ContentChild(ColumnsDirective),
                    childRanges: new ContentChild(RangesDirective),
                    childConditionalFormats: new ContentChild(ConditionalFormatsDirective)
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
var input$8 = ['comment', 'name', 'refersTo', 'scope'];
var outputs$8 = [];
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
        _this.registerEvents(outputs$8);
        _this.directivePropList = input$8;
        return _this;
    }
    return DefinedNameDirective;
}(ComplexBase));
DefinedNameDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-definednames>e-definedname',
                inputs: input$8,
                outputs: outputs$8,
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
var __decorate$1 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
var inputs = ['activeSheetIndex', 'allowCellFormatting', 'allowChart', 'allowConditionalFormat', 'allowDataValidation', 'allowDelete', 'allowEditing', 'allowFiltering', 'allowFindAndReplace', 'allowHyperlink', 'allowImage', 'allowInsert', 'allowMerge', 'allowNumberFormatting', 'allowOpen', 'allowResizing', 'allowSave', 'allowScrolling', 'allowSorting', 'allowUndoRedo', 'allowWrap', 'cellStyle', 'cssClass', 'definedNames', 'enableClipboard', 'enableContextMenu', 'enableKeyboardNavigation', 'enableKeyboardShortcut', 'enablePersistence', 'enableRtl', 'height', 'locale', 'openUrl', 'saveUrl', 'scrollSettings', 'selectionSettings', 'sheets', 'showFormulaBar', 'showRibbon', 'showSheetTabs', 'width'];
var outputs$9 = ['actionBegin', 'actionComplete', 'afterHyperlinkClick', 'afterHyperlinkCreate', 'beforeCellFormat', 'beforeCellRender', 'beforeCellSave', 'beforeDataBound', 'beforeHyperlinkClick', 'beforeHyperlinkCreate', 'beforeOpen', 'beforeSave', 'beforeSelect', 'beforeSort', 'cellEdit', 'cellEditing', 'cellSave', 'contextMenuBeforeClose', 'contextMenuBeforeOpen', 'contextMenuItemSelect', 'created', 'dataBound', 'dataSourceChanged', 'dialogBeforeOpen', 'fileMenuBeforeClose', 'fileMenuBeforeOpen', 'fileMenuItemSelect', 'openComplete', 'openFailure', 'queryCellInfo', 'saveComplete', 'select', 'sortComplete'];
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
        _this.registerEvents(outputs$9);
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
            this.tagObjects[1].instance = /** @type {?} */ (this.childDefinedNames);
        }
        this.context.ngAfterContentChecked(this);
    };
    return SpreadsheetComponent;
}(Spreadsheet));
SpreadsheetComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-spreadsheet',
                inputs: inputs,
                outputs: outputs$9,
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
__decorate$1([
    Template(),
    __metadata$1("design:type", Object)
], SpreadsheetComponent.prototype, "template", void 0);
SpreadsheetComponent = __decorate$1([
    ComponentMixins([ComponentBase]),
    __metadata$1("design:paramtypes", [ElementRef,
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
export { ImageDirective, ImagesDirective, ChartDirective, ChartsDirective, CellDirective, CellsDirective, RowDirective, RowsDirective, ColumnDirective, ColumnsDirective, RangeDirective, RangesDirective, ConditionalFormatDirective, ConditionalFormatsDirective, SheetDirective, SheetsDirective, DefinedNameDirective, DefinedNamesDirective, SpreadsheetComponent, SpreadsheetModule, SpreadsheetAllModule, ClipboardService, EditService, KeyboardNavigationService, KeyboardShortcutService, CollaborativeEditingService, SelectionService, ContextMenuService, FormulaBarService, RibbonService, SaveService, OpenService, SheetTabsService, DataBindService, AllModuleService, BasicModuleService, CellFormatService, NumberFormatService, FormulaService, inputs as ɵa, outputs$9 as ɵb };
export { Workbook, Range, UsedRange, Sheet, getSheetIndex, getSheetIndexFromId, getSheetNameFromAddress, getSheetIndexByName, updateSelectedRange, getSelectedRange, getSheet, getSheetNameCount, getMaxSheetId, initSheet, getSheetName, Row, getRow, setRow, isHiddenRow, getRowHeight, setRowHeight, getRowsHeight, Column, getColumn, setColumn, getColumnWidth, getColumnsWidth, isHiddenCol, Cell, getCell, setCell, skipDefaultValue, wrap, getData, getModel, processIdx, clearRange, getRangeIndexes, getCellIndexes, getColIndex, getCellAddress, getRangeAddress, getColumnHeaderText, getIndexesFromAddress, getRangeFromAddress, getAddressFromSelectedRange, getAddressInfo, getSwapRange, isSingleCell, executeTaskAsync, WorkbookBasicModule, WorkbookAllModule, getWorkbookRequiredModules, CellStyle, DefineName, ProtectSettings, Hyperlink, Validation, Format, ConditionalFormat, Chart, Image, workbookDestroyed, updateSheetFromDataSource, dataSourceChanged, dataChanged, workbookOpen, beginSave, saveCompleted, applyNumberFormatting, getFormattedCellObject, refreshCellElement, setCellFormat, findAllValues, textDecorationUpdate, applyCellFormat, updateUsedRange, workbookFormulaOperation, workbookEditOperation, checkDateFormat, getFormattedBarText, activeCellChanged, openSuccess, openFailure, sheetCreated, sheetsDestroyed, aggregateComputation, beforeSort, initiateSort, sortComplete, sortRangeAlert, initiatelink, beforeHyperlinkCreate, afterHyperlinkCreate, beforeHyperlinkClick, afterHyperlinkClick, addHyperlink, setLinkModel, beforeFilter, initiateFilter, filterComplete, filterRangeAlert, clearAllFilter, wrapEvent, onSave, insert, deleteAction, insertModel, deleteModel, isValidation, setValidation, addHighlight, dataValidate, findNext, findPrevious, goto, findWorkbookHandler, replaceHandler, replaceAllHandler, showDialog, findUndoRedo, findKeyUp, removeValidation, removeHighlight, queryCellInfo, count, findCount, protectSheetWorkBook, updateToggle, protectsheetHandler, replaceAllDialog, unprotectsheetHandler, workBookeditAlert, setLockCells, applyLockCells, setMerge, applyMerge, mergedRange, activeCellMergedRange, insertMerge, pasteMerge, setCFRule, cFInitialCheck, clearCFRule, initiateClearCFRule, cFRender, cFDelete, clear, clearCF, clearCells, setImage, setChart, initiateChart, refreshRibbonIcons, refreshChart, refreshChartSize, updateChart, deleteChartColl, initiateChartModel, focusChartBorder, checkIsFormula, isCellReference, isChar, inRange, isLocked, toFraction, getGcd, intToDate, dateToInt, isDateTime, isNumber, toDate, workbookLocale, localeData, DataBind, WorkbookOpen, WorkbookSave, WorkbookFormula, WorkbookNumberFormat, getFormatFromType, getTypeFromFormat, WorkbookSort, WorkbookFilter, WorkbookImage, WorkbookChart, WorkbookCellFormat, WorkbookEdit, WorkbookHyperlink, WorkbookInsert, WorkbookDelete, WorkbookDataValidation, WorkbookFindAndReplace, WorkbookProtectSheet, WorkbookMerge, WorkbookConditionalFormat, getRequiredModules, ribbon, formulaBar, sheetTabs, refreshSheetTabs, isFormulaBarEdit, dataRefresh, initialLoad, contentLoaded, mouseDown, spreadsheetDestroyed, editOperation, formulaOperation, formulaBarOperation, click, keyUp, keyDown, formulaKeyUp, formulaBarUpdate, onVerticalScroll, onHorizontalScroll, beforeContentLoaded, beforeVirtualContentLoaded, virtualContentLoaded, contextMenuOpen, cellNavigate, mouseUpAfterSelection, selectionComplete, cMenuBeforeOpen, insertSheetTab, removeSheetTab, renameSheetTab, ribbonClick, refreshRibbon, enableToolbarItems, tabSwitch, selectRange, cut, copy, paste, clearCopy, dataBound, beforeDataBound, addContextMenuItems, removeContextMenuItems, enableContextMenuItems, enableFileMenuItems, hideFileMenuItems, addFileMenuItems, hideRibbonTabs, enableRibbonTabs, addRibbonTabs, addToolbarItems, hideToolbarItems, beforeRibbonCreate, rowHeightChanged, colWidthChanged, beforeHeaderLoaded, onContentScroll, deInitProperties, activeSheetChanged, renameSheet, initiateCustomSort, applySort, collaborativeUpdate, hideShow, autoFit, updateToggleItem, initiateHyperlink, editHyperlink, openHyperlink, removeHyperlink, createHyperlinkElement, sheetNameUpdate, hideSheet, performUndoRedo, updateUndoRedoCollection, setActionData, getBeforeActionData, clearUndoRedoCollection, initiateFilterUI, renderFilterCell, reapplyFilter, filterByCellValue, clearFilter, getFilteredColumn, completeAction, beginAction, filterCellKeyDown, getFilterRange, setAutoFit, refreshFormulaDatasource, setScrollEvent, initiateDataValidation, validationError, startEdit, invalidData, clearInvalid, protectSheet, applyProtect, unprotectSheet, protectCellFormat, gotoDlg, findDlg, findHandler, replace, created, editAlert, setUndoRedo, enableFormulaInput, protectSelection, hiddenMerge, checkPrevMerge, checkMerge, removeDataValidation, showAggregate, initiateConditionalFormat, checkConditionalFormat, setCF, clearViewer, initiateFormulaReference, initiateCur, clearCellRef, editValue, addressHandle, initiateEdit, forRefSelRender, blankWorkbook, insertImage, refreshImgElem, refreshImgCellObj, getRowIdxFromClientY, getColIdxFromClientX, createImageElement, deleteImage, deleteChart, refreshChartCellObj, refreshImagePosition, updateTableWidth, focusBorder, clearChartBorder, insertChart, getUpdateUsingRaf, removeAllChildren, getColGroupWidth, getScrollBarWidth, getSiblingsHeight, inView, getCellPosition, locateElem, setStyleAttribute, getStartEvent, getMoveEvent, getEndEvent, isTouchStart, isTouchMove, isTouchEnd, getClientX, getClientY, setAriaOptions, destroyComponent, setResize, setWidthAndHeight, findMaxValue, updateAction, hasTemplate, setRowEleHeight, getTextHeight, getTextWidth, getLines, setMaxHgt, getMaxHgt, skipHiddenIdx, BasicModule, AllModule, ScrollSettings, SelectionSettings, DISABLED, WRAPTEXT, locale, dialog, actionEvents, overlay, fontColor, fillColor, defaultLocale, Spreadsheet, Clipboard, Edit, Selection, Scroll, VirtualScroll, KeyboardNavigation, KeyboardShortcut, CellFormat, Resize, CollaborativeEditing, ShowHide, SpreadsheetHyperlink, UndoRedo, WrapText, Insert, Delete, DataValidation, ProtectSheet, FindAndReplace, Merge, ConditionalFormatting, Ribbon, FormulaBar, Formula, SheetTabs, Open, Save, ContextMenu, NumberFormat, Sort, Filter, SpreadsheetImage, SpreadsheetChart, Render, SheetRender, RowRenderer, CellRenderer, Calculate, FormulaError, FormulaInfo, CalcSheetFamilyItem, getAlphalabel, ValueChangedArgs, Parser, CalculateCommon, isUndefined, getSkeletonVal, getModules, getValue, setValue, ModuleLoader, CommonErrors, FormulasErrorsStrings, BasicFormulas } from '@syncfusion/ej2-spreadsheet';
//# sourceMappingURL=ej2-angular-spreadsheet.es5.js.map
