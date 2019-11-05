(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@syncfusion/ej2-angular-base'), require('@syncfusion/ej2-querybuilder'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@syncfusion/ej2-angular-base', '@syncfusion/ej2-querybuilder', '@angular/common'], factory) :
	(factory((global['ej2-angular-querybuilder'] = {}),global.ng.core,global.ej2.angular.base,global.ej2.querybuilder,global.ng.common));
}(this, (function (exports,core,ej2AngularBase,ej2Querybuilder,common) { 'use strict';

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
var input = ['category', 'field', 'format', 'label', 'operators', 'step', 'template', 'type', 'validation', 'value', 'values'];
var outputs = [];
/**
 * `e-column` directive represent a column of the Angular QueryBuilder.
 * It must be contained in a QueryBuilder component(`ejs-querybuilder`).
 * ```html
 * <ejs-querybuilder [dataSource]='data'>
 *   <e-columns>
 *    <e-column field='ID' label='ID' type='number'></e-column>
 *    <e-column field='Date' label='Date' type='date' format='dd/MM/yyyy'></e-column>
 *   </e-columns>
 * </ejs-querybuilder>
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
                selector: 'ejs-querybuilder>e-columns>e-column',
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
                selector: 'ejs-querybuilder>e-columns',
                queries: {
                    children: new core.ContentChildren(ColumnDirective)
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
var inputs = ['allowValidation', 'columns', 'cssClass', 'dataSource', 'displayMode', 'enablePersistence', 'enableRtl', 'height', 'immediateModeDelay', 'locale', 'matchCase', 'maxGroupCount', 'rule', 'showButtons', 'sortDirection', 'summaryView', 'width'];
var outputs$1 = ['beforeChange', 'change', 'created', 'ruleChange'];
var twoWays = [''];
/**
 * Represents the EJ2 Angular QueryBuilder Component.
 * ```html
 * <ejs-querybuilder></ejs-querybuilder>
 * ```
 */
exports.QueryBuilderComponent = /** @class */ (function (_super) {
    __extends(QueryBuilderComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function QueryBuilderComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.srenderer = srenderer;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.tags = ['columns'];
        _this.element = _this.ngEle.nativeElement;
        _this.injectedModules = _this.injectedModules || [];
        _this.registerEvents(outputs$1);
        _this.addTwoWay.call(_this, twoWays);
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        return _this;
    }
    /**
     * @return {?}
     */
    QueryBuilderComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    QueryBuilderComponent.prototype.ngAfterViewInit = function () {
    };
    /**
     * @return {?}
     */
    QueryBuilderComponent.prototype.ngOnDestroy = function () {
    };
    /**
     * @return {?}
     */
    QueryBuilderComponent.prototype.ngAfterContentChecked = function () {
    };
    return QueryBuilderComponent;
}(ej2Querybuilder.QueryBuilder));
exports.QueryBuilderComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ejs-querybuilder',
                inputs: inputs,
                outputs: outputs$1,
                template: '',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                queries: {
                    childColumns: new core.ContentChild(ColumnsDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
exports.QueryBuilderComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: core.ViewContainerRef, },
    { type: core.Injector, },
]; };
exports.QueryBuilderComponent = __decorate([
    ej2AngularBase.ComponentMixins([ej2AngularBase.ComponentBase]),
    __metadata("design:paramtypes", [core.ElementRef,
        core.Renderer2,
        core.ViewContainerRef,
        core.Injector])
], exports.QueryBuilderComponent);
/**
 * NgModule definition for the QueryBuilder component.
 */
var QueryBuilderModule = /** @class */ (function () {
    function QueryBuilderModule() {
    }
    return QueryBuilderModule;
}());
QueryBuilderModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [
                    exports.QueryBuilderComponent,
                    ColumnDirective,
                    ColumnsDirective
                ],
                exports: [
                    exports.QueryBuilderComponent,
                    ColumnDirective,
                    ColumnsDirective
                ]
            },] },
];
/**
 * @nocollapse
 */
QueryBuilderModule.ctorParameters = function () { return []; };
/**
 * NgModule definition for the QueryBuilder component with providers.
 */
var QueryBuilderAllModule = /** @class */ (function () {
    function QueryBuilderAllModule() {
    }
    return QueryBuilderAllModule;
}());
QueryBuilderAllModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule, QueryBuilderModule],
                exports: [
                    QueryBuilderModule
                ],
                providers: []
            },] },
];
/**
 * @nocollapse
 */
QueryBuilderAllModule.ctorParameters = function () { return []; };

exports.ColumnDirective = ColumnDirective;
exports.ColumnsDirective = ColumnsDirective;
exports.QueryBuilderModule = QueryBuilderModule;
exports.QueryBuilderAllModule = QueryBuilderAllModule;
exports.ɵa = inputs;
exports.ɵb = outputs$1;
exports.Columns = ej2Querybuilder.Columns;
exports.Rule = ej2Querybuilder.Rule;
exports.ShowButtons = ej2Querybuilder.ShowButtons;
exports.QueryBuilder = ej2Querybuilder.QueryBuilder;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ej2-angular-querybuilder.umd.js.map
