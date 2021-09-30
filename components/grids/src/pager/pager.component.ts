import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, QueryList, Renderer2, Injector, ValueProvider, ContentChild } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { Pager } from '@syncfusion/ej2-grids';
import { Template } from '@syncfusion/ej2-angular-base';


export const inputs: string[] = ['currentPage','customText','enableExternalMessage','enablePagerMessage','enablePersistence','enableQueryString','enableRtl','externalMessage','locale','pageCount','pageSize','pageSizes','template','totalRecordsCount'];
export const outputs: string[] = ['click','created','dropDownChanged'];
export const twoWays: string[] = [];

/**
 * `ejs-pager` represents the Angular Pager Component.
 * ```html
 * <ejs-pager></ejs-pager>
 * ```
 */
@Component({
    selector: 'ejs-pager',
    inputs: inputs,
    outputs: outputs,
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    queries: {

    }
})
@ComponentMixins([ComponentBase])
export class PagerComponent extends Pager implements IComponentBase {
    public context : any;
    public tagObjects: any;
	click: any;
	created: any;
	public dropDownChanged: any;


    /** 
     *  Defines the template as string or HTML element ID which renders customized elements in pager instead of default elements.
     * @default null
     */
    @ContentChild('template')
    @Template()
    public template: any;

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

    public registerEvents: (eventList: string[]) => void;
    public addTwoWay: (propList: string[]) => void;
}

