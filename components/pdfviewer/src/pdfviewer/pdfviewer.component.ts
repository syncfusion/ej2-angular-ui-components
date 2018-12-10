import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, Renderer2, Injector, ValueProvider } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { PdfViewer } from '@syncfusion/ej2-pdfviewer';



export const inputs: string[] = ['documentPath','enableBookmark','enableDownload','enableHyperlink','enableMagnification','enableNavigation','enablePersistence','enablePrint','enableRtl','enableTextSearch','enableTextSelection','enableThumbnail','enableToolbar','height','hyperlinkOpenState','interactionMode','locale','serverActionSettings','serviceUrl','toolbarSettings','width'];
export const outputs: string[] = ['ajaxRequestFailed','documentLoad','documentLoadFailed','documentUnload','hyperlinkClick','pageChange','pageClick','zoomChange'];
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
        try{ this.injectedModules.push(this.injector.get('PdfViewerLinkAnnotation')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('PdfViewerBookmarkView')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('PdfViewerMagnification')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('PdfViewerThumbnailView')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('PdfViewerToolbar')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('PdfViewerNavigation')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('PdfViewerPrint')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('PdfViewerTextSelection')); }catch {} 
        try{ this.injectedModules.push(this.injector.get('PdfViewerTextSearch')); }catch {} 

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

