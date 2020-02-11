import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, Renderer2, Injector, ValueProvider } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { PdfViewer } from '@syncfusion/ej2-pdfviewer';



export const inputs: string[] = ['ajaxRequestSettings','annotationSelectorSettings','annotationSettings','annotationToolbarSettings','annotations','areaSettings','arrowSettings','circleSettings','contextMenuOption','customStampItems','customStampSettings','distanceSettings','documentPath','downloadFileName','drawingObject','enableAnnotation','enableAnnotationToolbar','enableBookmark','enableCommentPanel','enableDownload','enableFormFields','enableFormFieldsValidation','enableFreeText','enableHandwrittenSignature','enableHyperlink','enableMagnification','enableMeasureAnnotation','enableMultiPageAnnotation','enableNavigation','enableNavigationToolbar','enablePersistence','enablePinchZoom','enablePrint','enableRtl','enableShapeAnnotation','enableShapeLabel','enableStampAnnotations','enableStickyNotesAnnotation','enableTextMarkupAnnotation','enableTextMarkupResizer','enableTextSearch','enableTextSelection','enableThumbnail','enableToolbar','freeTextSettings','handWrittenSignatureSettings','height','highlightSettings','hyperlinkOpenState','interactionMode','isCommandPanelOpen','isExtractText','isSignatureEditable','isThumbnailViewOpen','lineSettings','locale','measurementSettings','perimeterSettings','polygonSettings','radiusSettings','rectangleSettings','retryCount','selectedItems','serverActionSettings','serviceUrl','shapeLabelSettings','showNotificationDialog','stampSettings','stickyNotesSettings','strikethroughSettings','textSearchColorSettings','toolbarSettings','underlineSettings','volumeSettings','width','zoomMode'];
export const outputs: string[] = ['ajaxRequestFailed','ajaxRequestInitiate','annotationAdd','annotationDoubleClick','annotationMouseover','annotationMove','annotationPropertiesChange','annotationRemove','annotationResize','annotationSelect','documentLoad','documentLoadFailed','documentUnload','downloadEnd','downloadStart','exportFailed','exportStart','exportSuccess','hyperlinkClick','hyperlinkMouseOver','importFailed','importStart','importSuccess','pageChange','pageClick','textSelectionEnd','textSelectionStart','thumbnailClick','validateFormFields','zoomChange'];
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
    }

    public ngOnInit() {
    }

    public ngAfterViewInit(): void {
    }

    public ngOnDestroy(): void {
    }

    public ngAfterContentChecked(): void {
    }

    public registerEvents: (eventList: string[]) => void;
    public addTwoWay: (propList: string[]) => void;
}

