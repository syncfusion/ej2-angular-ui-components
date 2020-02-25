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
import { ChangeDetectionStrategy, Component, ContentChild, ElementRef, Injector, NgModule, Renderer2, ViewContainerRef } from '@angular/core';
import { ComponentBase, ComponentMixins, Template, setValue } from '@syncfusion/ej2-angular-base';
import { ListView, Virtualization } from '@syncfusion/ej2-lists';
import { CommonModule } from '@angular/common';
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
var ListViewComponent = /** @class */ (function (_super) {
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
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.context = new ComponentBase();
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
}(ListView));
ListViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-listview',
                inputs: inputs,
                outputs: outputs,
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
ListViewComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
]; };
ListViewComponent.propDecorators = {
    'template': [{ type: ContentChild, args: ['template',] },],
    'groupTemplate': [{ type: ContentChild, args: ['groupTemplate',] },],
    'headerTemplate': [{ type: ContentChild, args: ['headerTemplate',] },],
};
__decorate([
    Template(),
    __metadata("design:type", Object)
], ListViewComponent.prototype, "template", void 0);
__decorate([
    Template(),
    __metadata("design:type", Object)
], ListViewComponent.prototype, "groupTemplate", void 0);
__decorate([
    Template(),
    __metadata("design:type", Object)
], ListViewComponent.prototype, "headerTemplate", void 0);
ListViewComponent = __decorate([
    ComponentMixins([ComponentBase]),
    __metadata("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], ListViewComponent);
/**
 * NgModule definition for the ListView component.
 */
var ListViewModule = /** @class */ (function () {
    function ListViewModule() {
    }
    return ListViewModule;
}());
ListViewModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    ListViewComponent
                ],
                exports: [
                    ListViewComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
ListViewModule.ctorParameters = function () { return []; };
var VirtualizationService = { provide: 'ListsVirtualization', useValue: Virtualization };
/**
 * NgModule definition for the ListView component with providers.
 */
var ListViewAllModule = /** @class */ (function () {
    function ListViewAllModule() {
    }
    return ListViewAllModule;
}());
ListViewAllModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, ListViewModule],
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
/**
 * Generated bundle index. Do not edit.
 */
export { ListViewComponent, ListViewModule, ListViewAllModule, VirtualizationService, inputs as ɵa, outputs as ɵb };
export { classNames, FieldSettings, ListView, Virtualization, cssClass, ListBase, getFieldValues, Sortable, moveTo } from '@syncfusion/ej2-lists';
//# sourceMappingURL=ej2-angular-lists.es5.js.map
