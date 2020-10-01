import { ChangeDetectionStrategy, Component, ContentChild, ContentChildren, Directive, ElementRef, Injector, NgModule, Renderer2, ViewContainerRef } from '@angular/core';
import { ArrayBase, ComplexBase, ComponentBase, ComponentMixins, Template, setValue } from '@syncfusion/ej2-angular-base';
import { Accordion, ContextMenu, Menu, Sidebar, Tab, Toolbar, TreeView } from '@syncfusion/ej2-navigations';
import { CommonModule } from '@angular/common';

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let input = ['content', 'cssClass', 'disabled', 'expanded', 'header', 'iconCss', 'visible'];
let outputs = [];
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
class AccordionItemDirective extends ComplexBase {
    /**
     * @param {?} viewContainerRef
     */
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}
AccordionItemDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-accordionitems>e-accordionitem',
                inputs: input,
                outputs: outputs,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
AccordionItemDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
AccordionItemDirective.propDecorators = {
    'header': [{ type: ContentChild, args: ['header',] },],
    'content': [{ type: ContentChild, args: ['content',] },],
};
__decorate([
    Template(),
    __metadata("design:type", Object)
], AccordionItemDirective.prototype, "header", void 0);
__decorate([
    Template(),
    __metadata("design:type", Object)
], AccordionItemDirective.prototype, "content", void 0);
/**
 * AccordionItem Array Directive
 */
class AccordionItemsDirective extends ArrayBase {
    constructor() {
        super('items');
    }
}
AccordionItemsDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-accordion>e-accordionitems',
                queries: {
                    children: new ContentChildren(AccordionItemDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
AccordionItemsDirective.ctorParameters = () => [];

var __decorate$1 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const inputs = ['animation', 'dataSource', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'expandMode', 'expandedIndices', 'headerTemplate', 'height', 'itemTemplate', 'items', 'locale', 'width'];
const outputs$1 = ['clicked', 'created', 'destroyed', 'expanded', 'expanding', 'expandedIndicesChange'];
const twoWays = ['expandedIndices'];
/**
 * Represents the Angular Accordion Component.
 * ```html
 * <ejs-accordion></ejs-accordion>
 * ```
 */
let AccordionComponent = class AccordionComponent extends Accordion {
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.tags = ['items'];
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        this.registerEvents(outputs$1);
        this.addTwoWay.call(this, twoWays);
        setValue('currentInstance', this, this.viewContainerRef);
        this.containerContext = new ComponentBase();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.containerContext.ngOnInit(this);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.containerContext.ngAfterViewInit(this);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.containerContext.ngOnDestroy(this);
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        this.tagObjects[0].instance = this.childItems;
        this.containerContext.ngAfterContentChecked(this);
    }
};
AccordionComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-accordion',
                inputs: inputs,
                outputs: outputs$1,
                template: `<ng-content select='div'></ng-content>`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                queries: {
                    childItems: new ContentChild(AccordionItemsDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
AccordionComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
];
AccordionComponent.propDecorators = {
    'headerTemplate': [{ type: ContentChild, args: ['headerTemplate',] },],
    'itemTemplate': [{ type: ContentChild, args: ['itemTemplate',] },],
};
__decorate$1([
    Template(),
    __metadata$1("design:type", Object)
], AccordionComponent.prototype, "headerTemplate", void 0);
__decorate$1([
    Template(),
    __metadata$1("design:type", Object)
], AccordionComponent.prototype, "itemTemplate", void 0);
AccordionComponent = __decorate$1([
    ComponentMixins([ComponentBase]),
    __metadata$1("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], AccordionComponent);

/**
 * NgModule definition for the Accordion component.
 */
class AccordionModule {
}
AccordionModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    AccordionComponent,
                    AccordionItemDirective,
                    AccordionItemsDirective
                ],
                exports: [
                    AccordionComponent,
                    AccordionItemDirective,
                    AccordionItemsDirective
                ]
            },] },
];
/**
 * @nocollapse
 */
AccordionModule.ctorParameters = () => [];

/**
 * NgModule definition for the Accordion component with providers.
 */
class AccordionAllModule {
}
AccordionAllModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, AccordionModule],
                exports: [
                    AccordionModule
                ],
                providers: []
            },] },
];
/**
 * @nocollapse
 */
AccordionAllModule.ctorParameters = () => [];

var __decorate$2 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$2 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let input$1 = ['align', 'cssClass', 'disabled', 'htmlAttributes', 'id', 'overflow', 'prefixIcon', 'showAlwaysInPopup', 'showTextOn', 'suffixIcon', 'template', 'text', 'tooltipText', 'type', 'visible', 'width'];
let outputs$2 = ['click'];
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
class ItemDirective extends ComplexBase {
    /**
     * @param {?} viewContainerRef
     */
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$2);
        this.directivePropList = input$1;
    }
}
ItemDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-items>e-item',
                inputs: input$1,
                outputs: outputs$2,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
ItemDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
ItemDirective.propDecorators = {
    'template': [{ type: ContentChild, args: ['template',] },],
};
__decorate$2([
    Template(),
    __metadata$2("design:type", Object)
], ItemDirective.prototype, "template", void 0);
/**
 * Item Array Directive
 */
class ItemsDirective extends ArrayBase {
    constructor() {
        super('items');
    }
}
ItemsDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-toolbar>e-items',
                queries: {
                    children: new ContentChildren(ItemDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
ItemsDirective.ctorParameters = () => [];

var __decorate$3 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$3 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const inputs$1 = ['allowKeyboard', 'cssClass', 'enableCollision', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'height', 'items', 'locale', 'overflowMode', 'scrollStep', 'width'];
const outputs$3 = ['beforeCreate', 'clicked', 'created', 'destroyed'];
const twoWays$1 = [''];
/**
 * Represents the Angular Toolbar Component.
 * ```html
 * <ejs-toolbar></ejs-toolbar>
 * ```
 */
let ToolbarComponent = class ToolbarComponent extends Toolbar {
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.tags = ['items'];
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        this.registerEvents(outputs$3);
        this.addTwoWay.call(this, twoWays$1);
        setValue('currentInstance', this, this.viewContainerRef);
        this.containerContext = new ComponentBase();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.containerContext.ngOnInit(this);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.containerContext.ngAfterViewInit(this);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.containerContext.ngOnDestroy(this);
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        this.tagObjects[0].instance = this.childItems;
        this.containerContext.ngAfterContentChecked(this);
    }
};
ToolbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-toolbar',
                inputs: inputs$1,
                outputs: outputs$3,
                template: `<ng-content select='div'></ng-content>`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                queries: {
                    childItems: new ContentChild(ItemsDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
ToolbarComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
];
ToolbarComponent = __decorate$3([
    ComponentMixins([ComponentBase]),
    __metadata$3("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], ToolbarComponent);

/**
 * NgModule definition for the Toolbar component.
 */
class ToolbarModule {
}
ToolbarModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    ToolbarComponent,
                    ItemDirective,
                    ItemsDirective
                ],
                exports: [
                    ToolbarComponent,
                    ItemDirective,
                    ItemsDirective
                ]
            },] },
];
/**
 * @nocollapse
 */
ToolbarModule.ctorParameters = () => [];

/**
 * NgModule definition for the Toolbar component with providers.
 */
class ToolbarAllModule {
}
ToolbarAllModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, ToolbarModule],
                exports: [
                    ToolbarModule
                ],
                providers: []
            },] },
];
/**
 * @nocollapse
 */
ToolbarAllModule.ctorParameters = () => [];

var __decorate$4 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$4 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const inputs$2 = ['animationSettings', 'cssClass', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'enableScrolling', 'fields', 'filter', 'items', 'locale', 'showItemOnClick', 'target', 'template'];
const outputs$4 = ['beforeClose', 'beforeItemRender', 'beforeOpen', 'created', 'onClose', 'onOpen', 'select'];
const twoWays$2 = [''];
/**
 * Represents the EJ2 Angular ContextMenu Component.
 * ```html
 * <div id='target'>Right click / Touch hold to open the ContextMenu</div>
 * <ejs-contextmenu target='#target' [items]='menuItems'></ejs-contextmenu>
 * ```
 */
let ContextMenuComponent = class ContextMenuComponent extends ContextMenu {
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        this.registerEvents(outputs$4);
        this.addTwoWay.call(this, twoWays$2);
        setValue('currentInstance', this, this.viewContainerRef);
        this.context = new ComponentBase();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.context.ngOnInit(this);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.context.ngAfterViewInit(this);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.context.ngOnDestroy(this);
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        this.context.ngAfterContentChecked(this);
    }
};
ContextMenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-contextmenu',
                inputs: inputs$2,
                outputs: outputs$4,
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
ContextMenuComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
];
ContextMenuComponent = __decorate$4([
    ComponentMixins([ComponentBase]),
    __metadata$4("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], ContextMenuComponent);

/**
 * NgModule definition for the ContextMenu component.
 */
class ContextMenuModule {
}
ContextMenuModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    ContextMenuComponent
                ],
                exports: [
                    ContextMenuComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
ContextMenuModule.ctorParameters = () => [];

/**
 * NgModule definition for the ContextMenu component with providers.
 */
class ContextMenuAllModule {
}
ContextMenuAllModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, ContextMenuModule],
                exports: [
                    ContextMenuModule
                ],
                providers: []
            },] },
];
/**
 * @nocollapse
 */
ContextMenuAllModule.ctorParameters = () => [];

var __decorate$5 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$5 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let input$2 = ['content', 'cssClass', 'disabled', 'header', 'headerTemplate', 'visible'];
let outputs$5 = [];
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
class TabItemDirective extends ComplexBase {
    /**
     * @param {?} viewContainerRef
     */
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$5);
        this.directivePropList = input$2;
    }
}
TabItemDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-tabitems>e-tabitem',
                inputs: input$2,
                outputs: outputs$5,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
TabItemDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
TabItemDirective.propDecorators = {
    'content': [{ type: ContentChild, args: ['content',] },],
    'header_text': [{ type: ContentChild, args: ['headerText',] },],
    'headerTemplate': [{ type: ContentChild, args: ['headerTemplate',] },],
};
__decorate$5([
    Template(),
    __metadata$5("design:type", Object)
], TabItemDirective.prototype, "content", void 0);
__decorate$5([
    Template(),
    __metadata$5("design:type", Object)
], TabItemDirective.prototype, "header_text", void 0);
__decorate$5([
    Template(),
    __metadata$5("design:type", Object)
], TabItemDirective.prototype, "headerTemplate", void 0);
/**
 * TabItem Array Directive
 */
class TabItemsDirective extends ArrayBase {
    constructor() {
        super('items');
    }
}
TabItemsDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-tab>e-tabitems',
                queries: {
                    children: new ContentChildren(TabItemDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
TabItemsDirective.ctorParameters = () => [];

var __decorate$6 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$6 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const inputs$3 = ['animation', 'cssClass', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'headerPlacement', 'height', 'heightAdjustMode', 'items', 'loadOn', 'locale', 'overflowMode', 'scrollStep', 'selectedItem', 'showCloseButton', 'width'];
const outputs$6 = ['added', 'adding', 'created', 'destroyed', 'removed', 'removing', 'selected', 'selecting'];
const twoWays$3 = [''];
/**
 * Represents the Angular Tab Component.
 * ```html
 * <ejs-tab></ejs-tab>
 * ```
 */
let TabComponent = class TabComponent extends Tab {
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.tags = ['items'];
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        this.registerEvents(outputs$6);
        this.addTwoWay.call(this, twoWays$3);
        setValue('currentInstance', this, this.viewContainerRef);
        this.containerContext = new ComponentBase();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.containerContext.ngOnInit(this);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.containerContext.ngAfterViewInit(this);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.containerContext.ngOnDestroy(this);
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        this.tagObjects[0].instance = this.childItems;
        this.containerContext.ngAfterContentChecked(this);
    }
};
TabComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-tab',
                inputs: inputs$3,
                outputs: outputs$6,
                template: `<ng-content select='div'></ng-content>`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                queries: {
                    childItems: new ContentChild(TabItemsDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
TabComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
];
TabComponent = __decorate$6([
    ComponentMixins([ComponentBase]),
    __metadata$6("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], TabComponent);

/**
 * NgModule definition for the Tab component.
 */
class TabModule {
}
TabModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    TabComponent,
                    TabItemDirective,
                    TabItemsDirective
                ],
                exports: [
                    TabComponent,
                    TabItemDirective,
                    TabItemsDirective
                ]
            },] },
];
/**
 * @nocollapse
 */
TabModule.ctorParameters = () => [];

/**
 * NgModule definition for the Tab component with providers.
 */
class TabAllModule {
}
TabAllModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, TabModule],
                exports: [
                    TabModule
                ],
                providers: []
            },] },
];
/**
 * @nocollapse
 */
TabAllModule.ctorParameters = () => [];

var __decorate$7 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$7 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const inputs$4 = ['allowDragAndDrop', 'allowEditing', 'allowMultiSelection', 'animation', 'autoCheck', 'checkedNodes', 'cssClass', 'disabled', 'dragArea', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'expandOn', 'expandedNodes', 'fields', 'fullRowNavigable', 'fullRowSelect', 'loadOnDemand', 'locale', 'nodeTemplate', 'selectedNodes', 'showCheckBox', 'sortOrder'];
const outputs$7 = ['actionFailure', 'created', 'dataBound', 'dataSourceChanged', 'destroyed', 'drawNode', 'keyPress', 'nodeChecked', 'nodeChecking', 'nodeClicked', 'nodeCollapsed', 'nodeCollapsing', 'nodeDragStart', 'nodeDragStop', 'nodeDragging', 'nodeDropped', 'nodeEdited', 'nodeEditing', 'nodeExpanded', 'nodeExpanding', 'nodeSelected', 'nodeSelecting'];
const twoWays$4 = [''];
/**
 * TreeView component is used to represent the hierarchical data in tree like structure with advanced functions to perform edit, drag and drop, selection with check-box and more.
 * ```html
 * <ej-treeview allowDragAndDrop='true'></ej-treeview>
 * ```
 */
let TreeViewComponent = class TreeViewComponent extends TreeView {
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        this.registerEvents(outputs$7);
        this.addTwoWay.call(this, twoWays$4);
        setValue('currentInstance', this, this.viewContainerRef);
        this.context = new ComponentBase();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.context.ngOnInit(this);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.context.ngAfterViewInit(this);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.context.ngOnDestroy(this);
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        this.context.ngAfterContentChecked(this);
    }
};
TreeViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-treeview',
                inputs: inputs$4,
                outputs: outputs$7,
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
TreeViewComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
];
TreeViewComponent.propDecorators = {
    'nodeTemplate': [{ type: ContentChild, args: ['nodeTemplate',] },],
};
__decorate$7([
    Template(),
    __metadata$7("design:type", Object)
], TreeViewComponent.prototype, "nodeTemplate", void 0);
TreeViewComponent = __decorate$7([
    ComponentMixins([ComponentBase]),
    __metadata$7("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], TreeViewComponent);

/**
 * NgModule definition for the TreeView component.
 */
class TreeViewModule {
}
TreeViewModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    TreeViewComponent
                ],
                exports: [
                    TreeViewComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
TreeViewModule.ctorParameters = () => [];

/**
 * NgModule definition for the TreeView component with providers.
 */
class TreeViewAllModule {
}
TreeViewAllModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, TreeViewModule],
                exports: [
                    TreeViewModule
                ],
                providers: []
            },] },
];
/**
 * @nocollapse
 */
TreeViewAllModule.ctorParameters = () => [];

var __decorate$8 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$8 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const inputs$5 = ['animate', 'closeOnDocumentClick', 'dockSize', 'enableDock', 'enableGestures', 'enablePersistence', 'enableRtl', 'height', 'isOpen', 'locale', 'mediaQuery', 'position', 'showBackdrop', 'target', 'type', 'width', 'zIndex'];
const outputs$8 = ['change', 'close', 'created', 'destroyed', 'open', 'isOpenChange'];
const twoWays$5 = ['isOpen'];
/**
 * Represents the Essential JS 2 Angular Sidebar Component.
 * ```html
 * <ejs-sidebar></ejs-sidebar>
 * ```
 */
let SidebarComponent = class SidebarComponent extends Sidebar {
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        this.registerEvents(outputs$8);
        this.addTwoWay.call(this, twoWays$5);
        setValue('currentInstance', this, this.viewContainerRef);
        this.containerContext = new ComponentBase();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.containerContext.ngOnInit(this);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.containerContext.ngAfterViewInit(this);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.containerContext.ngOnDestroy(this);
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        this.containerContext.ngAfterContentChecked(this);
    }
};
SidebarComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-sidebar',
                inputs: inputs$5,
                outputs: outputs$8,
                template: `<ng-content ></ng-content>`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
SidebarComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
];
SidebarComponent = __decorate$8([
    ComponentMixins([ComponentBase]),
    __metadata$8("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], SidebarComponent);

/**
 * NgModule definition for the Sidebar component.
 */
class SidebarModule {
}
SidebarModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    SidebarComponent
                ],
                exports: [
                    SidebarComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
SidebarModule.ctorParameters = () => [];

/**
 * NgModule definition for the Sidebar component with providers.
 */
class SidebarAllModule {
}
SidebarAllModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, SidebarModule],
                exports: [
                    SidebarModule
                ],
                providers: []
            },] },
];
/**
 * @nocollapse
 */
SidebarAllModule.ctorParameters = () => [];

let input$3 = ['iconCss', 'id', 'items', 'separator', 'text', 'url'];
let outputs$9 = [];
class MenuItemDirective extends ComplexBase {
    /**
     * @param {?} viewContainerRef
     */
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$9);
        this.directivePropList = input$3;
    }
}
MenuItemDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-menu>e-menu-items>e-menu-item>',
                inputs: input$3,
                outputs: outputs$9,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
MenuItemDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
/**
 * MenuItem Array Directive
 */
class MenuItemsDirective extends ArrayBase {
    constructor() {
        super('items');
    }
}
MenuItemsDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-menu>e-menu-items',
                queries: {
                    children: new ContentChildren(MenuItemDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
MenuItemsDirective.ctorParameters = () => [];

var __decorate$9 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$9 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const inputs$6 = ['animationSettings', 'cssClass', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'enableScrolling', 'fields', 'filter', 'hamburgerMode', 'items', 'locale', 'orientation', 'showItemOnClick', 'target', 'template', 'title'];
const outputs$10 = ['beforeClose', 'beforeItemRender', 'beforeOpen', 'created', 'onClose', 'onOpen', 'select'];
const twoWays$6 = [''];
/**
 * Represents the EJ2 Angular Menu Component.
 * ```html
 * <ejs-menu [items]='menuItems'></ejs-menu>
 * ```
 */
let MenuComponent = class MenuComponent extends Menu {
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.tags = ['items'];
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        this.registerEvents(outputs$10);
        this.addTwoWay.call(this, twoWays$6);
        setValue('currentInstance', this, this.viewContainerRef);
        this.context = new ComponentBase();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.context.ngOnInit(this);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.context.ngAfterViewInit(this);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.context.ngOnDestroy(this);
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        this.tagObjects[0].instance = this.childItems;
        this.context.ngAfterContentChecked(this);
    }
};
MenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-menu',
                inputs: inputs$6,
                outputs: outputs$10,
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                queries: {
                    childItems: new ContentChild(MenuItemsDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
MenuComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
];
MenuComponent.propDecorators = {
    'template': [{ type: ContentChild, args: ['template',] },],
};
__decorate$9([
    Template(),
    __metadata$9("design:type", Object)
], MenuComponent.prototype, "template", void 0);
MenuComponent = __decorate$9([
    ComponentMixins([ComponentBase]),
    __metadata$9("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], MenuComponent);

/**
 * NgModule definition for the Menu component.
 */
class MenuModule {
}
MenuModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    MenuComponent,
                    MenuItemDirective,
                    MenuItemsDirective
                ],
                exports: [
                    MenuComponent,
                    MenuItemDirective,
                    MenuItemsDirective
                ]
            },] },
];
/**
 * @nocollapse
 */
MenuModule.ctorParameters = () => [];

/**
 * NgModule definition for the Menu component with providers.
 */
class MenuAllModule {
}
MenuAllModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, MenuModule],
                exports: [
                    MenuModule
                ],
                providers: []
            },] },
];
/**
 * @nocollapse
 */
MenuAllModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { AccordionItemDirective, AccordionItemsDirective, AccordionComponent, AccordionModule, AccordionAllModule, ItemDirective, ItemsDirective, ToolbarComponent, ToolbarModule, ToolbarAllModule, ContextMenuComponent, ContextMenuModule, ContextMenuAllModule, TabItemDirective, TabItemsDirective, TabComponent, TabModule, TabAllModule, TreeViewComponent, TreeViewModule, TreeViewAllModule, SidebarComponent, SidebarModule, SidebarAllModule, MenuItemDirective, MenuItemsDirective, MenuComponent, MenuModule, MenuAllModule, inputs as ɵa, outputs$1 as ɵb, inputs$2 as ɵe, outputs$4 as ɵf, inputs$6 as ɵm, outputs$10 as ɵn, inputs$5 as ɵk, outputs$8 as ɵl, inputs$3 as ɵg, outputs$6 as ɵh, inputs$1 as ɵc, outputs$3 as ɵd, inputs$4 as ɵi, outputs$7 as ɵj };
export { MenuAnimationSettings, MenuItem, HScroll, VScroll, addScrolling, destroyScroll, Item, Toolbar, AccordionActionSettings, AccordionAnimationSettings, AccordionItem, Accordion, ContextMenu, Menu, TabActionSettings, TabAnimationSettings, Header, TabItem, Tab, FieldsSettings, ActionSettings, NodeAnimationSettings, TreeView, Sidebar } from '@syncfusion/ej2-navigations';
//# sourceMappingURL=ej2-angular-navigations.js.map
