import { ChangeDetectionStrategy, Component, ElementRef, Injector, NgModule, Renderer2, ViewContainerRef } from '@angular/core';
import { ComponentBase, ComponentMixins, setValue } from '@syncfusion/ej2-angular-base';
import { Annotation, BookmarkView, FormFields, LinkAnnotation, Magnification, Navigation, PdfViewer, Print, TextSearch, TextSelection, ThumbnailView, Toolbar } from '@syncfusion/ej2-pdfviewer';
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
const inputs = ['ajaxRequestSettings', 'annotationSelectorSettings', 'annotationSettings', 'annotations', 'areaSettings', 'arrowSettings', 'circleSettings', 'contextMenuOption', 'contextMenuSettings', 'currentPageNumber', 'customStamp', 'customStampSettings', 'disableContextMenuItems', 'distanceSettings', 'documentPath', 'downloadFileName', 'drawingObject', 'enableAnnotation', 'enableAnnotationToolbar', 'enableAutoComplete', 'enableBookmark', 'enableCommentPanel', 'enableDownload', 'enableFormFields', 'enableFormFieldsValidation', 'enableFreeText', 'enableHandwrittenSignature', 'enableHyperlink', 'enableImportAnnotationMeasurement', 'enableInkAnnotation', 'enableMagnification', 'enableMeasureAnnotation', 'enableMultiLineOverlap', 'enableMultiPageAnnotation', 'enableNavigation', 'enableNavigationToolbar', 'enablePersistence', 'enablePinchZoom', 'enablePrint', 'enableRtl', 'enableShapeAnnotation', 'enableShapeLabel', 'enableStampAnnotations', 'enableStickyNotesAnnotation', 'enableTextMarkupAnnotation', 'enableTextMarkupResizer', 'enableTextSearch', 'enableTextSelection', 'enableThumbnail', 'enableToolbar', 'enableZoomOptimization', 'formFieldCollections', 'freeTextSettings', 'handWrittenSignatureSettings', 'height', 'highlightSettings', 'hyperlinkOpenState', 'inkAnnotationSettings', 'interactionMode', 'isCommandPanelOpen', 'isDocumentEdited', 'isExtractText', 'isFormFieldDocument', 'isSignatureEditable', 'isThumbnailViewOpen', 'lineSettings', 'locale', 'measurementSettings', 'pageCount', 'perimeterSettings', 'polygonSettings', 'printMode', 'radiusSettings', 'rectangleSettings', 'restrictZoomRequest', 'retryCount', 'scrollSettings', 'selectedItems', 'serverActionSettings', 'serviceUrl', 'shapeLabelSettings', 'showNotificationDialog', 'stampSettings', 'stickyNotesSettings', 'strikethroughSettings', 'textSearchColorSettings', 'tileRenderingSettings', 'toolbarSettings', 'underlineSettings', 'volumeSettings', 'width', 'zoomMode', 'zoomValue'];
const outputs = ['addSignature', 'ajaxRequestFailed', 'ajaxRequestInitiate', 'annotationAdd', 'annotationDoubleClick', 'annotationMouseLeave', 'annotationMouseover', 'annotationMove', 'annotationPropertiesChange', 'annotationRemove', 'annotationResize', 'annotationSelect', 'documentLoad', 'documentLoadFailed', 'documentUnload', 'downloadEnd', 'downloadStart', 'exportFailed', 'exportStart', 'exportSuccess', 'extractTextCompleted', 'hyperlinkClick', 'hyperlinkMouseOver', 'importFailed', 'importStart', 'importSuccess', 'moveSignature', 'pageChange', 'pageClick', 'pageMouseover', 'printEnd', 'printStart', 'removeSignature', 'resizeSignature', 'signaturePropertiesChange', 'signatureSelect', 'textSearchComplete', 'textSearchHighlight', 'textSearchStart', 'textSelectionEnd', 'textSelectionStart', 'thumbnailClick', 'validateFormFields', 'zoomChange'];
const twoWays = [];
/**
 * `ejs-pdfviewer` represents the Angular PdfViewer Component.
 * ```html
 * <ejs-pdfviewer></ejs-pdfviewer>
 * ```
 */
let PdfViewerComponent = class PdfViewerComponent extends PdfViewer {
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
            let mod = this.injector.get('PdfViewerLinkAnnotation');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_a) { }
        try {
            let mod = this.injector.get('PdfViewerBookmarkView');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_b) { }
        try {
            let mod = this.injector.get('PdfViewerMagnification');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_c) { }
        try {
            let mod = this.injector.get('PdfViewerThumbnailView');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_d) { }
        try {
            let mod = this.injector.get('PdfViewerToolbar');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_e) { }
        try {
            let mod = this.injector.get('PdfViewerNavigation');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_f) { }
        try {
            let mod = this.injector.get('PdfViewerPrint');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_g) { }
        try {
            let mod = this.injector.get('PdfViewerTextSelection');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_h) { }
        try {
            let mod = this.injector.get('PdfViewerTextSearch');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_j) { }
        try {
            let mod = this.injector.get('PdfViewerAnnotation');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_k) { }
        try {
            let mod = this.injector.get('PdfViewerFormFields');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_l) { }
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
PdfViewerComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
];
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
class PdfViewerModule {
}
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
PdfViewerModule.ctorParameters = () => [];

const LinkAnnotationService = { provide: 'PdfViewerLinkAnnotation', useValue: LinkAnnotation };
const BookmarkViewService = { provide: 'PdfViewerBookmarkView', useValue: BookmarkView };
const MagnificationService = { provide: 'PdfViewerMagnification', useValue: Magnification };
const ThumbnailViewService = { provide: 'PdfViewerThumbnailView', useValue: ThumbnailView };
const ToolbarService = { provide: 'PdfViewerToolbar', useValue: Toolbar };
const NavigationService = { provide: 'PdfViewerNavigation', useValue: Navigation };
const PrintService = { provide: 'PdfViewerPrint', useValue: Print };
const TextSelectionService = { provide: 'PdfViewerTextSelection', useValue: TextSelection };
const TextSearchService = { provide: 'PdfViewerTextSearch', useValue: TextSearch };
const AnnotationService = { provide: 'PdfViewerAnnotation', useValue: Annotation };
const FormFieldsService = { provide: 'PdfViewerFormFields', useValue: FormFields };
/**
 * NgModule definition for the PdfViewer component with providers.
 */
class PdfViewerAllModule {
}
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
PdfViewerAllModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { PdfViewerComponent, PdfViewerModule, PdfViewerAllModule, LinkAnnotationService, BookmarkViewService, MagnificationService, ThumbnailViewService, ToolbarService, NavigationService, PrintService, TextSelectionService, TextSearchService, AnnotationService, FormFieldsService, inputs as ɵa, outputs as ɵb };
export { Drawing, findActiveElement, findObjectsUnderMouse, findObjectUnderMouse, CalculateLeaderPoints, findElementUnderMouse, insertObject, findTargetShapeElement, findObjects, findActivePage, ActiveElements, getConnectorPoints, getSegmentPath, updateSegmentElement, getSegmentElement, updateDecoratorElement, getDecoratorElement, clipDecorators, clipDecorator, initDistanceLabel, updateDistanceLabel, updateRadiusLabel, initPerimeterLabel, updatePerimeterLabel, removePerimeterLabel, updateCalibrateLabel, getPolygonPath, textElement, initLeaders, initLeader, isPointOverConnector, findNearestPoint, getDecoratorShape, renderAdornerLayer, createSvg, isLineShapes, setElementStype, findPointsLength, findPerimeterLength, getBaseShapeAttributes, getFunction, cloneObject, cloneArray, getInternalProperties, isLeader, PdfBounds, PdfFont, PdfAnnotationBase, ZOrderPageTable, Selector, ToolBase, SelectTool, MoveTool, StampTool, InkDrawingTool, ConnectTool, ResizeTool, NodeDrawingTool, PolygonDrawingTool, LineTool, RotateTool, Annotation, LinkAnnotation, TextMarkupAnnotation, MeasureAnnotation, ShapeAnnotation, StampAnnotation, StickyNotesAnnotation, FreeTextAnnotation, InputElement, InkAnnotation, NavigationPane, PdfViewerBase, TextLayer, ContextMenu, FontStyle, ContextMenuItem, AnnotationResizerLocation, CursorType, DynamicStampItem, SignStampItem, StandardBusinessStampItem, AllowedInteraction, AjaxHandler, Signature, Magnification, Navigation, ThumbnailView, Toolbar, AnnotationToolbar, ToolbarSettings, AjaxRequestSettings, CustomStamp, AnnotationToolbarSettings, ServerActionSettings, StrikethroughSettings, UnderlineSettings, HighlightSettings, LineSettings, ArrowSettings, RectangleSettings, CircleSettings, ShapeLabelSettings, PolygonSettings, StampSettings, CustomStampSettings, DistanceSettings, PerimeterSettings, AreaSettings, RadiusSettings, VolumeSettings, InkAnnotationSettings, StickyNotesSettings, MeasurementSettings, FreeTextSettings, AnnotationSelectorSettings, TextSearchColorSettings, HandWrittenSignatureSettings, AnnotationSettings, DocumentTextCollectionSettings, TextDataSettings, RectangleBounds, TileRenderingSettings, ScrollSettings, FormField, ContextMenuSettings, PdfViewer, BookmarkView, TextSelection, TextSearch, Print, FormFields } from '@syncfusion/ej2-pdfviewer';
//# sourceMappingURL=ej2-angular-pdfviewer.js.map
