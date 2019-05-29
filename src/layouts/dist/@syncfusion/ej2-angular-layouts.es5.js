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
import { DashboardLayout, Splitter } from '@syncfusion/ej2-layouts';
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
var input = ['collapsed', 'collapsible', 'content', 'max', 'min', 'resizable', 'size'];
var outputs = [];
/**
 * 'e-panesettings' directive represent a panes of angular splitter
 * It must be contained in a Splitter component(`ejs-splitter`).
 * ```html
 * <ejs-splitter id='splitter' >
 *   <e-panes>
 *    <e-pane size ='150px'></e-pane>
 *    <e-pane size = '20%'></e-pane>
 *   </e-panes>
 * </ejs-splitter>
 * ```
 */
var PaneDirective = /** @class */ (function (_super) {
    __extends(PaneDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function PaneDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs);
        return _this;
    }
    return PaneDirective;
}(ComplexBase));
PaneDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-panes>e-pane',
                inputs: input,
                outputs: outputs,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
PaneDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
]; };
PaneDirective.propDecorators = {
    'content': [{ type: ContentChild, args: ['content',] },],
};
__decorate([
    Template(),
    __metadata("design:type", Object)
], PaneDirective.prototype, "content", void 0);
/**
 * Pane Array Directive
 */
var PanesDirective = /** @class */ (function (_super) {
    __extends(PanesDirective, _super);
    function PanesDirective() {
        return _super.call(this, 'panesettings') || this;
    }
    return PanesDirective;
}(ArrayBase));
PanesDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-splitter>e-panes',
                queries: {
                    children: new ContentChildren(PaneDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
PanesDirective.ctorParameters = function () { return []; };
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
var inputs = ['cssClass', 'enablePersistence', 'enableRtl', 'enabled', 'height', 'locale', 'orientation', 'paneSettings', 'separatorSize', 'width'];
var outputs$1 = ['beforeCollapse', 'beforeExpand', 'collapsed', 'created', 'expanded', 'resizeStart', 'resizeStop', 'resizing'];
var twoWays = [''];
/**
 * Represents the Angular Splitter Component
 * ```html
 * <ejs-splitter></ejs-splitter>
 * ```
 */
var SplitterComponent = /** @class */ (function (_super) {
    __extends(SplitterComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function SplitterComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.srenderer = srenderer;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.tags = ['paneSettings'];
        _this.element = _this.ngEle.nativeElement;
        _this.injectedModules = _this.injectedModules || [];
        _this.registerEvents(outputs$1);
        _this.addTwoWay.call(_this, twoWays);
        setValue('currentInstance', _this, _this.viewContainerRef);
        return _this;
    }
    /**
     * @return {?}
     */
    SplitterComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    SplitterComponent.prototype.ngAfterViewInit = function () {
    };
    /**
     * @return {?}
     */
    SplitterComponent.prototype.ngOnDestroy = function () {
    };
    /**
     * @return {?}
     */
    SplitterComponent.prototype.ngAfterContentChecked = function () {
    };
    return SplitterComponent;
}(Splitter));
SplitterComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-splitter',
                inputs: inputs,
                outputs: outputs$1,
                template: "<ng-content select='div'></ng-content>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                queries: {
                    childPaneSettings: new ContentChild(PanesDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
SplitterComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
]; };
SplitterComponent = __decorate$1([
    ComponentMixins([ComponentBase]),
    __metadata$1("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], SplitterComponent);
/**
 * NgModule definition for the Splitter component.
 */
var SplitterModule = /** @class */ (function () {
    function SplitterModule() {
    }
    return SplitterModule;
}());
SplitterModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    SplitterComponent,
                    PaneDirective,
                    PanesDirective
                ],
                exports: [
                    SplitterComponent,
                    PaneDirective,
                    PanesDirective
                ]
            },] },
];
/**
 * @nocollapse
 */
SplitterModule.ctorParameters = function () { return []; };
/**
 * NgModule definition for the Splitter component with providers.
 */
var SplitterAllModule = /** @class */ (function () {
    function SplitterAllModule() {
    }
    return SplitterAllModule;
}());
SplitterAllModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, SplitterModule],
                exports: [
                    SplitterModule
                ],
                providers: []
            },] },
];
/**
 * @nocollapse
 */
SplitterAllModule.ctorParameters = function () { return []; };
var __decorate$2 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$2 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
var input$1 = ['col', 'content', 'cssClass', 'enabled', 'header', 'id', 'maxSizeX', 'maxSizeY', 'minSizeX', 'minSizeY', 'row', 'sizeX', 'sizeY', 'zIndex'];
var outputs$2 = [];
/**
 * 'e-panels' directive represent a panels of angular dashboardlayout
 * It must be contained in a dashboardlayout component(`ej-dashboardlayout`).
 * ```html
 * <ejs-dashboardlayout>
 *   <e-panels>
 *    <e-panel></e-panel>
 *    <e-panel></e-panel>
 *   </e-panels>
 * </ejs-dashboardlayout>
 * ```
 */
var PanelDirective = /** @class */ (function (_super) {
    __extends(PanelDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function PanelDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$2);
        return _this;
    }
    return PanelDirective;
}(ComplexBase));
PanelDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-panels>e-panel',
                inputs: input$1,
                outputs: outputs$2,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
PanelDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
]; };
PanelDirective.propDecorators = {
    'header': [{ type: ContentChild, args: ['header',] },],
    'content': [{ type: ContentChild, args: ['content',] },],
};
__decorate$2([
    Template(),
    __metadata$2("design:type", Object)
], PanelDirective.prototype, "header", void 0);
__decorate$2([
    Template(),
    __metadata$2("design:type", Object)
], PanelDirective.prototype, "content", void 0);
/**
 * Panel Array Directive
 */
var PanelsDirective = /** @class */ (function (_super) {
    __extends(PanelsDirective, _super);
    function PanelsDirective() {
        return _super.call(this, 'panels') || this;
    }
    return PanelsDirective;
}(ArrayBase));
PanelsDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-dashboardlayout>e-panels',
                queries: {
                    children: new ContentChildren(PanelDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
PanelsDirective.ctorParameters = function () { return []; };
var __decorate$3 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$3 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
var inputs$1 = ['allowDragging', 'allowFloating', 'allowPushing', 'allowResizing', 'cellAspectRatio', 'cellSpacing', 'columns', 'draggableHandle', 'enablePersistence', 'enableRtl', 'locale', 'mediaQuery', 'panels', 'resizableHandles', 'showGridLines'];
var outputs$3 = ['change', 'created', 'destroyed', 'drag', 'dragStart', 'dragStop', 'resize', 'resizeStart', 'resizeStop'];
var twoWays$1 = [''];
/**
 * Represents the Essential JS 2 Angular DashboardLayout Component.
 * ```html
 * <ejs-dashboardlayout></ejs-dashboardlayout>
 * ```
 */
var DashboardLayoutComponent = /** @class */ (function (_super) {
    __extends(DashboardLayoutComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function DashboardLayoutComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.srenderer = srenderer;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.tags = ['panels'];
        _this.element = _this.ngEle.nativeElement;
        _this.injectedModules = _this.injectedModules || [];
        _this.registerEvents(outputs$3);
        _this.addTwoWay.call(_this, twoWays$1);
        setValue('currentInstance', _this, _this.viewContainerRef);
        return _this;
    }
    /**
     * @return {?}
     */
    DashboardLayoutComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    DashboardLayoutComponent.prototype.ngAfterViewInit = function () {
    };
    /**
     * @return {?}
     */
    DashboardLayoutComponent.prototype.ngOnDestroy = function () {
    };
    /**
     * @return {?}
     */
    DashboardLayoutComponent.prototype.ngAfterContentChecked = function () {
    };
    return DashboardLayoutComponent;
}(DashboardLayout));
DashboardLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-dashboardlayout',
                inputs: inputs$1,
                outputs: outputs$3,
                template: "<ng-content select='div'></ng-content>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                queries: {
                    childPanels: new ContentChild(PanelsDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
DashboardLayoutComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
]; };
DashboardLayoutComponent = __decorate$3([
    ComponentMixins([ComponentBase]),
    __metadata$3("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], DashboardLayoutComponent);
/**
 * NgModule definition for the DashboardLayout component.
 */
var DashboardLayoutModule = /** @class */ (function () {
    function DashboardLayoutModule() {
    }
    return DashboardLayoutModule;
}());
DashboardLayoutModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    DashboardLayoutComponent,
                    PanelDirective,
                    PanelsDirective
                ],
                exports: [
                    DashboardLayoutComponent,
                    PanelDirective,
                    PanelsDirective
                ]
            },] },
];
/**
 * @nocollapse
 */
DashboardLayoutModule.ctorParameters = function () { return []; };
/**
 * NgModule definition for the DashboardLayout component with providers.
 */
var DashboardLayoutAllModule = /** @class */ (function () {
    function DashboardLayoutAllModule() {
    }
    return DashboardLayoutAllModule;
}());
DashboardLayoutAllModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, DashboardLayoutModule],
                exports: [
                    DashboardLayoutModule
                ],
                providers: []
            },] },
];
/**
 * @nocollapse
 */
DashboardLayoutAllModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */
export { PaneDirective, PanesDirective, SplitterComponent, SplitterModule, SplitterAllModule, PanelDirective, PanelsDirective, DashboardLayoutComponent, DashboardLayoutModule, DashboardLayoutAllModule, inputs$1 as ɵc, outputs$3 as ɵd, inputs as ɵa, outputs$1 as ɵb };
export { PaneProperties, Splitter, Panel, DashboardLayout } from '@syncfusion/ej2-layouts';
//# sourceMappingURL=ej2-angular-layouts.es5.js.map
