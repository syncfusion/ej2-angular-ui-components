import { ChangeDetectionStrategy, Component, ContentChild, ContentChildren, Directive, ElementRef, Injector, NgModule, Renderer2, ViewContainerRef } from '@angular/core';
import { ArrayBase, ComplexBase, ComponentBase, ComponentMixins, Template, setValue } from '@syncfusion/ej2-angular-base';
import { ProgressAnnotation, ProgressBar } from '@syncfusion/ej2-progressbar';
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
let input = ['annotationAngle', 'annotationRadius', 'content'];
let outputs = [];
/**
 * ProgressBarAnnotations Directive
 * ```html
 * <e-progressbar-annotations>
 * <e-progressbar-annotation></e-progressbar-annotation>
 * </e-progressbar-annotations>
 * ```
 */
class ProgressBarAnnotationDirective extends ComplexBase {
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
ProgressBarAnnotationDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-progressbar-annotations>e-progressbar-annotation',
                inputs: input,
                outputs: outputs,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
ProgressBarAnnotationDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
ProgressBarAnnotationDirective.propDecorators = {
    'content': [{ type: ContentChild, args: ['content',] },],
};
__decorate([
    Template(),
    __metadata("design:type", Object)
], ProgressBarAnnotationDirective.prototype, "content", void 0);
/**
 * ProgressBarAnnotation Array Directive
 */
class ProgressBarAnnotationsDirective extends ArrayBase {
    constructor() {
        super('annotations');
    }
}
ProgressBarAnnotationsDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ej-progressbar>e-progressbar-annotations',
                queries: {
                    children: new ContentChildren(ProgressBarAnnotationDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
ProgressBarAnnotationsDirective.ctorParameters = () => [];

var __decorate$1 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const inputs = ['animation', 'annotations', 'cornerRadius', 'enablePersistence', 'enablePieProgress', 'enableProgressSegments', 'enableRtl', 'endAngle', 'gapWidth', 'height', 'innerRadius', 'isActive', 'isGradient', 'isIndeterminate', 'isStriped', 'labelOnTrack', 'labelStyle', 'locale', 'margin', 'maximum', 'minimum', 'progressColor', 'progressThickness', 'radius', 'rangeColors', 'role', 'secondaryProgress', 'segmentColor', 'segmentCount', 'showProgressValue', 'startAngle', 'theme', 'trackColor', 'trackThickness', 'type', 'value', 'width'];
const outputs$1 = ['animationComplete', 'load', 'loaded', 'mouseClick', 'mouseDown', 'mouseLeave', 'mouseMove', 'mouseUp', 'progressCompleted', 'textRender', 'valueChanged'];
const twoWays = [''];
/**
 * ProgressBar Component
 * ```html
 * <ejsprogressbar></ejsprogressbar>
 * ```
 */
let ProgressBarComponent = class ProgressBarComponent extends ProgressBar {
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
        this.tags = ['annotations'];
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
            let mod = this.injector.get('ProgressBarProgressAnnotation');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_a) { }
        this.registerEvents(outputs$1);
        this.addTwoWay.call(this, twoWays);
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
        this.tagObjects[0].instance = this.childAnnotations;
        this.context.ngAfterContentChecked(this);
    }
};
ProgressBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-progressbar',
                inputs: inputs,
                outputs: outputs$1,
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                queries: {
                    childAnnotations: new ContentChild(ProgressBarAnnotationsDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
ProgressBarComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
];
ProgressBarComponent = __decorate$1([
    ComponentMixins([ComponentBase]),
    __metadata$1("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], ProgressBarComponent);

/**
 * NgModule definition for the ProgressBar component.
 */
class ProgressBarModule {
}
ProgressBarModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    ProgressBarComponent,
                    ProgressBarAnnotationDirective,
                    ProgressBarAnnotationsDirective
                ],
                exports: [
                    ProgressBarComponent,
                    ProgressBarAnnotationDirective,
                    ProgressBarAnnotationsDirective
                ]
            },] },
];
/**
 * @nocollapse
 */
ProgressBarModule.ctorParameters = () => [];

const ProgressAnnotationService = { provide: 'ProgressBarProgressAnnotation', useValue: ProgressAnnotation };
/**
 * NgModule definition for the ProgressBar component with providers.
 */
class ProgressBarAllModule {
}
ProgressBarAllModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, ProgressBarModule],
                exports: [
                    ProgressBarModule
                ],
                providers: [
                    ProgressAnnotationService
                ]
            },] },
];
/**
 * @nocollapse
 */
ProgressBarAllModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { ProgressBarAnnotationDirective, ProgressBarAnnotationsDirective, ProgressBarComponent, ProgressBarModule, ProgressBarAllModule, ProgressAnnotationService, inputs as ɵa, outputs$1 as ɵb };
export { ProgressBar, Margin, Font, Animation, ProgressAnnotationSettings, RangeColor, ProgressAnnotation, Rect, Size, Pos, RectOption, ColorValue, convertToHexCode, componentToHex, convertHexToColor, colorNameToHex, TextOption, degreeToLocation, getPathArc, stringToNumber, setAttributes, effect, annotationRender, getElement, removeElement, ProgressLocation, ProgressAnimation } from '@syncfusion/ej2-progressbar';
//# sourceMappingURL=ej2-angular-progressbar.js.map
