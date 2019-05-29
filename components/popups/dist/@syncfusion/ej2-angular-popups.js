import { ChangeDetectionStrategy, Component, ContentChild, ContentChildren, Directive, ElementRef, Injector, NgModule, Renderer2, ViewContainerRef } from '@angular/core';
import { ArrayBase, ComplexBase, ComponentBase, ComponentMixins, Template, setValue } from '@syncfusion/ej2-angular-base';
import { Dialog, Tooltip } from '@syncfusion/ej2-popups';
import { CommonModule } from '@angular/common';

let input = ['buttonModel', 'type'];
let outputs = ['click'];
/**
 * 'e-button' directive represent a button of angular dialog
 * It must be contained in a Dialog component(`ej-dialog`).
 * ```html
 * <ejs-dialog id='dialog' showCloseIcon=true>
 *   <e-buttons>
 *    <e-dialogbutton [buttonModal]='okButton'></e-button>
 *    <e-dialogbutton [buttonModal]='cancelButton'></e-button>
 *   </e-buttons>
 * </ejs-dialog>
 * ```
 */
class DialogButtonDirective extends ComplexBase {
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
DialogButtonDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-buttons>e-dialogbutton',
                inputs: input,
                outputs: outputs,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
DialogButtonDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
/**
 * DialogButton Array Directive
 */
class ButtonsDirective extends ArrayBase {
    constructor() {
        super('buttons');
    }
}
ButtonsDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-dialog>e-buttons',
                queries: {
                    children: new ContentChildren(DialogButtonDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
ButtonsDirective.ctorParameters = () => [];

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const inputs = ['allowDragging', 'animationSettings', 'buttons', 'closeOnEscape', 'content', 'cssClass', 'enablePersistence', 'enableResize', 'enableRtl', 'footerTemplate', 'header', 'height', 'isModal', 'locale', 'position', 'showCloseIcon', 'target', 'visible', 'width', 'zIndex'];
const outputs$1 = ['beforeClose', 'beforeOpen', 'close', 'created', 'drag', 'dragStart', 'dragStop', 'open', 'overlayClick', 'resizeStart', 'resizeStop', 'resizing', 'visibleChange'];
const twoWays = ['visible'];
/**
 * Represents the Angular Dialog Component
 * ```html
 * <ejs-dialog></ejs-dialog>
 * ```
 */
let DialogComponent = class DialogComponent extends Dialog {
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
        this.tags = ['buttons'];
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
DialogComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-dialog',
                inputs: inputs,
                outputs: outputs$1,
                template: `<ng-content ></ng-content>`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                queries: {
                    childButtons: new ContentChild(ButtonsDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
DialogComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
];
DialogComponent.propDecorators = {
    'footerTemplate': [{ type: ContentChild, args: ['footerTemplate',] },],
    'header': [{ type: ContentChild, args: ['header',] },],
    'content': [{ type: ContentChild, args: ['content',] },],
};
__decorate([
    Template(),
    __metadata("design:type", Object)
], DialogComponent.prototype, "footerTemplate", void 0);
__decorate([
    Template(),
    __metadata("design:type", Object)
], DialogComponent.prototype, "header", void 0);
__decorate([
    Template(),
    __metadata("design:type", Object)
], DialogComponent.prototype, "content", void 0);
DialogComponent = __decorate([
    ComponentMixins([ComponentBase]),
    __metadata("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], DialogComponent);

/**
 * NgModule definition for the Dialog component.
 */
class DialogModule {
}
DialogModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    DialogComponent,
                    DialogButtonDirective,
                    ButtonsDirective
                ],
                exports: [
                    DialogComponent,
                    DialogButtonDirective,
                    ButtonsDirective
                ]
            },] },
];
/**
 * @nocollapse
 */
DialogModule.ctorParameters = () => [];

/**
 * NgModule definition for the Dialog component with providers.
 */
class DialogAllModule {
}
DialogAllModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, DialogModule],
                exports: [
                    DialogModule
                ],
                providers: []
            },] },
];
/**
 * @nocollapse
 */
DialogAllModule.ctorParameters = () => [];

var __decorate$1 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const inputs$1 = ['animation', 'closeDelay', 'content', 'cssClass', 'enablePersistence', 'enableRtl', 'height', 'isSticky', 'locale', 'mouseTrail', 'offsetX', 'offsetY', 'openDelay', 'opensOn', 'position', 'showTipPointer', 'target', 'tipPointerPosition', 'width'];
const outputs$2 = ['afterClose', 'afterOpen', 'beforeClose', 'beforeCollision', 'beforeOpen', 'beforeRender', 'created', 'destroyed'];
const twoWays$1 = [''];
/**
 * Represents the Angular Tooltip component that displays a piece of information about the target element on mouse hover.
 * ```html
 * <ejs-tooltip content='Tooltip content'>Show Tooltip</ejs-tooltip>
 * ```
 */
let TooltipComponent = class TooltipComponent extends Tooltip {
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
        this.registerEvents(outputs$2);
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
TooltipComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-tooltip',
                inputs: inputs$1,
                outputs: outputs$2,
                template: `<ng-content ></ng-content>`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
TooltipComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
];
TooltipComponent.propDecorators = {
    'content': [{ type: ContentChild, args: ['content',] },],
};
__decorate$1([
    Template(),
    __metadata$1("design:type", Object)
], TooltipComponent.prototype, "content", void 0);
TooltipComponent = __decorate$1([
    ComponentMixins([ComponentBase]),
    __metadata$1("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], TooltipComponent);

/**
 * NgModule definition for the Tooltip component.
 */
class TooltipModule {
}
TooltipModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    TooltipComponent
                ],
                exports: [
                    TooltipComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
TooltipModule.ctorParameters = () => [];

/**
 * NgModule definition for the Tooltip component with providers.
 */
class TooltipAllModule {
}
TooltipAllModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, TooltipModule],
                exports: [
                    TooltipModule
                ],
                providers: []
            },] },
];
/**
 * @nocollapse
 */
TooltipAllModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { DialogButtonDirective, ButtonsDirective, DialogComponent, DialogModule, DialogAllModule, TooltipComponent, TooltipModule, TooltipAllModule, inputs as ɵa, outputs$1 as ɵb, inputs$1 as ɵc, outputs$2 as ɵd };
export { PositionData, Popup, getScrollableParent, getZindexPartial, getMaxZindex, calculateRelativeBasedPosition, calculatePosition, fit, isCollide, flip, ButtonProps, AnimationSettings, Dialog, DialogUtility, Animation, Tooltip, createSpinner, showSpinner, hideSpinner, setSpinner } from '@syncfusion/ej2-popups';
//# sourceMappingURL=ej2-angular-popups.js.map
