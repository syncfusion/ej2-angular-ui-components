import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, QueryList, Renderer2, Injector, ValueProvider } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { PdfViewer } from '@syncfusion/ej2-pdfviewer';



export const inputs: string[] = ['ajaxRequestSettings','annotationSelectorSettings','annotationSettings','annotations','areaSettings','arrowSettings','circleSettings','contextMenuOption','contextMenuSettings','currentPageNumber','customStamp','customStampSettings','dateTimeFormat','disableContextMenuItems','distanceSettings','documentPath','downloadFileName','drawingObject','enableAnnotation','enableAnnotationToolbar','enableAutoComplete','enableBookmark','enableBookmarkStyles','enableCommentPanel','enableDesktopMode','enableDownload','enableFormFields','enableFormFieldsValidation','enableFreeText','enableHandwrittenSignature','enableHyperlink','enableImportAnnotationMeasurement','enableInkAnnotation','enableMagnification','enableMeasureAnnotation','enableMultiLineOverlap','enableMultiPageAnnotation','enableNavigation','enableNavigationToolbar','enablePersistence','enablePinchZoom','enablePrint','enableRtl','enableShapeAnnotation','enableShapeLabel','enableStampAnnotations','enableStickyNotesAnnotation','enableTextMarkupAnnotation','enableTextMarkupResizer','enableTextSearch','enableTextSelection','enableThumbnail','enableToolbar','enableZoomOptimization','exportAnnotationFileName','formFieldCollections','freeTextSettings','handWrittenSignatureSettings','height','hideSaveSignature','highlightSettings','hyperlinkOpenState','inkAnnotationSettings','interactionMode','isAnnotationToolbarOpen','isAnnotationToolbarVisible','isBookmarkPanelOpen','isCommandPanelOpen','isDocumentEdited','isExtractText','isFormFieldDocument','isMaintainSelection','isSignatureEditable','isThumbnailViewOpen','isValidFreeText','lineSettings','locale','measurementSettings','pageCount','perimeterSettings','polygonSettings','printMode','radiusSettings','rectangleSettings','restrictZoomRequest','retryCount','scrollSettings','selectedItems','serverActionSettings','serviceUrl','shapeLabelSettings','showNotificationDialog','signatureFieldSettings','signatureFitMode','stampSettings','stickyNotesSettings','strikethroughSettings','textSearchColorSettings','tileRenderingSettings','toolbarSettings','underlineSettings','volumeSettings','width','zoomMode','zoomValue'];
export const outputs: string[] = ['addSignature','ajaxRequestFailed','ajaxRequestInitiate','annotationAdd','annotationDoubleClick','annotationMouseLeave','annotationMouseover','annotationMove','annotationPropertiesChange','annotationRemove','annotationResize','annotationSelect','annotationUnSelect','beforeAddFreeText','bookmarkClick','buttonFieldClick','commentAdd','commentDelete','commentEdit','commentSelect','commentStatusChanged','created','documentLoad','documentLoadFailed','documentUnload','downloadEnd','downloadStart','exportFailed','exportStart','exportSuccess','extractTextCompleted','formFieldClick','formFieldFocusOut','hyperlinkClick','hyperlinkMouseOver','importFailed','importStart','importSuccess','moveSignature','pageChange','pageClick','pageMouseover','printEnd','printStart','removeSignature','resizeSignature','signaturePropertiesChange','signatureSelect','textSearchComplete','textSearchHighlight','textSearchStart','textSelectionEnd','textSelectionStart','thumbnailClick','validateFormFields','zoomChange'];
export const twoWays: string[] = [];

/**
 * `ejs-pdfviewer` represents the Angular PdfViewer Component.
 * ```html
 * <ejs-pdfviewer></ejs-pdfviewer>
 * ```
 */
@Component({
    selector: 'ejs-pdfviewer',
    inputs: inputs,
    outputs: outputs,
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    queries: {

    }
})
@ComponentMixins([ComponentBase])
export class PdfViewerComponent extends PdfViewer implements IComponentBase {
    public context : any;
    public tagObjects: any;




    constructor(private ngEle: ElementRef, private srenderer: Renderer2, private viewContainerRef:ViewContainerRef, private injector: Injector) {
        super();
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
                let mod = this.injector.get('PdfViewerLinkAnnotation');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('PdfViewerBookmarkView');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('PdfViewerMagnification');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('PdfViewerThumbnailView');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('PdfViewerToolbar');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('PdfViewerNavigation');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('PdfViewerPrint');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('PdfViewerTextSelection');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('PdfViewerTextSearch');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('PdfViewerAnnotation');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('PdfViewerFormFields');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }

        this.registerEvents(outputs);
        this.addTwoWay.call(this, twoWays);
        setValue('currentInstance', this, this.viewContainerRef);
        this.context  = new ComponentBase();
    }

    public ngOnInit() {
        this.context.ngOnInit(this);
    }

    public ngAfterViewInit(): void {
        this.context.ngAfterViewInit(this);
    }

    public ngOnDestroy(): void {
        this.context.ngOnDestroy(this);
    }

    public ngAfterContentChecked(): void {
        
        this.context.ngAfterContentChecked(this);
    }

    public registerEvents: (eventList: string[]) => void;
    public addTwoWay: (propList: string[]) => void;
}

