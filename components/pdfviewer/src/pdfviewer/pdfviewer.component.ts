import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, QueryList, Renderer2, Injector, ValueProvider } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { PdfViewer } from '@syncfusion/ej2-pdfviewer';



export const inputs: string[] = ['DropdownFieldSettings','ajaxRequestSettings','annotationSelectorSettings','annotationSettings','annotations','areaSettings','arrowSettings','checkBoxFieldSettings','circleSettings','contextMenuOption','contextMenuSettings','currentPageNumber','customStamp','customStampSettings','dateTimeFormat','designerMode','disableContextMenuItems','distanceSettings','documentPath','downloadFileName','drawingObject','enableAnnotation','enableAnnotationToolbar','enableAutoComplete','enableBookmark','enableBookmarkStyles','enableCommentPanel','enableDesktopMode','enableDownload','enableFormDesigner','enableFormDesignerToolbar','enableFormFields','enableFormFieldsValidation','enableFreeText','enableHandwrittenSignature','enableHyperlink','enableImportAnnotationMeasurement','enableInkAnnotation','enableMagnification','enableMeasureAnnotation','enableMultiLineOverlap','enableMultiPageAnnotation','enableNavigation','enableNavigationToolbar','enablePersistence','enablePinchZoom','enablePrint','enablePrintRotation','enableRtl','enableShapeAnnotation','enableShapeLabel','enableStampAnnotations','enableStickyNotesAnnotation','enableTextMarkupAnnotation','enableTextMarkupResizer','enableTextSearch','enableTextSelection','enableThumbnail','enableToolbar','enableZoomOptimization','exportAnnotationFileName','formFieldCollections','formFields','freeTextSettings','handWrittenSignatureSettings','height','hideSaveSignature','highlightSettings','hyperlinkOpenState','initialDialogSettings','initialFieldSettings','inkAnnotationSettings','interactionMode','isAnnotationToolbarOpen','isAnnotationToolbarVisible','isBookmarkPanelOpen','isCommandPanelOpen','isDocumentEdited','isExtractText','isFormDesignerToolbarVisible','isFormFieldDocument','isInitialFieldToolbarSelection','isMaintainSelection','isSignatureEditable','isThumbnailViewOpen','isValidFreeText','lineSettings','listBoxFieldSettings','locale','measurementSettings','pageCount','passwordFieldSettings','perimeterSettings','polygonSettings','printMode','radioButtonFieldSettings','radiusSettings','rectangleSettings','restrictZoomRequest','retryCount','scrollSettings','selectedItems','serverActionSettings','serviceUrl','shapeLabelSettings','showNotificationDialog','signatureDialogSettings','signatureFieldSettings','signatureFitMode','stampSettings','stickyNotesSettings','strikethroughSettings','textFieldSettings','textSearchColorSettings','tileRenderingSettings','toolbarSettings','underlineSettings','volumeSettings','width','zoomMode','zoomValue'];
export const outputs: string[] = ['addSignature','ajaxRequestFailed','ajaxRequestInitiate','ajaxRequestSuccess','annotationAdd','annotationDoubleClick','annotationMouseLeave','annotationMouseover','annotationMove','annotationMoving','annotationPropertiesChange','annotationRemove','annotationResize','annotationSelect','annotationUnSelect','beforeAddFreeText','bookmarkClick','buttonFieldClick','commentAdd','commentDelete','commentEdit','commentSelect','commentStatusChanged','created','documentLoad','documentLoadFailed','documentUnload','downloadEnd','downloadStart','exportFailed','exportStart','exportSuccess','extractTextCompleted','formFieldAdd','formFieldClick','formFieldDoubleClick','formFieldFocusOut','formFieldMouseLeave','formFieldMouseover','formFieldMove','formFieldPropertiesChange','formFieldRemove','formFieldResize','formFieldSelect','formFieldUnselect','hyperlinkClick','hyperlinkMouseOver','importFailed','importStart','importSuccess','moveSignature','pageChange','pageClick','pageMouseover','printEnd','printStart','removeSignature','resizeSignature','signaturePropertiesChange','signatureSelect','textSearchComplete','textSearchHighlight','textSearchStart','textSelectionEnd','textSelectionStart','thumbnailClick','validateFormFields','zoomChange'];
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
	addSignature: any;
	ajaxRequestFailed: any;
	ajaxRequestInitiate: any;
	ajaxRequestSuccess: any;
	annotationAdd: any;
	annotationDoubleClick: any;
	annotationMouseLeave: any;
	annotationMouseover: any;
	annotationMove: any;
	annotationMoving: any;
	annotationPropertiesChange: any;
	annotationRemove: any;
	annotationResize: any;
	annotationSelect: any;
	annotationUnSelect: any;
	beforeAddFreeText: any;
	bookmarkClick: any;
	buttonFieldClick: any;
	commentAdd: any;
	commentDelete: any;
	commentEdit: any;
	commentSelect: any;
	commentStatusChanged: any;
	created: any;
	documentLoad: any;
	documentLoadFailed: any;
	documentUnload: any;
	downloadEnd: any;
	downloadStart: any;
	exportFailed: any;
	exportStart: any;
	exportSuccess: any;
	extractTextCompleted: any;
	formFieldAdd: any;
	formFieldClick: any;
	formFieldDoubleClick: any;
	formFieldFocusOut: any;
	formFieldMouseLeave: any;
	formFieldMouseover: any;
	formFieldMove: any;
	formFieldPropertiesChange: any;
	formFieldRemove: any;
	formFieldResize: any;
	formFieldSelect: any;
	formFieldUnselect: any;
	hyperlinkClick: any;
	hyperlinkMouseOver: any;
	importFailed: any;
	importStart: any;
	importSuccess: any;
	moveSignature: any;
	pageChange: any;
	pageClick: any;
	pageMouseover: any;
	printEnd: any;
	printStart: any;
	removeSignature: any;
	resizeSignature: any;
	signaturePropertiesChange: any;
	signatureSelect: any;
	textSearchComplete: any;
	textSearchHighlight: any;
	textSearchStart: any;
	textSelectionEnd: any;
	textSelectionStart: any;
	thumbnailClick: any;
	validateFormFields: any;
	public zoomChange: any;



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
                let mod = this.injector.get('PdfViewerFormDesigner');
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

