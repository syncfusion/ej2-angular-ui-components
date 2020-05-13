(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@syncfusion/ej2-angular-base'), require('@syncfusion/ej2-lists'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@syncfusion/ej2-angular-base', '@syncfusion/ej2-lists', '@angular/common'], factory) :
	(factory((global['ej2-angular-lists'] = {}),global.ng.core,global.ej2.angular.base,global.ej2.lists,global.ng.common));
}(this, (function (exports,core,ej2AngularBase,ej2Lists,common) { 'use strict';

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
var inputs = ['animation', 'checkBoxPosition', 'cssClass', 'dataSource', 'enable', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'enableVirtualization', 'fields', 'groupTemplate', 'headerTemplate', 'headerTitle', 'height', 'htmlAttributes', 'locale', 'query', 'showCheckBox', 'showHeader', 'showIcon', 'sortOrder', 'template', 'width'];
var outputs = ['actionBegin', 'actionComplete', 'actionFailure', 'select'];
var twoWays = [''];
/**
 * Represents Angular ListView Component
 * ```
 * <ejs-listview [dataSource]='data'></ejs-listview>
 * ```
 */
exports.ListViewComponent = /** @class */ (function (_super) {
    __extends(ListViewComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function ListViewComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.srenderer = srenderer;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.element = _this.ngEle.nativeElement;
        _this.injectedModules = _this.injectedModules || [];
        try {
            var mod = _this.injector.get('ListsVirtualization');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_a) { }
        _this.registerEvents(outputs);
        _this.addTwoWay.call(_this, twoWays);
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.context = new ej2AngularBase.ComponentBase();
        return _this;
    }
    /**
     * @return {?}
     */
    ListViewComponent.prototype.ngOnInit = function () {
        this.context.ngOnInit(this);
    };
    /**
     * @return {?}
     */
    ListViewComponent.prototype.ngAfterViewInit = function () {
        this.context.ngAfterViewInit(this);
    };
    /**
     * @return {?}
     */
    ListViewComponent.prototype.ngOnDestroy = function () {
        this.context.ngOnDestroy(this);
    };
    /**
     * @return {?}
     */
    ListViewComponent.prototype.ngAfterContentChecked = function () {
        this.context.ngAfterContentChecked(this);
    };
    return ListViewComponent;
}(ej2Lists.ListView));
exports.ListViewComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ejs-listview',
                inputs: inputs,
                outputs: outputs,
                template: '',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
exports.ListViewComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: core.ViewContainerRef, },
    { type: core.Injector, },
]; };
exports.ListViewComponent.propDecorators = {
    'template': [{ type: core.ContentChild, args: ['template',] },],
    'groupTemplate': [{ type: core.ContentChild, args: ['groupTemplate',] },],
    'headerTemplate': [{ type: core.ContentChild, args: ['headerTemplate',] },],
};
__decorate([
    ej2AngularBase.Template(),
    __metadata("design:type", Object)
], exports.ListViewComponent.prototype, "template", void 0);
__decorate([
    ej2AngularBase.Template(),
    __metadata("design:type", Object)
], exports.ListViewComponent.prototype, "groupTemplate", void 0);
__decorate([
    ej2AngularBase.Template(),
    __metadata("design:type", Object)
], exports.ListViewComponent.prototype, "headerTemplate", void 0);
exports.ListViewComponent = __decorate([
    ej2AngularBase.ComponentMixins([ej2AngularBase.ComponentBase]),
    __metadata("design:paramtypes", [core.ElementRef,
        core.Renderer2,
        core.ViewContainerRef,
        core.Injector])
], exports.ListViewComponent);
/**
 * NgModule definition for the ListView component.
 */
var ListViewModule = /** @class */ (function () {
    function ListViewModule() {
    }
    return ListViewModule;
}());
ListViewModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [
                    exports.ListViewComponent
                ],
                exports: [
                    exports.ListViewComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
ListViewModule.ctorParameters = function () { return []; };
var VirtualizationService = { provide: 'ListsVirtualization', useValue: ej2Lists.Virtualization };
/**
 * NgModule definition for the ListView component with providers.
 */
var ListViewAllModule = /** @class */ (function () {
    function ListViewAllModule() {
    }
    return ListViewAllModule;
}());
ListViewAllModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule, ListViewModule],
                exports: [
                    ListViewModule
                ],
                providers: [
                    VirtualizationService
                ]
            },] },
];
/**
 * @nocollapse
 */
ListViewAllModule.ctorParameters = function () { return []; };

exports.ListViewModule = ListViewModule;
exports.ListViewAllModule = ListViewAllModule;
exports.VirtualizationService = VirtualizationService;
exports.ɵa = inputs;
exports.ɵb = outputs;
exports.classNames = ej2Lists.classNames;
exports.FieldSettings = ej2Lists.FieldSettings;
exports.ListView = ej2Lists.ListView;
exports.Virtualization = ej2Lists.Virtualization;
exports.cssClass = ej2Lists.cssClass;
exports.ListBase = ej2Lists.ListBase;
exports.getFieldValues = ej2Lists.getFieldValues;
exports.Sortable = ej2Lists.Sortable;
exports.moveTo = ej2Lists.moveTo;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ej2-angular-lists.umd.js.map
