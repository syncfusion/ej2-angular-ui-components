(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@syncfusion/ej2-angular-base'), require('@syncfusion/ej2-navigations'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@syncfusion/ej2-angular-base', '@syncfusion/ej2-navigations', '@angular/common'], factory) :
	(factory((global['ej2-angular-navigations'] = {}),global.ng.core,global.ej2.angular.base,global.ej2.navigations,global.ng.common));
}(this, (function (exports,core,ej2AngularBase,ej2Navigations,common) { 'use strict';

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
var input = ['content', 'cssClass', 'disabled', 'expanded', 'header', 'iconCss', 'visible'];
var outputs = [];
/**
 * 'e-accordionitem' directive represent a item of the Angular Accordion.
 * It must be contained in a Accordion component(`ejs-accordion`).
 * ```html
 * <ejs-accordion>
 *   <e-accordionitems>
 *    <e-accordionitem header='Header1'></e-accordionitem>
 *    <e-accordionitem header='Header2' content='Content2'></e-accordionitem>
 *   </e-accordionitems>
 * </ejs-accordion>
 * ```
 */
var AccordionItemDirective = /** @class */ (function (_super) {
    __extends(AccordionItemDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function AccordionItemDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs);
        _this.directivePropList = input;
        return _this;
    }
    return AccordionItemDirective;
}(ej2AngularBase.ComplexBase));
AccordionItemDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'e-accordionitems>e-accordionitem',
                inputs: input,
                outputs: outputs,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
AccordionItemDirective.ctorParameters = function () { return [
    { type: core.ViewContainerRef, },
]; };
AccordionItemDirective.propDecorators = {
    'header': [{ type: core.ContentChild, args: ['header',] },],
    'content': [{ type: core.ContentChild, args: ['content',] },],
};
__decorate([
    ej2AngularBase.Template(),
    __metadata("design:type", Object)
], AccordionItemDirective.prototype, "header", void 0);
__decorate([
    ej2AngularBase.Template(),
    __metadata("design:type", Object)
], AccordionItemDirective.prototype, "content", void 0);
/**
 * AccordionItem Array Directive
 */
var AccordionItemsDirective = /** @class */ (function (_super) {
    __extends(AccordionItemsDirective, _super);
    function AccordionItemsDirective() {
        return _super.call(this, 'items') || this;
    }
    return AccordionItemsDirective;
}(ej2AngularBase.ArrayBase));
AccordionItemsDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'ejs-accordion>e-accordionitems',
                queries: {
                    children: new core.ContentChildren(AccordionItemDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
AccordionItemsDirective.ctorParameters = function () { return []; };
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
var inputs = ['animation', 'dataSource', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'expandMode', 'expandedIndices', 'headerTemplate', 'height', 'itemTemplate', 'items', 'locale', 'width'];
var outputs$1 = ['clicked', 'created', 'destroyed', 'expanded', 'expanding', 'expandedIndicesChange'];
var twoWays = ['expandedIndices'];
/**
 * Represents the Angular Accordion Component.
 * ```html
 * <ejs-accordion></ejs-accordion>
 * ```
 */
exports.AccordionComponent = /** @class */ (function (_super) {
    __extends(AccordionComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function AccordionComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.srenderer = srenderer;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.tags = ['items'];
        _this.element = _this.ngEle.nativeElement;
        _this.injectedModules = _this.injectedModules || [];
        _this.registerEvents(outputs$1);
        _this.addTwoWay.call(_this, twoWays);
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.containerContext = new ej2AngularBase.ComponentBase();
        return _this;
    }
    /**
     * @return {?}
     */
    AccordionComponent.prototype.ngOnInit = function () {
        this.containerContext.ngOnInit(this);
    };
    /**
     * @return {?}
     */
    AccordionComponent.prototype.ngAfterViewInit = function () {
        this.containerContext.ngAfterViewInit(this);
    };
    /**
     * @return {?}
     */
    AccordionComponent.prototype.ngOnDestroy = function () {
        this.containerContext.ngOnDestroy(this);
    };
    /**
     * @return {?}
     */
    AccordionComponent.prototype.ngAfterContentChecked = function () {
        this.tagObjects[0].instance = this.childItems;
        this.containerContext.ngAfterContentChecked(this);
    };
    return AccordionComponent;
}(ej2Navigations.Accordion));
exports.AccordionComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ejs-accordion',
                inputs: inputs,
                outputs: outputs$1,
                template: "<ng-content select='div'></ng-content>",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                queries: {
                    childItems: new core.ContentChild(AccordionItemsDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
exports.AccordionComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: core.ViewContainerRef, },
    { type: core.Injector, },
]; };
exports.AccordionComponent.propDecorators = {
    'headerTemplate': [{ type: core.ContentChild, args: ['headerTemplate',] },],
    'itemTemplate': [{ type: core.ContentChild, args: ['itemTemplate',] },],
};
__decorate$1([
    ej2AngularBase.Template(),
    __metadata$1("design:type", Object)
], exports.AccordionComponent.prototype, "headerTemplate", void 0);
__decorate$1([
    ej2AngularBase.Template(),
    __metadata$1("design:type", Object)
], exports.AccordionComponent.prototype, "itemTemplate", void 0);
exports.AccordionComponent = __decorate$1([
    ej2AngularBase.ComponentMixins([ej2AngularBase.ComponentBase]),
    __metadata$1("design:paramtypes", [core.ElementRef,
        core.Renderer2,
        core.ViewContainerRef,
        core.Injector])
], exports.AccordionComponent);
/**
 * NgModule definition for the Accordion component.
 */
var AccordionModule = /** @class */ (function () {
    function AccordionModule() {
    }
    return AccordionModule;
}());
AccordionModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [
                    exports.AccordionComponent,
                    AccordionItemDirective,
                    AccordionItemsDirective
                ],
                exports: [
                    exports.AccordionComponent,
                    AccordionItemDirective,
                    AccordionItemsDirective
                ]
            },] },
];
/**
 * @nocollapse
 */
AccordionModule.ctorParameters = function () { return []; };
/**
 * NgModule definition for the Accordion component with providers.
 */
var AccordionAllModule = /** @class */ (function () {
    function AccordionAllModule() {
    }
    return AccordionAllModule;
}());
AccordionAllModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule, AccordionModule],
                exports: [
                    AccordionModule
                ],
                providers: []
            },] },
];
/**
 * @nocollapse
 */
AccordionAllModule.ctorParameters = function () { return []; };
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
var input$1 = ['align', 'cssClass', 'disabled', 'htmlAttributes', 'id', 'overflow', 'prefixIcon', 'showAlwaysInPopup', 'showTextOn', 'suffixIcon', 'template', 'text', 'tooltipText', 'type', 'visible', 'width'];
var outputs$2 = ['click'];
/**
 * 'e-item' directive represent a item of the Angular Toolbar.
 * It must be contained in a Toolbar component(`ejs-toolbar`).
 * ```html
 * <ejs-toolbar>
 *   <e-items>
 *    <e-item text='Cut'></e-item>
 *    <e-item text='Copy'></e-item>
 *   </e-items>
 * </ejs-toolbar>
 * ```
 */
var ItemDirective = /** @class */ (function (_super) {
    __extends(ItemDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function ItemDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$2);
        _this.directivePropList = input$1;
        return _this;
    }
    return ItemDirective;
}(ej2AngularBase.ComplexBase));
ItemDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'e-items>e-item',
                inputs: input$1,
                outputs: outputs$2,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
ItemDirective.ctorParameters = function () { return [
    { type: core.ViewContainerRef, },
]; };
ItemDirective.propDecorators = {
    'template': [{ type: core.ContentChild, args: ['template',] },],
};
__decorate$2([
    ej2AngularBase.Template(),
    __metadata$2("design:type", Object)
], ItemDirective.prototype, "template", void 0);
/**
 * Item Array Directive
 */
var ItemsDirective = /** @class */ (function (_super) {
    __extends(ItemsDirective, _super);
    function ItemsDirective() {
        return _super.call(this, 'items') || this;
    }
    return ItemsDirective;
}(ej2AngularBase.ArrayBase));
ItemsDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'ejs-toolbar>e-items',
                queries: {
                    children: new core.ContentChildren(ItemDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
ItemsDirective.ctorParameters = function () { return []; };
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
var inputs$1 = ['allowKeyboard', 'cssClass', 'enableCollision', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'height', 'items', 'locale', 'overflowMode', 'scrollStep', 'width'];
var outputs$3 = ['beforeCreate', 'clicked', 'created', 'destroyed'];
var twoWays$1 = [''];
/**
 * Represents the Angular Toolbar Component.
 * ```html
 * <ejs-toolbar></ejs-toolbar>
 * ```
 */
exports.ToolbarComponent = /** @class */ (function (_super) {
    __extends(ToolbarComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function ToolbarComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.srenderer = srenderer;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.tags = ['items'];
        _this.element = _this.ngEle.nativeElement;
        _this.injectedModules = _this.injectedModules || [];
        _this.registerEvents(outputs$3);
        _this.addTwoWay.call(_this, twoWays$1);
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.containerContext = new ej2AngularBase.ComponentBase();
        return _this;
    }
    /**
     * @return {?}
     */
    ToolbarComponent.prototype.ngOnInit = function () {
        this.containerContext.ngOnInit(this);
    };
    /**
     * @return {?}
     */
    ToolbarComponent.prototype.ngAfterViewInit = function () {
        this.containerContext.ngAfterViewInit(this);
    };
    /**
     * @return {?}
     */
    ToolbarComponent.prototype.ngOnDestroy = function () {
        this.containerContext.ngOnDestroy(this);
    };
    /**
     * @return {?}
     */
    ToolbarComponent.prototype.ngAfterContentChecked = function () {
        this.tagObjects[0].instance = this.childItems;
        this.containerContext.ngAfterContentChecked(this);
    };
    return ToolbarComponent;
}(ej2Navigations.Toolbar));
exports.ToolbarComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ejs-toolbar',
                inputs: inputs$1,
                outputs: outputs$3,
                template: "<ng-content select='div'></ng-content>",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                queries: {
                    childItems: new core.ContentChild(ItemsDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
exports.ToolbarComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: core.ViewContainerRef, },
    { type: core.Injector, },
]; };
exports.ToolbarComponent = __decorate$3([
    ej2AngularBase.ComponentMixins([ej2AngularBase.ComponentBase]),
    __metadata$3("design:paramtypes", [core.ElementRef,
        core.Renderer2,
        core.ViewContainerRef,
        core.Injector])
], exports.ToolbarComponent);
/**
 * NgModule definition for the Toolbar component.
 */
var ToolbarModule = /** @class */ (function () {
    function ToolbarModule() {
    }
    return ToolbarModule;
}());
ToolbarModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [
                    exports.ToolbarComponent,
                    ItemDirective,
                    ItemsDirective
                ],
                exports: [
                    exports.ToolbarComponent,
                    ItemDirective,
                    ItemsDirective
                ]
            },] },
];
/**
 * @nocollapse
 */
ToolbarModule.ctorParameters = function () { return []; };
/**
 * NgModule definition for the Toolbar component with providers.
 */
var ToolbarAllModule = /** @class */ (function () {
    function ToolbarAllModule() {
    }
    return ToolbarAllModule;
}());
ToolbarAllModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule, ToolbarModule],
                exports: [
                    ToolbarModule
                ],
                providers: []
            },] },
];
/**
 * @nocollapse
 */
ToolbarAllModule.ctorParameters = function () { return []; };
var __decorate$4 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$4 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
var inputs$2 = ['animationSettings', 'cssClass', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'enableScrolling', 'fields', 'filter', 'items', 'locale', 'showItemOnClick', 'target', 'template'];
var outputs$4 = ['beforeClose', 'beforeItemRender', 'beforeOpen', 'created', 'onClose', 'onOpen', 'select'];
var twoWays$2 = [''];
/**
 * Represents the EJ2 Angular ContextMenu Component.
 * ```html
 * <div id='target'>Right click / Touch hold to open the ContextMenu</div>
 * <ejs-contextmenu target='#target' [items]='menuItems'></ejs-contextmenu>
 * ```
 */
exports.ContextMenuComponent = /** @class */ (function (_super) {
    __extends(ContextMenuComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function ContextMenuComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.srenderer = srenderer;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.element = _this.ngEle.nativeElement;
        _this.injectedModules = _this.injectedModules || [];
        _this.registerEvents(outputs$4);
        _this.addTwoWay.call(_this, twoWays$2);
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.context = new ej2AngularBase.ComponentBase();
        return _this;
    }
    /**
     * @return {?}
     */
    ContextMenuComponent.prototype.ngOnInit = function () {
        this.context.ngOnInit(this);
    };
    /**
     * @return {?}
     */
    ContextMenuComponent.prototype.ngAfterViewInit = function () {
        this.context.ngAfterViewInit(this);
    };
    /**
     * @return {?}
     */
    ContextMenuComponent.prototype.ngOnDestroy = function () {
        this.context.ngOnDestroy(this);
    };
    /**
     * @return {?}
     */
    ContextMenuComponent.prototype.ngAfterContentChecked = function () {
        this.context.ngAfterContentChecked(this);
    };
    return ContextMenuComponent;
}(ej2Navigations.ContextMenu));
exports.ContextMenuComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ejs-contextmenu',
                inputs: inputs$2,
                outputs: outputs$4,
                template: '',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
exports.ContextMenuComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: core.ViewContainerRef, },
    { type: core.Injector, },
]; };
exports.ContextMenuComponent = __decorate$4([
    ej2AngularBase.ComponentMixins([ej2AngularBase.ComponentBase]),
    __metadata$4("design:paramtypes", [core.ElementRef,
        core.Renderer2,
        core.ViewContainerRef,
        core.Injector])
], exports.ContextMenuComponent);
/**
 * NgModule definition for the ContextMenu component.
 */
var ContextMenuModule = /** @class */ (function () {
    function ContextMenuModule() {
    }
    return ContextMenuModule;
}());
ContextMenuModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [
                    exports.ContextMenuComponent
                ],
                exports: [
                    exports.ContextMenuComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
ContextMenuModule.ctorParameters = function () { return []; };
/**
 * NgModule definition for the ContextMenu component with providers.
 */
var ContextMenuAllModule = /** @class */ (function () {
    function ContextMenuAllModule() {
    }
    return ContextMenuAllModule;
}());
ContextMenuAllModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule, ContextMenuModule],
                exports: [
                    ContextMenuModule
                ],
                providers: []
            },] },
];
/**
 * @nocollapse
 */
ContextMenuAllModule.ctorParameters = function () { return []; };
var __decorate$5 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$5 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
var input$2 = ['content', 'cssClass', 'disabled', 'header', 'headerTemplate', 'visible'];
var outputs$5 = [];
/**
 * 'e-tabitem' directive represent a item of the Angular Tab.
 * It must be contained in a Tab component(`ejs-tab`).
 * ```html
 * <ejs-tab>
 *  <e-tabitems>
 *   <e-tabitem [header]='Header 1' [content]='Content 1'></e-tabitem>
 *   <e-tabitem [header]='Header 2' [content]='Content 2'></e-tabitem>
 *  <e-tabitems>
 * </ejs-tab>
 * ```
 */
var TabItemDirective = /** @class */ (function (_super) {
    __extends(TabItemDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function TabItemDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$5);
        _this.directivePropList = input$2;
        return _this;
    }
    return TabItemDirective;
}(ej2AngularBase.ComplexBase));
TabItemDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'e-tabitems>e-tabitem',
                inputs: input$2,
                outputs: outputs$5,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
TabItemDirective.ctorParameters = function () { return [
    { type: core.ViewContainerRef, },
]; };
TabItemDirective.propDecorators = {
    'content': [{ type: core.ContentChild, args: ['content',] },],
    'header_text': [{ type: core.ContentChild, args: ['headerText',] },],
    'headerTemplate': [{ type: core.ContentChild, args: ['headerTemplate',] },],
};
__decorate$5([
    ej2AngularBase.Template(),
    __metadata$5("design:type", Object)
], TabItemDirective.prototype, "content", void 0);
__decorate$5([
    ej2AngularBase.Template(),
    __metadata$5("design:type", Object)
], TabItemDirective.prototype, "header_text", void 0);
__decorate$5([
    ej2AngularBase.Template(),
    __metadata$5("design:type", Object)
], TabItemDirective.prototype, "headerTemplate", void 0);
/**
 * TabItem Array Directive
 */
var TabItemsDirective = /** @class */ (function (_super) {
    __extends(TabItemsDirective, _super);
    function TabItemsDirective() {
        return _super.call(this, 'items') || this;
    }
    return TabItemsDirective;
}(ej2AngularBase.ArrayBase));
TabItemsDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'ejs-tab>e-tabitems',
                queries: {
                    children: new core.ContentChildren(TabItemDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
TabItemsDirective.ctorParameters = function () { return []; };
var __decorate$6 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$6 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
var inputs$3 = ['animation', 'cssClass', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'headerPlacement', 'height', 'heightAdjustMode', 'items', 'loadOn', 'locale', 'overflowMode', 'scrollStep', 'selectedItem', 'showCloseButton', 'width'];
var outputs$6 = ['added', 'adding', 'created', 'destroyed', 'removed', 'removing', 'selected', 'selecting'];
var twoWays$3 = [''];
/**
 * Represents the Angular Tab Component.
 * ```html
 * <ejs-tab></ejs-tab>
 * ```
 */
exports.TabComponent = /** @class */ (function (_super) {
    __extends(TabComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function TabComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.srenderer = srenderer;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.tags = ['items'];
        _this.element = _this.ngEle.nativeElement;
        _this.injectedModules = _this.injectedModules || [];
        _this.registerEvents(outputs$6);
        _this.addTwoWay.call(_this, twoWays$3);
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.containerContext = new ej2AngularBase.ComponentBase();
        return _this;
    }
    /**
     * @return {?}
     */
    TabComponent.prototype.ngOnInit = function () {
        this.containerContext.ngOnInit(this);
    };
    /**
     * @return {?}
     */
    TabComponent.prototype.ngAfterViewInit = function () {
        this.containerContext.ngAfterViewInit(this);
    };
    /**
     * @return {?}
     */
    TabComponent.prototype.ngOnDestroy = function () {
        this.containerContext.ngOnDestroy(this);
    };
    /**
     * @return {?}
     */
    TabComponent.prototype.ngAfterContentChecked = function () {
        this.tagObjects[0].instance = this.childItems;
        this.containerContext.ngAfterContentChecked(this);
    };
    return TabComponent;
}(ej2Navigations.Tab));
exports.TabComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ejs-tab',
                inputs: inputs$3,
                outputs: outputs$6,
                template: "<ng-content select='div'></ng-content>",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                queries: {
                    childItems: new core.ContentChild(TabItemsDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
exports.TabComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: core.ViewContainerRef, },
    { type: core.Injector, },
]; };
exports.TabComponent = __decorate$6([
    ej2AngularBase.ComponentMixins([ej2AngularBase.ComponentBase]),
    __metadata$6("design:paramtypes", [core.ElementRef,
        core.Renderer2,
        core.ViewContainerRef,
        core.Injector])
], exports.TabComponent);
/**
 * NgModule definition for the Tab component.
 */
var TabModule = /** @class */ (function () {
    function TabModule() {
    }
    return TabModule;
}());
TabModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [
                    exports.TabComponent,
                    TabItemDirective,
                    TabItemsDirective
                ],
                exports: [
                    exports.TabComponent,
                    TabItemDirective,
                    TabItemsDirective
                ]
            },] },
];
/**
 * @nocollapse
 */
TabModule.ctorParameters = function () { return []; };
/**
 * NgModule definition for the Tab component with providers.
 */
var TabAllModule = /** @class */ (function () {
    function TabAllModule() {
    }
    return TabAllModule;
}());
TabAllModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule, TabModule],
                exports: [
                    TabModule
                ],
                providers: []
            },] },
];
/**
 * @nocollapse
 */
TabAllModule.ctorParameters = function () { return []; };
var __decorate$7 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$7 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
var inputs$4 = ['allowDragAndDrop', 'allowEditing', 'allowMultiSelection', 'animation', 'autoCheck', 'checkedNodes', 'cssClass', 'disabled', 'dragArea', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'expandOn', 'expandedNodes', 'fields', 'fullRowNavigable', 'fullRowSelect', 'loadOnDemand', 'locale', 'nodeTemplate', 'selectedNodes', 'showCheckBox', 'sortOrder'];
var outputs$7 = ['actionFailure', 'created', 'dataBound', 'dataSourceChanged', 'destroyed', 'drawNode', 'keyPress', 'nodeChecked', 'nodeChecking', 'nodeClicked', 'nodeCollapsed', 'nodeCollapsing', 'nodeDragStart', 'nodeDragStop', 'nodeDragging', 'nodeDropped', 'nodeEdited', 'nodeEditing', 'nodeExpanded', 'nodeExpanding', 'nodeSelected', 'nodeSelecting'];
var twoWays$4 = [''];
/**
 * TreeView component is used to represent the hierarchical data in tree like structure with advanced functions to perform edit, drag and drop, selection with check-box and more.
 * ```html
 * <ej-treeview allowDragAndDrop='true'></ej-treeview>
 * ```
 */
exports.TreeViewComponent = /** @class */ (function (_super) {
    __extends(TreeViewComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function TreeViewComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.srenderer = srenderer;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.element = _this.ngEle.nativeElement;
        _this.injectedModules = _this.injectedModules || [];
        _this.registerEvents(outputs$7);
        _this.addTwoWay.call(_this, twoWays$4);
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.context = new ej2AngularBase.ComponentBase();
        return _this;
    }
    /**
     * @return {?}
     */
    TreeViewComponent.prototype.ngOnInit = function () {
        this.context.ngOnInit(this);
    };
    /**
     * @return {?}
     */
    TreeViewComponent.prototype.ngAfterViewInit = function () {
        this.context.ngAfterViewInit(this);
    };
    /**
     * @return {?}
     */
    TreeViewComponent.prototype.ngOnDestroy = function () {
        this.context.ngOnDestroy(this);
    };
    /**
     * @return {?}
     */
    TreeViewComponent.prototype.ngAfterContentChecked = function () {
        this.context.ngAfterContentChecked(this);
    };
    return TreeViewComponent;
}(ej2Navigations.TreeView));
exports.TreeViewComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ejs-treeview',
                inputs: inputs$4,
                outputs: outputs$7,
                template: '',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
exports.TreeViewComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: core.ViewContainerRef, },
    { type: core.Injector, },
]; };
exports.TreeViewComponent.propDecorators = {
    'nodeTemplate': [{ type: core.ContentChild, args: ['nodeTemplate',] },],
};
__decorate$7([
    ej2AngularBase.Template(),
    __metadata$7("design:type", Object)
], exports.TreeViewComponent.prototype, "nodeTemplate", void 0);
exports.TreeViewComponent = __decorate$7([
    ej2AngularBase.ComponentMixins([ej2AngularBase.ComponentBase]),
    __metadata$7("design:paramtypes", [core.ElementRef,
        core.Renderer2,
        core.ViewContainerRef,
        core.Injector])
], exports.TreeViewComponent);
/**
 * NgModule definition for the TreeView component.
 */
var TreeViewModule = /** @class */ (function () {
    function TreeViewModule() {
    }
    return TreeViewModule;
}());
TreeViewModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [
                    exports.TreeViewComponent
                ],
                exports: [
                    exports.TreeViewComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
TreeViewModule.ctorParameters = function () { return []; };
/**
 * NgModule definition for the TreeView component with providers.
 */
var TreeViewAllModule = /** @class */ (function () {
    function TreeViewAllModule() {
    }
    return TreeViewAllModule;
}());
TreeViewAllModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule, TreeViewModule],
                exports: [
                    TreeViewModule
                ],
                providers: []
            },] },
];
/**
 * @nocollapse
 */
TreeViewAllModule.ctorParameters = function () { return []; };
var __decorate$8 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$8 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
var inputs$5 = ['animate', 'closeOnDocumentClick', 'dockSize', 'enableDock', 'enableGestures', 'enablePersistence', 'enableRtl', 'height', 'isOpen', 'locale', 'mediaQuery', 'position', 'showBackdrop', 'target', 'type', 'width', 'zIndex'];
var outputs$8 = ['change', 'close', 'created', 'destroyed', 'open', 'isOpenChange'];
var twoWays$5 = ['isOpen'];
/**
 * Represents the Essential JS 2 Angular Sidebar Component.
 * ```html
 * <ejs-sidebar></ejs-sidebar>
 * ```
 */
exports.SidebarComponent = /** @class */ (function (_super) {
    __extends(SidebarComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function SidebarComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.srenderer = srenderer;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.element = _this.ngEle.nativeElement;
        _this.injectedModules = _this.injectedModules || [];
        _this.registerEvents(outputs$8);
        _this.addTwoWay.call(_this, twoWays$5);
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.containerContext = new ej2AngularBase.ComponentBase();
        return _this;
    }
    /**
     * @return {?}
     */
    SidebarComponent.prototype.ngOnInit = function () {
        this.containerContext.ngOnInit(this);
    };
    /**
     * @return {?}
     */
    SidebarComponent.prototype.ngAfterViewInit = function () {
        this.containerContext.ngAfterViewInit(this);
    };
    /**
     * @return {?}
     */
    SidebarComponent.prototype.ngOnDestroy = function () {
        this.containerContext.ngOnDestroy(this);
    };
    /**
     * @return {?}
     */
    SidebarComponent.prototype.ngAfterContentChecked = function () {
        this.containerContext.ngAfterContentChecked(this);
    };
    return SidebarComponent;
}(ej2Navigations.Sidebar));
exports.SidebarComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ejs-sidebar',
                inputs: inputs$5,
                outputs: outputs$8,
                template: "<ng-content ></ng-content>",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
exports.SidebarComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: core.ViewContainerRef, },
    { type: core.Injector, },
]; };
exports.SidebarComponent = __decorate$8([
    ej2AngularBase.ComponentMixins([ej2AngularBase.ComponentBase]),
    __metadata$8("design:paramtypes", [core.ElementRef,
        core.Renderer2,
        core.ViewContainerRef,
        core.Injector])
], exports.SidebarComponent);
/**
 * NgModule definition for the Sidebar component.
 */
var SidebarModule = /** @class */ (function () {
    function SidebarModule() {
    }
    return SidebarModule;
}());
SidebarModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [
                    exports.SidebarComponent
                ],
                exports: [
                    exports.SidebarComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
SidebarModule.ctorParameters = function () { return []; };
/**
 * NgModule definition for the Sidebar component with providers.
 */
var SidebarAllModule = /** @class */ (function () {
    function SidebarAllModule() {
    }
    return SidebarAllModule;
}());
SidebarAllModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule, SidebarModule],
                exports: [
                    SidebarModule
                ],
                providers: []
            },] },
];
/**
 * @nocollapse
 */
SidebarAllModule.ctorParameters = function () { return []; };
var input$3 = ['iconCss', 'id', 'items', 'separator', 'text', 'url'];
var outputs$9 = [];
var MenuItemDirective = /** @class */ (function (_super) {
    __extends(MenuItemDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function MenuItemDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$9);
        _this.directivePropList = input$3;
        return _this;
    }
    return MenuItemDirective;
}(ej2AngularBase.ComplexBase));
MenuItemDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'ejs-menu>e-menu-items>e-menu-item>',
                inputs: input$3,
                outputs: outputs$9,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
MenuItemDirective.ctorParameters = function () { return [
    { type: core.ViewContainerRef, },
]; };
/**
 * MenuItem Array Directive
 */
var MenuItemsDirective = /** @class */ (function (_super) {
    __extends(MenuItemsDirective, _super);
    function MenuItemsDirective() {
        return _super.call(this, 'items') || this;
    }
    return MenuItemsDirective;
}(ej2AngularBase.ArrayBase));
MenuItemsDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'ejs-menu>e-menu-items',
                queries: {
                    children: new core.ContentChildren(MenuItemDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
MenuItemsDirective.ctorParameters = function () { return []; };
var __decorate$9 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$9 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
var inputs$6 = ['animationSettings', 'cssClass', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'enableScrolling', 'fields', 'filter', 'hamburgerMode', 'items', 'locale', 'orientation', 'showItemOnClick', 'target', 'template', 'title'];
var outputs$10 = ['beforeClose', 'beforeItemRender', 'beforeOpen', 'created', 'onClose', 'onOpen', 'select'];
var twoWays$6 = [''];
/**
 * Represents the EJ2 Angular Menu Component.
 * ```html
 * <ejs-menu [items]='menuItems'></ejs-menu>
 * ```
 */
exports.MenuComponent = /** @class */ (function (_super) {
    __extends(MenuComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function MenuComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.srenderer = srenderer;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.tags = ['items'];
        _this.element = _this.ngEle.nativeElement;
        _this.injectedModules = _this.injectedModules || [];
        _this.registerEvents(outputs$10);
        _this.addTwoWay.call(_this, twoWays$6);
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.context = new ej2AngularBase.ComponentBase();
        return _this;
    }
    /**
     * @return {?}
     */
    MenuComponent.prototype.ngOnInit = function () {
        this.context.ngOnInit(this);
    };
    /**
     * @return {?}
     */
    MenuComponent.prototype.ngAfterViewInit = function () {
        this.context.ngAfterViewInit(this);
    };
    /**
     * @return {?}
     */
    MenuComponent.prototype.ngOnDestroy = function () {
        this.context.ngOnDestroy(this);
    };
    /**
     * @return {?}
     */
    MenuComponent.prototype.ngAfterContentChecked = function () {
        this.tagObjects[0].instance = this.childItems;
        this.context.ngAfterContentChecked(this);
    };
    return MenuComponent;
}(ej2Navigations.Menu));
exports.MenuComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ejs-menu',
                inputs: inputs$6,
                outputs: outputs$10,
                template: '',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                queries: {
                    childItems: new core.ContentChild(MenuItemsDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
exports.MenuComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: core.ViewContainerRef, },
    { type: core.Injector, },
]; };
exports.MenuComponent.propDecorators = {
    'template': [{ type: core.ContentChild, args: ['template',] },],
};
__decorate$9([
    ej2AngularBase.Template(),
    __metadata$9("design:type", Object)
], exports.MenuComponent.prototype, "template", void 0);
exports.MenuComponent = __decorate$9([
    ej2AngularBase.ComponentMixins([ej2AngularBase.ComponentBase]),
    __metadata$9("design:paramtypes", [core.ElementRef,
        core.Renderer2,
        core.ViewContainerRef,
        core.Injector])
], exports.MenuComponent);
/**
 * NgModule definition for the Menu component.
 */
var MenuModule = /** @class */ (function () {
    function MenuModule() {
    }
    return MenuModule;
}());
MenuModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [
                    exports.MenuComponent,
                    MenuItemDirective,
                    MenuItemsDirective
                ],
                exports: [
                    exports.MenuComponent,
                    MenuItemDirective,
                    MenuItemsDirective
                ]
            },] },
];
/**
 * @nocollapse
 */
MenuModule.ctorParameters = function () { return []; };
/**
 * NgModule definition for the Menu component with providers.
 */
var MenuAllModule = /** @class */ (function () {
    function MenuAllModule() {
    }
    return MenuAllModule;
}());
MenuAllModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule, MenuModule],
                exports: [
                    MenuModule
                ],
                providers: []
            },] },
];
/**
 * @nocollapse
 */
MenuAllModule.ctorParameters = function () { return []; };

exports.AccordionItemDirective = AccordionItemDirective;
exports.AccordionItemsDirective = AccordionItemsDirective;
exports.AccordionModule = AccordionModule;
exports.AccordionAllModule = AccordionAllModule;
exports.ItemDirective = ItemDirective;
exports.ItemsDirective = ItemsDirective;
exports.ToolbarModule = ToolbarModule;
exports.ToolbarAllModule = ToolbarAllModule;
exports.ContextMenuModule = ContextMenuModule;
exports.ContextMenuAllModule = ContextMenuAllModule;
exports.TabItemDirective = TabItemDirective;
exports.TabItemsDirective = TabItemsDirective;
exports.TabModule = TabModule;
exports.TabAllModule = TabAllModule;
exports.TreeViewModule = TreeViewModule;
exports.TreeViewAllModule = TreeViewAllModule;
exports.SidebarModule = SidebarModule;
exports.SidebarAllModule = SidebarAllModule;
exports.MenuItemDirective = MenuItemDirective;
exports.MenuItemsDirective = MenuItemsDirective;
exports.MenuModule = MenuModule;
exports.MenuAllModule = MenuAllModule;
exports.ɵa = inputs;
exports.ɵb = outputs$1;
exports.ɵe = inputs$2;
exports.ɵf = outputs$4;
exports.ɵm = inputs$6;
exports.ɵn = outputs$10;
exports.ɵk = inputs$5;
exports.ɵl = outputs$8;
exports.ɵg = inputs$3;
exports.ɵh = outputs$6;
exports.ɵc = inputs$1;
exports.ɵd = outputs$3;
exports.ɵi = inputs$4;
exports.ɵj = outputs$7;
exports.MenuAnimationSettings = ej2Navigations.MenuAnimationSettings;
exports.MenuItem = ej2Navigations.MenuItem;
exports.HScroll = ej2Navigations.HScroll;
exports.VScroll = ej2Navigations.VScroll;
exports.Item = ej2Navigations.Item;
exports.Toolbar = ej2Navigations.Toolbar;
exports.AccordionActionSettings = ej2Navigations.AccordionActionSettings;
exports.AccordionAnimationSettings = ej2Navigations.AccordionAnimationSettings;
exports.AccordionItem = ej2Navigations.AccordionItem;
exports.Accordion = ej2Navigations.Accordion;
exports.ContextMenu = ej2Navigations.ContextMenu;
exports.Menu = ej2Navigations.Menu;
exports.TabActionSettings = ej2Navigations.TabActionSettings;
exports.TabAnimationSettings = ej2Navigations.TabAnimationSettings;
exports.Header = ej2Navigations.Header;
exports.TabItem = ej2Navigations.TabItem;
exports.Tab = ej2Navigations.Tab;
exports.FieldsSettings = ej2Navigations.FieldsSettings;
exports.ActionSettings = ej2Navigations.ActionSettings;
exports.NodeAnimationSettings = ej2Navigations.NodeAnimationSettings;
exports.TreeView = ej2Navigations.TreeView;
exports.Sidebar = ej2Navigations.Sidebar;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ej2-angular-navigations.umd.js.map
