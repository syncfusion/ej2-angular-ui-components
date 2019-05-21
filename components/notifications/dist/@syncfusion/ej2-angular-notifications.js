import { ChangeDetectionStrategy, Component, ContentChild, ContentChildren, Directive, ElementRef, Injector, NgModule, Renderer2, ViewContainerRef } from '@angular/core';
import { ArrayBase, ComplexBase, ComponentBase, ComponentMixins, Template, setValue } from '@syncfusion/ej2-angular-base';
import { Toast } from '@syncfusion/ej2-notifications';
import { CommonModule } from '@angular/common';

let input = ['model'];
let outputs = ['click'];
/**
 * 'e-button' directive represent a button of angular toast
 * It must be contained in a Toast component(`ejs-toast`).
 * ```html
 * <ejs-toast id='toast' showCloseIcon=true>
 *   <e-buttons>
 *    <e-button content='Ok' isPrimary=true></e-button>
 *    <e-button content='Cancel'></e-button>
 *   </e-buttons>
 * </ejs-toast>
 * ```
 */
class ButtonModelPropDirective extends ComplexBase {
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
ButtonModelPropDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-buttonmodelprops>e-buttonmodelprop',
                inputs: input,
                outputs: outputs,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
ButtonModelPropDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
/**
 * ButtonModelProp Array Directive
 */
class ButtonModelPropsDirective extends ArrayBase {
    constructor() {
        super('buttons');
    }
}
ButtonModelPropsDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-toast>e-buttonmodelprops',
                queries: {
                    children: new ContentChildren(ButtonModelPropDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
ButtonModelPropsDirective.ctorParameters = () => [];

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const inputs = ['animation', 'buttons', 'content', 'cssClass', 'enablePersistence', 'enableRtl', 'extendedTimeout', 'height', 'icon', 'locale', 'newestOnTop', 'position', 'showCloseButton', 'showProgressBar', 'target', 'template', 'timeOut', 'title', 'width'];
const outputs$1 = ['beforeOpen', 'click', 'close', 'created', 'destroyed', 'open'];
const twoWays = [''];
/**
 * Represents the Angular Toast Component
 * ```html
 * <ejs-toast></ejs-toast>
 * ```
 */
let ToastComponent = class ToastComponent extends Toast {
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
ToastComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-toast',
                inputs: inputs,
                outputs: outputs$1,
                template: `<ng-content ></ng-content>`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                queries: {
                    childButtons: new ContentChild(ButtonModelPropsDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
ToastComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
];
ToastComponent.propDecorators = {
    'title': [{ type: ContentChild, args: ['title',] },],
    'content': [{ type: ContentChild, args: ['content',] },],
    'template': [{ type: ContentChild, args: ['template',] },],
};
__decorate([
    Template(),
    __metadata("design:type", Object)
], ToastComponent.prototype, "title", void 0);
__decorate([
    Template(),
    __metadata("design:type", Object)
], ToastComponent.prototype, "content", void 0);
__decorate([
    Template(),
    __metadata("design:type", Object)
], ToastComponent.prototype, "template", void 0);
ToastComponent = __decorate([
    ComponentMixins([ComponentBase]),
    __metadata("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], ToastComponent);

/**
 * NgModule definition for the Toast component.
 */
class ToastModule {
}
ToastModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    ToastComponent,
                    ButtonModelPropDirective,
                    ButtonModelPropsDirective
                ],
                exports: [
                    ToastComponent,
                    ButtonModelPropDirective,
                    ButtonModelPropsDirective
                ]
            },] },
];
/**
 * @nocollapse
 */
ToastModule.ctorParameters = () => [];

/**
 * NgModule definition for the Toast component with providers.
 */
class ToastAllModule {
}
ToastAllModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, ToastModule],
                exports: [
                    ToastModule
                ],
                providers: []
            },] },
];
/**
 * @nocollapse
 */
ToastAllModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { ButtonModelPropDirective, ButtonModelPropsDirective, ToastComponent, ToastModule, ToastAllModule, inputs as ɵa, outputs$1 as ɵb };
export { ToastPosition, ButtonModelProps, ToastAnimations, ToastAnimationSettings, Toast } from '@syncfusion/ej2-notifications';
//# sourceMappingURL=ej2-angular-notifications.js.map
