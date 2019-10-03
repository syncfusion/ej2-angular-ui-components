import { Component, ElementRef, ViewContainerRef, Renderer2, Injector, ChangeDetectionStrategy, ValueProvider, ContentChild } from '@angular/core';
import { ComponentBase, ComponentMixins, IComponentBase, applyMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { Accordion } from '@syncfusion/ej2-navigations';
import { Template } from '@syncfusion/ej2-angular-base';
import { AccordionItemsDirective } from './items.directive';

export const inputs: string[] = ['animation','dataSource','enablePersistence','enableRtl','expandMode','headerTemplate','height','itemTemplate','items','locale','width'];
export const outputs: string[] = ['clicked','created','destroyed','expanded','expanding'];
export const twoWays: string[] = [''];

/**
 * Represents the Essential JS 2 Angular Accordion Component.
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
    public childItems: any;
    public tags: string[] = ['items'];

    /** 
     * Specifies the header title template option for accordion items.

     */
    @ContentChild('headerTemplate')
    @Template()
    public headerTemplate: any;
    /** 
     * Specifies the template option for accordion items.

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

