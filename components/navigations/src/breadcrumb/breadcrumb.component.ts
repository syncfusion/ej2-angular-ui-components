import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, QueryList, Renderer2, Injector, ValueProvider, ContentChild } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { Breadcrumb } from '@syncfusion/ej2-navigations';
import { Template } from '@syncfusion/ej2-angular-base';
import { BreadcrumbItemsDirective } from './items.directive';

export const inputs: string[] = ['activeItem','cssClass','disabled','enableActiveItemNavigation','enableNavigation','enablePersistence','enableRtl','itemTemplate','items','locale','maxItems','overflowMode','separatorTemplate','url'];
export const outputs: string[] = ['beforeItemRender','created','itemClick','activeItemChange'];
export const twoWays: string[] = ['activeItem'];

/**
 * Represents the EJ2 Angular Breadcrumb Component.
 * ```html
 * <ejs-breadcrumb [items]='breadcrumbItems'></ejs-breadcrumb>
 * ```
 */
@Component({
    selector: 'ejs-breadcrumb',
    inputs: inputs,
    outputs: outputs,
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    queries: {
        childItems: new ContentChild(BreadcrumbItemsDirective)
    }
})
@ComponentMixins([ComponentBase])
export class BreadcrumbComponent extends Breadcrumb implements IComponentBase {
    public context : any;
    public tagObjects: any;
	beforeItemRender: any;
	created: any;
	itemClick: any;
	public activeItemChange: any;
    public childItems: QueryList<BreadcrumbItemsDirective>;
    public tags: string[] = ['items'];
    /** 
     * Specifies the separator template for Breadcrumb.
     * @default '/'
     */
    @ContentChild('separatorTemplate')
    @Template()
    public separatorTemplate: any;
    /** 
     * Specifies the template for Breadcrumb item.
     * @default null
     */
    @ContentChild('itemTemplate')
    @Template()
    public itemTemplate: any;

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
        this.tagObjects[0].instance = this.childItems;
        this.context.ngAfterContentChecked(this);
    }

    public registerEvents: (eventList: string[]) => void;
    public addTwoWay: (propList: string[]) => void;
}

