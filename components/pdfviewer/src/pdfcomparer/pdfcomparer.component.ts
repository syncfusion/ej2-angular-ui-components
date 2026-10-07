import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, QueryList, Renderer2, Injector, ValueProvider } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { PdfComparer } from '@syncfusion/ej2-pdfviewer';



export const inputs: string[] = ['comparisonOptions','enableDifferencePanel','enablePersistence','enableRtl','enableSyncScrolling','height','locale','modifiedDocumentPath','originalDocumentPath','resourceUrl','width'];
export const outputs: string[] = [];
export const twoWays: string[] = [''];

/**
 * `ejs-pdfcomparer` represents the Angular PdfComparer Component.
 * ```html
 * <ejs-pdfcomparer></ejs-pdfcomparer>
 * ```
 */
@Component({
    selector: 'ejs-pdfcomparer',
    inputs: inputs,
    outputs: outputs,
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    queries: {
    }
})
@ComponentMixins([ComponentBase])
export class PdfComparerComponent extends PdfComparer implements IComponentBase {
    public declare context : any;
    public declare tagObjects: any;
	



    constructor(private ngEle: ElementRef, private srenderer: Renderer2, private viewContainerRef:ViewContainerRef, private injector: Injector) {
        super();
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];

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


