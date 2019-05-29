import { ChangeDetectionStrategy, Component, ContentChild, ContentChildren, Directive, ElementRef, Injector, NgModule, Renderer2, ViewContainerRef } from '@angular/core';
import { ArrayBase, ComplexBase, ComponentBase, ComponentMixins, Template, setValue } from '@syncfusion/ej2-angular-base';
import { DashboardLayout, Splitter } from '@syncfusion/ej2-layouts';
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
let input = ['collapsed', 'collapsible', 'content', 'max', 'min', 'resizable', 'size'];
let outputs = [];
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
class PaneDirective extends ComplexBase {
    /**
     * @param {?} viewContainerRef
     */
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
    }
}
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
PaneDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
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
class PanesDirective extends ArrayBase {
    constructor() {
        super('panesettings');
    }
}
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
PanesDirective.ctorParameters = () => [];

var __decorate$1 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const inputs = ['cssClass', 'enablePersistence', 'enableRtl', 'enabled', 'height', 'locale', 'orientation', 'paneSettings', 'separatorSize', 'width'];
const outputs$1 = ['beforeCollapse', 'beforeExpand', 'collapsed', 'created', 'expanded', 'resizeStart', 'resizeStop', 'resizing'];
const twoWays = [''];
/**
 * Represents the Angular Splitter Component
 * ```html
 * <ejs-splitter></ejs-splitter>
 * ```
 */
let SplitterComponent = class SplitterComponent extends Splitter {
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
        this.tags = ['paneSettings'];
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        this.registerEvents(outputs$1);
        this.addTwoWay.call(this, twoWays);
        setValue('currentInstance', this, this.viewContainerRef);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
    }
};
SplitterComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-splitter',
                inputs: inputs,
                outputs: outputs$1,
                template: `<ng-content select='div'></ng-content>`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                queries: {
                    childPaneSettings: new ContentChild(PanesDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
SplitterComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
];
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
class SplitterModule {
}
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
SplitterModule.ctorParameters = () => [];

/**
 * NgModule definition for the Splitter component with providers.
 */
class SplitterAllModule {
}
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
SplitterAllModule.ctorParameters = () => [];

var __decorate$2 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$2 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let input$1 = ['col', 'content', 'cssClass', 'enabled', 'header', 'id', 'maxSizeX', 'maxSizeY', 'minSizeX', 'minSizeY', 'row', 'sizeX', 'sizeY', 'zIndex'];
let outputs$2 = [];
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
class PanelDirective extends ComplexBase {
    /**
     * @param {?} viewContainerRef
     */
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$2);
    }
}
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
PanelDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
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
class PanelsDirective extends ArrayBase {
    constructor() {
        super('panels');
    }
}
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
PanelsDirective.ctorParameters = () => [];

var __decorate$3 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$3 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const inputs$1 = ['allowDragging', 'allowFloating', 'allowPushing', 'allowResizing', 'cellAspectRatio', 'cellSpacing', 'columns', 'draggableHandle', 'enablePersistence', 'enableRtl', 'locale', 'mediaQuery', 'panels', 'resizableHandles', 'showGridLines'];
const outputs$3 = ['change', 'created', 'destroyed', 'drag', 'dragStart', 'dragStop', 'resize', 'resizeStart', 'resizeStop'];
const twoWays$1 = [''];
/**
 * Represents the Essential JS 2 Angular DashboardLayout Component.
 * ```html
 * <ejs-dashboardlayout></ejs-dashboardlayout>
 * ```
 */
let DashboardLayoutComponent = class DashboardLayoutComponent extends DashboardLayout {
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
        this.tags = ['panels'];
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        this.registerEvents(outputs$3);
        this.addTwoWay.call(this, twoWays$1);
        setValue('currentInstance', this, this.viewContainerRef);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
    }
};
DashboardLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-dashboardlayout',
                inputs: inputs$1,
                outputs: outputs$3,
                template: `<ng-content select='div'></ng-content>`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                queries: {
                    childPanels: new ContentChild(PanelsDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
DashboardLayoutComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
];
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
class DashboardLayoutModule {
}
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
DashboardLayoutModule.ctorParameters = () => [];

/**
 * NgModule definition for the DashboardLayout component with providers.
 */
class DashboardLayoutAllModule {
}
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
DashboardLayoutAllModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { PaneDirective, PanesDirective, SplitterComponent, SplitterModule, SplitterAllModule, PanelDirective, PanelsDirective, DashboardLayoutComponent, DashboardLayoutModule, DashboardLayoutAllModule, inputs$1 as ɵc, outputs$3 as ɵd, inputs as ɵa, outputs$1 as ɵb };
export { PaneProperties, Splitter, Panel, DashboardLayout } from '@syncfusion/ej2-layouts';
//# sourceMappingURL=ej2-angular-layouts.js.map
