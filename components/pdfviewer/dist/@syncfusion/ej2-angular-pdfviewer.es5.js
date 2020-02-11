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
import { ChangeDetectionStrategy, Component, ElementRef, Injector, NgModule, Renderer2, ViewContainerRef } from '@angular/core';
import { ComponentBase, ComponentMixins, setValue } from '@syncfusion/ej2-angular-base';
import { Annotation, BookmarkView, FormFields, LinkAnnotation, Magnification, Navigation, PdfViewer, Print, TextSearch, TextSelection, ThumbnailView, Toolbar } from '@syncfusion/ej2-pdfviewer';
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
var inputs = ['ajaxRequestSettings', 'annotationSelectorSettings', 'annotationSettings', 'annotationToolbarSettings', 'annotations', 'areaSettings', 'arrowSettings', 'circleSettings', 'contextMenuOption', 'customStampItems', 'customStampSettings', 'distanceSettings', 'documentPath', 'downloadFileName', 'drawingObject', 'enableAnnotation', 'enableAnnotationToolbar', 'enableBookmark', 'enableCommentPanel', 'enableDownload', 'enableFormFields', 'enableFormFieldsValidation', 'enableFreeText', 'enableHandwrittenSignature', 'enableHyperlink', 'enableMagnification', 'enableMeasureAnnotation', 'enableMultiPageAnnotation', 'enableNavigation', 'enableNavigationToolbar', 'enablePersistence', 'enablePinchZoom', 'enablePrint', 'enableRtl', 'enableShapeAnnotation', 'enableShapeLabel', 'enableStampAnnotations', 'enableStickyNotesAnnotation', 'enableTextMarkupAnnotation', 'enableTextMarkupResizer', 'enableTextSearch', 'enableTextSelection', 'enableThumbnail', 'enableToolbar', 'freeTextSettings', 'handWrittenSignatureSettings', 'height', 'highlightSettings', 'hyperlinkOpenState', 'interactionMode', 'isCommandPanelOpen', 'isExtractText', 'isSignatureEditable', 'isThumbnailViewOpen', 'lineSettings', 'locale', 'measurementSettings', 'perimeterSettings', 'polygonSettings', 'radiusSettings', 'rectangleSettings', 'retryCount', 'selectedItems', 'serverActionSettings', 'serviceUrl', 'shapeLabelSettings', 'showNotificationDialog', 'stampSettings', 'stickyNotesSettings', 'strikethroughSettings', 'textSearchColorSettings', 'toolbarSettings', 'underlineSettings', 'volumeSettings', 'width', 'zoomMode'];
var outputs = ['ajaxRequestFailed', 'ajaxRequestInitiate', 'annotationAdd', 'annotationDoubleClick', 'annotationMouseover', 'annotationMove', 'annotationPropertiesChange', 'annotationRemove', 'annotationResize', 'annotationSelect', 'documentLoad', 'documentLoadFailed', 'documentUnload', 'downloadEnd', 'downloadStart', 'exportFailed', 'exportStart', 'exportSuccess', 'hyperlinkClick', 'hyperlinkMouseOver', 'importFailed', 'importStart', 'importSuccess', 'pageChange', 'pageClick', 'textSelectionEnd', 'textSelectionStart', 'thumbnailClick', 'validateFormFields', 'zoomChange'];
var twoWays = [];
/**
 * `ejs-pdfviewer` represents the Angular PdfViewer Component.
 * ```html
 * <ejs-pdfviewer></ejs-pdfviewer>
 * ```
 */
var PdfViewerComponent = /** @class */ (function (_super) {
    __extends(PdfViewerComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function PdfViewerComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.srenderer = srenderer;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.element = _this.ngEle.nativeElement;
        _this.injectedModules = _this.injectedModules || [];
        try {
            var mod = _this.injector.get('PdfViewerLinkAnnotation');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_a) { }
        try {
            var mod = _this.injector.get('PdfViewerBookmarkView');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_b) { }
        try {
            var mod = _this.injector.get('PdfViewerMagnification');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_c) { }
        try {
            var mod = _this.injector.get('PdfViewerThumbnailView');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_d) { }
        try {
            var mod = _this.injector.get('PdfViewerToolbar');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_e) { }
        try {
            var mod = _this.injector.get('PdfViewerNavigation');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_f) { }
        try {
            var mod = _this.injector.get('PdfViewerPrint');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_g) { }
        try {
            var mod = _this.injector.get('PdfViewerTextSelection');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_h) { }
        try {
            var mod = _this.injector.get('PdfViewerTextSearch');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_j) { }
        try {
            var mod = _this.injector.get('PdfViewerAnnotation');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_k) { }
        try {
            var mod = _this.injector.get('PdfViewerFormFields');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_l) { }
        _this.registerEvents(outputs);
        _this.addTwoWay.call(_this, twoWays);
        setValue('currentInstance', _this, _this.viewContainerRef);
        return _this;
    }
    /**
     * @return {?}
     */
    PdfViewerComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    PdfViewerComponent.prototype.ngAfterViewInit = function () {
    };
    /**
     * @return {?}
     */
    PdfViewerComponent.prototype.ngOnDestroy = function () {
    };
    /**
     * @return {?}
     */
    PdfViewerComponent.prototype.ngAfterContentChecked = function () {
    };
    return PdfViewerComponent;
}(PdfViewer));
PdfViewerComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-pdfviewer',
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
PdfViewerComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
]; };
PdfViewerComponent = __decorate([
    ComponentMixins([ComponentBase]),
    __metadata("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], PdfViewerComponent);
/**
 * NgModule definition for the PdfViewer component.
 */
var PdfViewerModule = /** @class */ (function () {
    function PdfViewerModule() {
    }
    return PdfViewerModule;
}());
PdfViewerModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    PdfViewerComponent
                ],
                exports: [
                    PdfViewerComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
PdfViewerModule.ctorParameters = function () { return []; };
var LinkAnnotationService = { provide: 'PdfViewerLinkAnnotation', useValue: LinkAnnotation };
var BookmarkViewService = { provide: 'PdfViewerBookmarkView', useValue: BookmarkView };
var MagnificationService = { provide: 'PdfViewerMagnification', useValue: Magnification };
var ThumbnailViewService = { provide: 'PdfViewerThumbnailView', useValue: ThumbnailView };
var ToolbarService = { provide: 'PdfViewerToolbar', useValue: Toolbar };
var NavigationService = { provide: 'PdfViewerNavigation', useValue: Navigation };
var PrintService = { provide: 'PdfViewerPrint', useValue: Print };
var TextSelectionService = { provide: 'PdfViewerTextSelection', useValue: TextSelection };
var TextSearchService = { provide: 'PdfViewerTextSearch', useValue: TextSearch };
var AnnotationService = { provide: 'PdfViewerAnnotation', useValue: Annotation };
var FormFieldsService = { provide: 'PdfViewerFormFields', useValue: FormFields };
/**
 * NgModule definition for the PdfViewer component with providers.
 */
var PdfViewerAllModule = /** @class */ (function () {
    function PdfViewerAllModule() {
    }
    return PdfViewerAllModule;
}());
PdfViewerAllModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, PdfViewerModule],
                exports: [
                    PdfViewerModule
                ],
                providers: [
                    LinkAnnotationService,
                    BookmarkViewService,
                    MagnificationService,
                    ThumbnailViewService,
                    ToolbarService,
                    NavigationService,
                    PrintService,
                    TextSelectionService,
                    TextSearchService,
                    AnnotationService,
                    FormFieldsService
                ]
            },] },
];
/**
 * @nocollapse
 */
PdfViewerAllModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */
export { PdfViewerComponent, PdfViewerModule, PdfViewerAllModule, LinkAnnotationService, BookmarkViewService, MagnificationService, ThumbnailViewService, ToolbarService, NavigationService, PrintService, TextSelectionService, TextSearchService, AnnotationService, FormFieldsService, inputs as ɵa, outputs as ɵb };
export { Annotation, LinkAnnotation, TextMarkupAnnotation, MeasureAnnotation, ShapeAnnotation, StampAnnotation, StickyNotesAnnotation, FreeTextAnnotation, InputElement, NavigationPane, PdfViewerBase, TextLayer, ContextMenu, FontStyle, AnnotationResizerLocation, AjaxHandler, Signature, Magnification, Navigation, ThumbnailView, Toolbar, AnnotationToolbar, ToolbarSettings, AjaxRequestSettings, CustomStampItem, AnnotationToolbarSettings, ServerActionSettings, StrikethroughSettings, UnderlineSettings, HighlightSettings, LineSettings, ArrowSettings, RectangleSettings, CircleSettings, ShapeLabelSettings, PolygonSettings, StampSettings, CustomStampSettings, DistanceSettings, PerimeterSettings, AreaSettings, RadiusSettings, VolumeSettings, StickyNotesSettings, MeasurementSettings, FreeTextSettings, AnnotationSelectorSettings, TextSearchColorSettings, HandWrittenSignatureSettings, AnnotationSettings, PdfViewer, BookmarkView, TextSelection, TextSearch, Print, FormFields, Drawing, findActiveElement, findObjectsUnderMouse, findObjectUnderMouse, CalculateLeaderPoints, findElementUnderMouse, insertObject, findTargetShapeElement, findObjects, findActivePage, ActiveElements, getConnectorPoints, getSegmentPath, updateSegmentElement, getSegmentElement, updateDecoratorElement, getDecoratorElement, clipDecorators, clipDecorator, initDistanceLabel, updateDistanceLabel, updateRadiusLabel, initPerimeterLabel, updatePerimeterLabel, removePerimeterLabel, updateCalibrateLabel, getPolygonPath, textElement, initLeaders, initLeader, isPointOverConnector, findNearestPoint, getDecoratorShape, renderAdornerLayer, createSvg, isLineShapes, setElementStype, findPointsLength, findPerimeterLength, getBaseShapeAttributes, getFunction, cloneObject, cloneArray, getInternalProperties, isLeader, PdfBounds, PdfFont, PdfAnnotationBase, ZOrderPageTable, Selector, ToolBase, SelectTool, MoveTool, StampTool, ConnectTool, ResizeTool, NodeDrawingTool, PolygonDrawingTool, LineTool, RotateTool } from '@syncfusion/ej2-pdfviewer';
//# sourceMappingURL=ej2-angular-pdfviewer.es5.js.map
