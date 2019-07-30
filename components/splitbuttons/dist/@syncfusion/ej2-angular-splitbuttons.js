import { ChangeDetectionStrategy, Component, ElementRef, Injector, NgModule, Renderer2, ViewContainerRef } from '@angular/core';
import { ComponentBase, ComponentMixins, setValue } from '@syncfusion/ej2-angular-base';
import { DropDownButton, ProgressButton, SplitButton } from '@syncfusion/ej2-splitbuttons';
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
const inputs = ['content', 'cssClass', 'disabled', 'enablePersistence', 'enableRtl', 'iconCss', 'iconPosition', 'items', 'locale', 'target'];
const outputs = ['beforeClose', 'beforeItemRender', 'beforeOpen', 'close', 'created', 'open', 'select'];
const twoWays = [];
/**
 * Represents the Angular DropDownButton Component.
 * ```html
 * <button ejs-dropdownbutton>DropDownButton</button>
 * ```
 */
let DropDownButtonComponent = class DropDownButtonComponent extends DropDownButton {
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
        this.registerEvents(outputs);
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
DropDownButtonComponent.decorators = [
    { type: Component, args: [{
                selector: '[ejs-dropdownbutton]',
                inputs: inputs,
                outputs: outputs,
                template: `<ng-content ></ng-content>`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
DropDownButtonComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
];
DropDownButtonComponent = __decorate([
    ComponentMixins([ComponentBase]),
    __metadata("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], DropDownButtonComponent);

/**
 * NgModule definition for the DropDownButton component.
 */
class DropDownButtonModule {
}
DropDownButtonModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    DropDownButtonComponent
                ],
                exports: [
                    DropDownButtonComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
DropDownButtonModule.ctorParameters = () => [];

/**
 * NgModule definition for the DropDownButton component with providers.
 */
class DropDownButtonAllModule {
}
DropDownButtonAllModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, DropDownButtonModule],
                exports: [
                    DropDownButtonModule
                ],
                providers: []
            },] },
];
/**
 * @nocollapse
 */
DropDownButtonAllModule.ctorParameters = () => [];

var __decorate$1 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const inputs$1 = ['content', 'cssClass', 'disabled', 'enablePersistence', 'enableRtl', 'iconCss', 'iconPosition', 'items', 'locale', 'target'];
const outputs$1 = ['beforeClose', 'beforeItemRender', 'beforeOpen', 'click', 'close', 'created', 'open', 'select'];
const twoWays$1 = [];
/**
 * Represents the Angular SplitButton Component.
 * ```html
 * <ejs-splitbutton content='Split Button'></ejs-splitbutton>
 * ```
 */
let SplitButtonComponent = class SplitButtonComponent extends SplitButton {
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
        this.registerEvents(outputs$1);
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
SplitButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-splitbutton',
                inputs: inputs$1,
                outputs: outputs$1,
                template: `<ng-content ></ng-content>`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
SplitButtonComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
];
SplitButtonComponent = __decorate$1([
    ComponentMixins([ComponentBase]),
    __metadata$1("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], SplitButtonComponent);

/**
 * NgModule definition for the SplitButton component.
 */
class SplitButtonModule {
}
SplitButtonModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    SplitButtonComponent
                ],
                exports: [
                    SplitButtonComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
SplitButtonModule.ctorParameters = () => [];

/**
 * NgModule definition for the SplitButton component with providers.
 */
class SplitButtonAllModule {
}
SplitButtonAllModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, SplitButtonModule],
                exports: [
                    SplitButtonModule
                ],
                providers: []
            },] },
];
/**
 * @nocollapse
 */
SplitButtonAllModule.ctorParameters = () => [];

var __decorate$2 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$2 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const inputs$2 = ['animationSettings', 'content', 'cssClass', 'disabled', 'duration', 'enableProgress', 'iconCss', 'iconPosition', 'isPrimary', 'isToggle', 'spinSettings'];
const outputs$2 = ['begin', 'created', 'end', 'fail', 'progress'];
const twoWays$2 = [];
/**
 * Represents the Angular ProgressButton Component.
 * ```html
 * <button ejs-progressbutton content='Progress Button'></button>
 * ```
 */
let ProgressButtonComponent = class ProgressButtonComponent extends ProgressButton {
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
        this.addTwoWay.call(this, twoWays$2);
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
ProgressButtonComponent.decorators = [
    { type: Component, args: [{
                selector: '[ejs-progressbutton]',
                inputs: inputs$2,
                outputs: outputs$2,
                template: `<ng-content ></ng-content>`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
ProgressButtonComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
];
ProgressButtonComponent = __decorate$2([
    ComponentMixins([ComponentBase]),
    __metadata$2("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], ProgressButtonComponent);

/**
 * NgModule definition for the ProgressButton component.
 */
class ProgressButtonModule {
}
ProgressButtonModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    ProgressButtonComponent
                ],
                exports: [
                    ProgressButtonComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
ProgressButtonModule.ctorParameters = () => [];

/**
 * NgModule definition for the ProgressButton component with providers.
 */
class ProgressButtonAllModule {
}
ProgressButtonAllModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, ProgressButtonModule],
                exports: [
                    ProgressButtonModule
                ],
                providers: []
            },] },
];
/**
 * @nocollapse
 */
ProgressButtonAllModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { DropDownButtonComponent, DropDownButtonModule, DropDownButtonAllModule, SplitButtonComponent, SplitButtonModule, SplitButtonAllModule, ProgressButtonComponent, ProgressButtonModule, ProgressButtonAllModule, inputs as ɵa, outputs as ɵb, inputs$2 as ɵe, outputs$2 as ɵf, inputs$1 as ɵc, outputs$1 as ɵd };
export { getModel, Item, DropDownButton, SplitButton, Deferred, createButtonGroup, SpinSettings, AnimationSettings, ProgressButton } from '@syncfusion/ej2-splitbuttons';
//# sourceMappingURL=ej2-angular-splitbuttons.js.map
