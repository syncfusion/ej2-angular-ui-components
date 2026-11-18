import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, QueryList, Renderer2, Injector, ValueProvider } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { PptxEditor } from '@syncfusion/ej2-pptxeditor';



export const inputs: string[] = ['ariaLabel','canRedo','canStartSlideShow','canUndo','chartRenderer','className','documentContent','documentPath','enableCopy','enableDownload','enableMagnification','enableNavigation','enablePersistence','enablePrint','enableRtl','enableSlideShow','enableTextSelection','enableThumbnail','enableToolbar','externalImagePolicy','fileName','fontResolution','fontSubstitutions','height','id','isLoading','isReady','locale','maxCompressionRatio','maxSinglePartBytes','maxUncompressedBytes','maxZipEntries','ribbonLayout','role','slideIndex','tabIndex','theme','thumbnailPanelVisible','thumbnailPanelWidth','watermarkText','width','zoom'];
export const outputs: string[] = ['created','currentSlideChanged','currentSlideNotesChanged','destroyed','documentLoad','hyperlinkClick','loadFailed','loadProgress','notesPaneClosed','notesPaneOpened','presentationEnded','presentationStarted','presenterViewClosed','presenterViewOpened','slideChange','slideChanged','unsupportedElement','zoomChange','slideIndexChange','thumbnailPanelVisibleChange'];
export const twoWays: string[] = ['slideIndex', 'thumbnailPanelVisible'];

/**
 * `ejs-pptxeditor` represents the Angular PPTX Editor Component.
 * ```html
 * <ejs-pptxeditor id='editor' enableToolbar='true' enableThumbnail='true' enableSlideShow='true' (documentLoad)='onLoad($event)'></ejs-pptxeditor>
 * ```
 */
@Component({
    selector: 'ejs-pptxeditor',
    inputs: inputs,
    outputs: outputs,
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    queries: {
    }
})
@ComponentMixins([ComponentBase])
export class PptxEditorComponent extends PptxEditor implements IComponentBase {
    public declare context : any;
    public declare tagObjects: any;
	declare created: any;
	declare currentSlideChanged: any;
	declare currentSlideNotesChanged: any;
	declare destroyed: any;
	declare documentLoad: any;
	declare hyperlinkClick: any;
	declare loadFailed: any;
	declare loadProgress: any;
	declare notesPaneClosed: any;
	declare notesPaneOpened: any;
	declare presentationEnded: any;
	declare presentationStarted: any;
	declare presenterViewClosed: any;
	declare presenterViewOpened: any;
	declare slideChange: any;
	declare slideChanged: any;
	declare unsupportedElement: any;
	declare zoomChange: any;
	declare slideIndexChange: any;
	public declare thumbnailPanelVisibleChange: any;



    constructor(private ngEle: ElementRef, private srenderer: Renderer2, private viewContainerRef:ViewContainerRef, private injector: Injector) {
        super();
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
                let mod = this.injector.get('PptxEditorToolbar');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('PptxEditorThumbnailView');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('PptxEditorNavigation');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('PptxEditorMagnification');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('PptxEditorSlideShow');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('PptxEditorPrint');
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

    public declare registerEvents: (eventList: string[]) => void;
    public declare addTwoWay: (propList: string[]) => void;
}


