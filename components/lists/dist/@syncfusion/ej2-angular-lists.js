import { ChangeDetectionStrategy, Component, ContentChild, ElementRef, Injector, NgModule, Renderer2, ViewContainerRef } from '@angular/core';
import { ComponentBase, ComponentMixins, Template, setValue } from '@syncfusion/ej2-angular-base';
import { ListView, Virtualization } from '@syncfusion/ej2-lists';
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
const inputs = ['animation', 'checkBoxPosition', 'cssClass', 'dataSource', 'enable', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'enableVirtualization', 'fields', 'groupTemplate', 'headerTemplate', 'headerTitle', 'height', 'htmlAttributes', 'locale', 'query', 'showCheckBox', 'showHeader', 'showIcon', 'sortOrder', 'template', 'width'];
const outputs = ['actionBegin', 'actionComplete', 'actionFailure', 'select'];
const twoWays = [''];
/**
 * Represents Angular ListView Component
 * ```
 * <ejs-listview [dataSource]='data'></ejs-listview>
 * ```
 */
let ListViewComponent = class ListViewComponent extends ListView {
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
        try {
            let mod = this.injector.get('ListsVirtualization');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_a) { }
        this.registerEvents(outputs);
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
        this.context.ngAfterContentChecked(this);
    }
};
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
ListViewComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
];
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
class ListViewModule {
}
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
ListViewModule.ctorParameters = () => [];

const VirtualizationService = { provide: 'ListsVirtualization', useValue: Virtualization };
/**
 * NgModule definition for the ListView component with providers.
 */
class ListViewAllModule {
}
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
ListViewAllModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { ListViewComponent, ListViewModule, ListViewAllModule, VirtualizationService, inputs as ɵa, outputs as ɵb };
export { classNames, FieldSettings, ListView, Virtualization, cssClass, ListBase, getFieldValues, Sortable, moveTo } from '@syncfusion/ej2-lists';
//# sourceMappingURL=ej2-angular-lists.js.map
