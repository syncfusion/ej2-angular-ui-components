import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, QueryList, Renderer2, Injector, ValueProvider } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { PdfViewer } from '@syncfusion/ej2-pdfviewer';



export const inputs: string[] = ['DropdownFieldSettings','ajaxRequestSettings','annotationSelectorSettings','annotationSettings','annotations','areaSettings','arrowSettings','checkBoxFieldSettings','circleSettings','commandManager','contextMenuOption','contextMenuSettings','currentPageNumber','customContextMenuItems','customFonts','customStamp','customStampSettings','dateTimeFormat','designerMode','disableContextMenuItems','disableDefaultContextMenu','distanceSettings','documentPath','downloadFileName','drawingObject','enableAccessibilityTags','enableAnnotation','enableAnnotationToolbar','enableAutoComplete','enableBookmark','enableBookmarkStyles','enableCommentPanel','enableDesktopMode','enableDownload','enableFormDesigner','enableFormDesignerToolbar','enableFormFields','enableFormFieldsValidation','enableFreeText','enableHandwrittenSignature','enableHtmlSanitizer','enableHyperlink','enableImportAnnotationMeasurement','enableInkAnnotation','enableLocalStorage','enableMagnification','enableMeasureAnnotation','enableMultiLineOverlap','enableMultiPageAnnotation','enableNavigation','enableNavigationToolbar','enablePageOrganizer','enablePersistence','enablePinchZoom','enablePrint','enablePrintRotation','enableRtl','enableShapeAnnotation','enableShapeLabel','enableStampAnnotations','enableStickyNotesAnnotation','enableTextMarkupAnnotation','enableTextMarkupResizer','enableTextSearch','enableTextSelection','enableThumbnail','enableToolbar','enableZoomOptimization','exportAnnotationFileName','extractTextOption','formFieldCollections','formFields','freeTextSettings','handWrittenSignatureSettings','height','hideEmptyDigitalSignatureFields','hideSaveSignature','highlightSettings','hyperlinkOpenState','initialDialogSettings','initialFieldSettings','initialRenderPages','inkAnnotationSettings','interactionMode','isAnnotationToolbarOpen','isAnnotationToolbarVisible','isBookmarkPanelOpen','isCommandPanelOpen','isDocumentEdited','isExtractText','isFormDesignerToolbarVisible','isFormFieldDocument','isInitialFieldToolbarSelection','isMaintainSelection','isPageOrganizerOpen','isSignatureEditable','isThumbnailViewOpen','isValidFreeText','lineSettings','listBoxFieldSettings','locale','maxZoom','measurementSettings','minZoom','pageCount','pageOrganizerSettings','passwordFieldSettings','perimeterSettings','polygonSettings','printMode','printScaleFactor','radioButtonFieldSettings','radiusSettings','rectangleSettings','resourceUrl','restrictZoomRequest','retryCount','retryStatusCodes','retryTimeout','scrollSettings','selectedItems','serverActionSettings','serviceUrl','shapeLabelSettings','showCustomContextMenuBottom','showDigitalSignatureAppearance','showNotificationDialog','signatureDialogSettings','signatureFieldSettings','signatureFitMode','stampSettings','stickyNotesSettings','strikethroughSettings','textFieldSettings','textSearchColorSettings','tileRenderingSettings','toolbarSettings','underlineSettings','volumeSettings','width','zoomMode','zoomValue'];
export const outputs: string[] = ['addSignature','ajaxRequestFailed','ajaxRequestInitiate','ajaxRequestSuccess','annotationAdd','annotationDoubleClick','annotationMouseLeave','annotationMouseover','annotationMove','annotationMoving','annotationPropertiesChange','annotationRemove','annotationResize','annotationSelect','annotationUnSelect','beforeAddFreeText','bookmarkClick','buttonFieldClick','commentAdd','commentDelete','commentEdit','commentSelect','commentStatusChanged','created','customContextMenuBeforeOpen','customContextMenuSelect','documentLoad','documentLoadFailed','documentUnload','downloadEnd','downloadStart','exportFailed','exportStart','exportSuccess','extractTextCompleted','formFieldAdd','formFieldClick','formFieldDoubleClick','formFieldFocusOut','formFieldMouseLeave','formFieldMouseover','formFieldMove','formFieldPropertiesChange','formFieldRemove','formFieldResize','formFieldSelect','formFieldUnselect','hyperlinkClick','hyperlinkMouseOver','importFailed','importStart','importSuccess','keyboardCustomCommands','moveSignature','pageChange','pageClick','pageMouseover','pageOrganizerSaveAs','pageRenderComplete','pageRenderInitiate','printEnd','printStart','removeSignature','resizeSignature','resourcesLoaded','signaturePropertiesChange','signatureSelect','signatureUnselect','textSearchComplete','textSearchHighlight','textSearchStart','textSelectionEnd','textSelectionStart','thumbnailClick','toolbarClick','validateFormFields','zoomChange'];
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
	customContextMenuBeforeOpen: any;
	customContextMenuSelect: any;
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
	keyboardCustomCommands: any;
	moveSignature: any;
	pageChange: any;
	pageClick: any;
	pageMouseover: any;
	pageOrganizerSaveAs: any;
	pageRenderComplete: any;
	pageRenderInitiate: any;
	printEnd: any;
	printStart: any;
	removeSignature: any;
	resizeSignature: any;
	resourcesLoaded: any;
	signaturePropertiesChange: any;
	signatureSelect: any;
	signatureUnselect: any;
	textSearchComplete: any;
	textSearchHighlight: any;
	textSearchStart: any;
	textSelectionEnd: any;
	textSelectionStart: any;
	thumbnailClick: any;
	toolbarClick: any;
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
        try {
                let mod = this.injector.get('PdfViewerPageOrganizer');
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

