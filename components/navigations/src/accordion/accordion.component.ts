import { Component, ElementRef, ViewContainerRef, Renderer2, Injector, ChangeDetectionStrategy, QueryList, ValueProvider, ContentChild } from '@angular/core';
import { ComponentBase, ComponentMixins, IComponentBase, applyMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { Accordion } from '@syncfusion/ej2-navigations';
import { Template } from '@syncfusion/ej2-angular-base';
import { AccordionItemsDirective } from './items.directive';

export const inputs: string[] = ['animation','dataSource','enableHtmlSanitizer','enablePersistence','enableRtl','expandMode','expandedIndices','headerTemplate','height','itemTemplate','items','locale','width'];
export const outputs: string[] = ['clicked','created','destroyed','expanded','expanding','expandedIndicesChange'];
export const twoWays: string[] = ['expandedIndices'];

/**
 * Represents the Angular Accordion Component.
 * ```html
 * <ejs-accordion></ejs-accordion>
 * ```
 */
@Component({
    selector: 'ejs-accordion',
    inputs: inputs,
    outputs: outputs,
    template: `<ng-content select='div'></ng-content>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    queries: {
        childItems: new ContentChild(AccordionItemsDirective)
    }
})
@ComponentMixins([ComponentBase])
export class AccordionComponent extends Accordion implements IComponentBase {
    public containerContext : any;
    public tagObjects: any;
	clicked: any;
	created: any;
	destroyed: any;
	expanded: any;
	expanding: any;
	public expandedIndicesChange: any;
    public childItems: QueryList<AccordionItemsDirective>;
    public tags: string[] = ['items'];
    /** 
     * Specifies the header title template option for accordion items.
     * @default null
     */
    @ContentChild('headerTemplate')
    @Template()
    public headerTemplate: any;
    /** 
     * Specifies the template option for accordion items.
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
        this.containerContext  = new ComponentBase();
    }

    public ngOnInit() {
        this.containerContext.ngOnInit(this);
    }

    public ngAfterViewInit(): void {
        this.containerContext.ngAfterViewInit(this);
    }

    public ngOnDestroy(): void {
        this.containerContext.ngOnDestroy(this);
    }

    public ngAfterContentChecked(): void {
        this.tagObjects[0].instance = this.childItems;
        this.containerContext.ngAfterContentChecked(this);
    }

    public registerEvents: (eventList: string[]) => void;
    public addTwoWay: (propList: string[]) => void;
}

