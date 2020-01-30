(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@syncfusion/ej2-angular-base'), require('@syncfusion/ej2-kanban'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@syncfusion/ej2-angular-base', '@syncfusion/ej2-kanban', '@angular/common'], factory) :
	(factory((global['ej2-angular-kanban'] = {}),global.ng.core,global.ej2.angular.base,global.ej2.kanban,global.ng.common));
}(this, (function (exports,core,ej2AngularBase,ej2Kanban,common) { 'use strict';

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
var input = ['allowToggle', 'headerText', 'isExpanded', 'keyField', 'maxCount', 'minCount', 'showItemCount', 'template'];
var outputs = [];
/**
 * `e-columns` directive represent a columns of the Kanban board.
 * It must be contained in a Kanban component(`ejs-kanban`).
 * ```html
 * <ejs-kanban>
 *   <e-columns>
 *    <e-column keyField='Open' textField='To Do'></e-column>
 *    <e-column keyField='Close' textField='Completed'></e-column>
 *   </e-columns>
 * </ejs-kanban>
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
        _this.registerEvents(outputs);
        return _this;
    }
    return ColumnDirective;
}(ej2AngularBase.ComplexBase));
ColumnDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'e-columns>e-column',
                inputs: input,
                outputs: outputs,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
ColumnDirective.ctorParameters = function () { return [
    { type: core.ViewContainerRef, },
]; };
ColumnDirective.propDecorators = {
    'template': [{ type: core.ContentChild, args: ['template',] },],
};
__decorate([
    ej2AngularBase.Template(),
    __metadata("design:type", Object)
], ColumnDirective.prototype, "template", void 0);
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
                selector: 'ejs-kanban>e-columns',
                queries: {
                    children: new core.ContentChildren(ColumnDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
ColumnsDirective.ctorParameters = function () { return []; };
var input$1 = ['keyFields', 'text'];
var outputs$1 = [];
/**
 * `e-stackedHeaders` directive represent a stacked header of the Kanban board.
 * It must be contained in a Kanban component(`ejs-kanban`).
 * ```html
 * <ejs-kanban>
 *   <e-stackedHeaders>
 *    <e-stackedHeader keyField='Open' text='To Do'></e-stackedHeader>
 *    <e-stackedHeader keyField='Close' text='Completed'></e-stackedHeader>
 *   </e-stackedHeaders>
 * </ejs-kanban>
 * ```
 */
var StackedHeaderDirective = /** @class */ (function (_super) {
    __extends(StackedHeaderDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function StackedHeaderDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$1);
        return _this;
    }
    return StackedHeaderDirective;
}(ej2AngularBase.ComplexBase));
StackedHeaderDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'e-stackedHeaders>e-stackedHeader',
                inputs: input$1,
                outputs: outputs$1,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
StackedHeaderDirective.ctorParameters = function () { return [
    { type: core.ViewContainerRef, },
]; };
/**
 * StackedHeader Array Directive
 */
var StackedHeadersDirective = /** @class */ (function (_super) {
    __extends(StackedHeadersDirective, _super);
    function StackedHeadersDirective() {
        return _super.call(this, 'stackedheaders') || this;
    }
    return StackedHeadersDirective;
}(ej2AngularBase.ArrayBase));
StackedHeadersDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'ejs-kanban>e-stackedHeaders',
                queries: {
                    children: new core.ContentChildren(StackedHeaderDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
StackedHeadersDirective.ctorParameters = function () { return []; };
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
var inputs = ['allowDragAndDrop', 'allowKeyboard', 'cardSettings', 'columns', 'constraintType', 'cssClass', 'dataSource', 'enablePersistence', 'enableRtl', 'enableTooltip', 'height', 'keyField', 'locale', 'query', 'stackedHeaders', 'swimlaneSettings', 'tooltipTemplate', 'width'];
var outputs$2 = ['actionBegin', 'actionComplete', 'actionFailure', 'cardClick', 'cardDoubleClick', 'cardRendered', 'columnRendered', 'created', 'dataBinding', 'dataBound', 'drag', 'dragStart', 'dragStop'];
var twoWays = [''];
/**
 * `ej-kanban` represents the Angular Kanban Component.
 * ```html
 * <ejs-kanban></ejs-kanban>
 * ```
 */
exports.KanbanComponent = /** @class */ (function (_super) {
    __extends(KanbanComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function KanbanComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.srenderer = srenderer;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.tags = ['columns', 'stackedHeaders'];
        _this.element = _this.ngEle.nativeElement;
        _this.injectedModules = _this.injectedModules || [];
        _this.registerEvents(outputs$2);
        _this.addTwoWay.call(_this, twoWays);
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        return _this;
    }
    /**
     * @return {?}
     */
    KanbanComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    KanbanComponent.prototype.ngAfterViewInit = function () {
    };
    /**
     * @return {?}
     */
    KanbanComponent.prototype.ngOnDestroy = function () {
    };
    /**
     * @return {?}
     */
    KanbanComponent.prototype.ngAfterContentChecked = function () {
    };
    return KanbanComponent;
}(ej2Kanban.Kanban));
exports.KanbanComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ejs-kanban',
                inputs: inputs,
                outputs: outputs$2,
                template: '',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                queries: {
                    childColumns: new core.ContentChild(ColumnsDirective),
                    childStackedHeaders: new core.ContentChild(StackedHeadersDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
exports.KanbanComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: core.ViewContainerRef, },
    { type: core.Injector, },
]; };
exports.KanbanComponent.propDecorators = {
    'tooltipTemplate': [{ type: core.ContentChild, args: ['tooltipTemplate',] },],
    'columns_template': [{ type: core.ContentChild, args: ['columnsTemplate',] },],
    'swimlaneSettings_template': [{ type: core.ContentChild, args: ['swimlaneSettingsTemplate',] },],
    'cardSettings_template': [{ type: core.ContentChild, args: ['cardSettingsTemplate',] },],
};
__decorate$1([
    ej2AngularBase.Template(),
    __metadata$1("design:type", Object)
], exports.KanbanComponent.prototype, "tooltipTemplate", void 0);
__decorate$1([
    ej2AngularBase.Template(),
    __metadata$1("design:type", Object)
], exports.KanbanComponent.prototype, "columns_template", void 0);
__decorate$1([
    ej2AngularBase.Template(),
    __metadata$1("design:type", Object)
], exports.KanbanComponent.prototype, "swimlaneSettings_template", void 0);
__decorate$1([
    ej2AngularBase.Template(),
    __metadata$1("design:type", Object)
], exports.KanbanComponent.prototype, "cardSettings_template", void 0);
exports.KanbanComponent = __decorate$1([
    ej2AngularBase.ComponentMixins([ej2AngularBase.ComponentBase]),
    __metadata$1("design:paramtypes", [core.ElementRef,
        core.Renderer2,
        core.ViewContainerRef,
        core.Injector])
], exports.KanbanComponent);
/**
 * NgModule definition for the Kanban component.
 */
var KanbanModule = /** @class */ (function () {
    function KanbanModule() {
    }
    return KanbanModule;
}());
KanbanModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [
                    exports.KanbanComponent,
                    ColumnDirective,
                    ColumnsDirective,
                    StackedHeaderDirective,
                    StackedHeadersDirective
                ],
                exports: [
                    exports.KanbanComponent,
                    ColumnDirective,
                    ColumnsDirective,
                    StackedHeaderDirective,
                    StackedHeadersDirective
                ]
            },] },
];
/**
 * @nocollapse
 */
KanbanModule.ctorParameters = function () { return []; };
/**
 * NgModule definition for the Kanban component with providers.
 */
var KanbanAllModule = /** @class */ (function () {
    function KanbanAllModule() {
    }
    return KanbanAllModule;
}());
KanbanAllModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule, KanbanModule],
                exports: [
                    KanbanModule
                ],
                providers: []
            },] },
];
/**
 * @nocollapse
 */
KanbanAllModule.ctorParameters = function () { return []; };

exports.ColumnDirective = ColumnDirective;
exports.ColumnsDirective = ColumnsDirective;
exports.StackedHeaderDirective = StackedHeaderDirective;
exports.StackedHeadersDirective = StackedHeadersDirective;
exports.KanbanModule = KanbanModule;
exports.KanbanAllModule = KanbanAllModule;
exports.ɵa = inputs;
exports.ɵb = outputs$2;
exports.Kanban = ej2Kanban.Kanban;
exports.actionBegin = ej2Kanban.actionBegin;
exports.actionComplete = ej2Kanban.actionComplete;
exports.actionFailure = ej2Kanban.actionFailure;
exports.cardClick = ej2Kanban.cardClick;
exports.cardDoubleClick = ej2Kanban.cardDoubleClick;
exports.cardRendered = ej2Kanban.cardRendered;
exports.columnRendered = ej2Kanban.columnRendered;
exports.dataBinding = ej2Kanban.dataBinding;
exports.dataBound = ej2Kanban.dataBound;
exports.dragStart = ej2Kanban.dragStart;
exports.drag = ej2Kanban.drag;
exports.dragStop = ej2Kanban.dragStop;
exports.documentClick = ej2Kanban.documentClick;
exports.contentReady = ej2Kanban.contentReady;
exports.dataReady = ej2Kanban.dataReady;
exports.bottomSpace = ej2Kanban.bottomSpace;
exports.cardSpace = ej2Kanban.cardSpace;
exports.toggleWidth = ej2Kanban.toggleWidth;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ej2-angular-kanban.umd.js.map
