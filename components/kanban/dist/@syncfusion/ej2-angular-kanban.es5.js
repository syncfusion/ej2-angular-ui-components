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
import { Kanban } from '@syncfusion/ej2-kanban';
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
var input = ['allowToggle', 'headerText', 'isExpanded', 'keyField', 'maxCount', 'minCount', 'showAddButton', 'showItemCount', 'template'];
var outputs = [];
/**
 * `e-columns` directive represent a columns of the Kanban board.
 * It must be contained in a Kanban component(`ejs-kanban`).
 * ```html
 * <ejs-kanban>
 *   <e-columns>
 *    <e-column keyField='Open' textField='To Do'></e-column>
 *    <e-column keyField='Close' textField='Completed'></e-column>
 *   </e-columns>
 * </ejs-kanban>
 * ```
 */
var ColumnDirective = /** @class */ (function (_super) {
    __extends(ColumnDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function ColumnDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs);
        _this.directivePropList = input;
        return _this;
    }
    return ColumnDirective;
}(ComplexBase));
ColumnDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-columns>e-column',
                inputs: input,
                outputs: outputs,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
ColumnDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
]; };
ColumnDirective.propDecorators = {
    'template': [{ type: ContentChild, args: ['template',] },],
};
__decorate([
    Template(),
    __metadata("design:type", Object)
], ColumnDirective.prototype, "template", void 0);
/**
 * Column Array Directive
 */
var ColumnsDirective = /** @class */ (function (_super) {
    __extends(ColumnsDirective, _super);
    function ColumnsDirective() {
        return _super.call(this, 'columns') || this;
    }
    return ColumnsDirective;
}(ArrayBase));
ColumnsDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-kanban>e-columns',
                queries: {
                    children: new ContentChildren(ColumnDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
ColumnsDirective.ctorParameters = function () { return []; };
var input$1 = ['keyFields', 'text'];
var outputs$1 = [];
/**
 * `e-stackedHeaders` directive represent a stacked header of the Kanban board.
 * It must be contained in a Kanban component(`ejs-kanban`).
 * ```html
 * <ejs-kanban>
 *   <e-stackedHeaders>
 *    <e-stackedHeader keyField='Open' text='To Do'></e-stackedHeader>
 *    <e-stackedHeader keyField='Close' text='Completed'></e-stackedHeader>
 *   </e-stackedHeaders>
 * </ejs-kanban>
 * ```
 */
var StackedHeaderDirective = /** @class */ (function (_super) {
    __extends(StackedHeaderDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function StackedHeaderDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$1);
        _this.directivePropList = input$1;
        return _this;
    }
    return StackedHeaderDirective;
}(ComplexBase));
StackedHeaderDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-stackedHeaders>e-stackedHeader',
                inputs: input$1,
                outputs: outputs$1,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
StackedHeaderDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
]; };
/**
 * StackedHeader Array Directive
 */
var StackedHeadersDirective = /** @class */ (function (_super) {
    __extends(StackedHeadersDirective, _super);
    function StackedHeadersDirective() {
        return _super.call(this, 'stackedheaders') || this;
    }
    return StackedHeadersDirective;
}(ArrayBase));
StackedHeadersDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-kanban>e-stackedHeaders',
                queries: {
                    children: new ContentChildren(StackedHeaderDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
StackedHeadersDirective.ctorParameters = function () { return []; };
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
var inputs = ['allowDragAndDrop', 'allowKeyboard', 'cardSettings', 'columns', 'constraintType', 'cssClass', 'dataSource', 'dialogSettings', 'enablePersistence', 'enableRtl', 'enableTooltip', 'height', 'keyField', 'locale', 'query', 'stackedHeaders', 'swimlaneSettings', 'tooltipTemplate', 'width'];
var outputs$2 = ['actionBegin', 'actionComplete', 'actionFailure', 'cardClick', 'cardDoubleClick', 'cardRendered', 'created', 'dataBinding', 'dataBound', 'dialogClose', 'dialogOpen', 'drag', 'dragStart', 'dragStop', 'queryCellInfo'];
var twoWays = [''];
/**
 * `ej-kanban` represents the Angular Kanban Component.
 * ```html
 * <ejs-kanban></ejs-kanban>
 * ```
 */
var KanbanComponent = /** @class */ (function (_super) {
    __extends(KanbanComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function KanbanComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.srenderer = srenderer;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.tags = ['columns', 'stackedHeaders'];
        _this.element = _this.ngEle.nativeElement;
        _this.injectedModules = _this.injectedModules || [];
        _this.registerEvents(outputs$2);
        _this.addTwoWay.call(_this, twoWays);
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.context = new ComponentBase();
        return _this;
    }
    /**
     * @return {?}
     */
    KanbanComponent.prototype.ngOnInit = function () {
        this.context.ngOnInit(this);
    };
    /**
     * @return {?}
     */
    KanbanComponent.prototype.ngAfterViewInit = function () {
        this.context.ngAfterViewInit(this);
    };
    /**
     * @return {?}
     */
    KanbanComponent.prototype.ngOnDestroy = function () {
        this.context.ngOnDestroy(this);
    };
    /**
     * @return {?}
     */
    KanbanComponent.prototype.ngAfterContentChecked = function () {
        this.tagObjects[0].instance = this.childColumns;
        if (this.childStackedHeaders) {
            this.tagObjects[1].instance = /** @type {?} */ (this.childStackedHeaders);
        }
        this.context.ngAfterContentChecked(this);
    };
    return KanbanComponent;
}(Kanban));
KanbanComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-kanban',
                inputs: inputs,
                outputs: outputs$2,
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                queries: {
                    childColumns: new ContentChild(ColumnsDirective),
                    childStackedHeaders: new ContentChild(StackedHeadersDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
KanbanComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
]; };
KanbanComponent.propDecorators = {
    'tooltipTemplate': [{ type: ContentChild, args: ['tooltipTemplate',] },],
    'columns_template': [{ type: ContentChild, args: ['columnsTemplate',] },],
    'swimlaneSettings_template': [{ type: ContentChild, args: ['swimlaneSettingsTemplate',] },],
    'cardSettings_template': [{ type: ContentChild, args: ['cardSettingsTemplate',] },],
    'dialogSettings_template': [{ type: ContentChild, args: ['dialogSettingsTemplate',] },],
};
__decorate$1([
    Template(),
    __metadata$1("design:type", Object)
], KanbanComponent.prototype, "tooltipTemplate", void 0);
__decorate$1([
    Template(),
    __metadata$1("design:type", Object)
], KanbanComponent.prototype, "columns_template", void 0);
__decorate$1([
    Template(),
    __metadata$1("design:type", Object)
], KanbanComponent.prototype, "swimlaneSettings_template", void 0);
__decorate$1([
    Template(),
    __metadata$1("design:type", Object)
], KanbanComponent.prototype, "cardSettings_template", void 0);
__decorate$1([
    Template(),
    __metadata$1("design:type", Object)
], KanbanComponent.prototype, "dialogSettings_template", void 0);
KanbanComponent = __decorate$1([
    ComponentMixins([ComponentBase]),
    __metadata$1("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], KanbanComponent);
/**
 * NgModule definition for the Kanban component.
 */
var KanbanModule = /** @class */ (function () {
    function KanbanModule() {
    }
    return KanbanModule;
}());
KanbanModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    KanbanComponent,
                    ColumnDirective,
                    ColumnsDirective,
                    StackedHeaderDirective,
                    StackedHeadersDirective
                ],
                exports: [
                    KanbanComponent,
                    ColumnDirective,
                    ColumnsDirective,
                    StackedHeaderDirective,
                    StackedHeadersDirective
                ]
            },] },
];
/**
 * @nocollapse
 */
KanbanModule.ctorParameters = function () { return []; };
/**
 * NgModule definition for the Kanban component with providers.
 */
var KanbanAllModule = /** @class */ (function () {
    function KanbanAllModule() {
    }
    return KanbanAllModule;
}());
KanbanAllModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, KanbanModule],
                exports: [
                    KanbanModule
                ],
                providers: []
            },] },
];
/**
 * @nocollapse
 */
KanbanAllModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */
export { ColumnDirective, ColumnsDirective, StackedHeaderDirective, StackedHeadersDirective, KanbanComponent, KanbanModule, KanbanAllModule, inputs as ɵa, outputs$2 as ɵb };
export { Kanban, actionBegin, actionComplete, actionFailure, cardClick, cardDoubleClick, cardRendered, queryCellInfo, dataBinding, dataBound, dragStart, drag, dragStop, documentClick, dialogOpen, dialogClose, contentReady, dataReady, bottomSpace, cardSpace, toggleWidth } from '@syncfusion/ej2-kanban';
//# sourceMappingURL=ej2-angular-kanban.es5.js.map
