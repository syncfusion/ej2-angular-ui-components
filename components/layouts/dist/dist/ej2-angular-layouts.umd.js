(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@syncfusion/ej2-angular-base'), require('@syncfusion/ej2-layouts'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@syncfusion/ej2-angular-base', '@syncfusion/ej2-layouts', '@angular/common'], factory) :
	(factory((global['ej2-angular-layouts'] = {}),global.ng.core,global.ej2.angular.base,global.ej2.layouts,global.ng.common));
}(this, (function (exports,core,ej2AngularBase,ej2Layouts,common) { 'use strict';

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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs);
        return _this;
    }
    return PaneDirective;
}(ej2AngularBase.ComplexBase));
PaneDirective.decorators = [
    { type: core.Directive, args: [{
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
    { type: core.ViewContainerRef, },
]; };
PaneDirective.propDecorators = {
    'content': [{ type: core.ContentChild, args: ['content',] },],
};
__decorate([
    ej2AngularBase.Template(),
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
}(ej2AngularBase.ArrayBase));
PanesDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'ejs-splitter>e-panes',
                queries: {
                    children: new core.ContentChildren(PaneDirective)
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
exports.SplitterComponent = /** @class */ (function (_super) {
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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
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
}(ej2Layouts.Splitter));
exports.SplitterComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ejs-splitter',
                inputs: inputs,
                outputs: outputs$1,
                template: "<ng-content select='div'></ng-content>",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                queries: {
                    childPaneSettings: new core.ContentChild(PanesDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
exports.SplitterComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: core.ViewContainerRef, },
    { type: core.Injector, },
]; };
exports.SplitterComponent = __decorate$1([
    ej2AngularBase.ComponentMixins([ej2AngularBase.ComponentBase]),
    __metadata$1("design:paramtypes", [core.ElementRef,
        core.Renderer2,
        core.ViewContainerRef,
        core.Injector])
], exports.SplitterComponent);
/**
 * NgModule definition for the Splitter component.
 */
var SplitterModule = /** @class */ (function () {
    function SplitterModule() {
    }
    return SplitterModule;
}());
SplitterModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [
                    exports.SplitterComponent,
                    PaneDirective,
                    PanesDirective
                ],
                exports: [
                    exports.SplitterComponent,
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
    { type: core.NgModule, args: [{
                imports: [common.CommonModule, SplitterModule],
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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$2);
        return _this;
    }
    return PanelDirective;
}(ej2AngularBase.ComplexBase));
PanelDirective.decorators = [
    { type: core.Directive, args: [{
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
    { type: core.ViewContainerRef, },
]; };
PanelDirective.propDecorators = {
    'header': [{ type: core.ContentChild, args: ['header',] },],
    'content': [{ type: core.ContentChild, args: ['content',] },],
};
__decorate$2([
    ej2AngularBase.Template(),
    __metadata$2("design:type", Object)
], PanelDirective.prototype, "header", void 0);
__decorate$2([
    ej2AngularBase.Template(),
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
}(ej2AngularBase.ArrayBase));
PanelsDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'ejs-dashboardlayout>e-panels',
                queries: {
                    children: new core.ContentChildren(PanelDirective)
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
exports.DashboardLayoutComponent = /** @class */ (function (_super) {
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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
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
}(ej2Layouts.DashboardLayout));
exports.DashboardLayoutComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ejs-dashboardlayout',
                inputs: inputs$1,
                outputs: outputs$3,
                template: "<ng-content select='div'></ng-content>",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                queries: {
                    childPanels: new core.ContentChild(PanelsDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
exports.DashboardLayoutComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: core.ViewContainerRef, },
    { type: core.Injector, },
]; };
exports.DashboardLayoutComponent = __decorate$3([
    ej2AngularBase.ComponentMixins([ej2AngularBase.ComponentBase]),
    __metadata$3("design:paramtypes", [core.ElementRef,
        core.Renderer2,
        core.ViewContainerRef,
        core.Injector])
], exports.DashboardLayoutComponent);
/**
 * NgModule definition for the DashboardLayout component.
 */
var DashboardLayoutModule = /** @class */ (function () {
    function DashboardLayoutModule() {
    }
    return DashboardLayoutModule;
}());
DashboardLayoutModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [
                    exports.DashboardLayoutComponent,
                    PanelDirective,
                    PanelsDirective
                ],
                exports: [
                    exports.DashboardLayoutComponent,
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
    { type: core.NgModule, args: [{
                imports: [common.CommonModule, DashboardLayoutModule],
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

exports.PaneDirective = PaneDirective;
exports.PanesDirective = PanesDirective;
exports.SplitterModule = SplitterModule;
exports.SplitterAllModule = SplitterAllModule;
exports.PanelDirective = PanelDirective;
exports.PanelsDirective = PanelsDirective;
exports.DashboardLayoutModule = DashboardLayoutModule;
exports.DashboardLayoutAllModule = DashboardLayoutAllModule;
exports.ɵc = inputs$1;
exports.ɵd = outputs$3;
exports.ɵa = inputs;
exports.ɵb = outputs$1;
exports.PaneProperties = ej2Layouts.PaneProperties;
exports.Splitter = ej2Layouts.Splitter;
exports.Panel = ej2Layouts.Panel;
exports.DashboardLayout = ej2Layouts.DashboardLayout;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ej2-angular-layouts.umd.js.map
