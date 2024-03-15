import { Component, ElementRef, ViewContainerRef, Renderer2, Injector, ChangeDetectionStrategy, QueryList, ValueProvider, ContentChild } from '@angular/core';
import { ComponentBase, ComponentMixins, IComponentBase, applyMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { Timeline } from '@syncfusion/ej2-layouts';
import { Template } from '@syncfusion/ej2-angular-base';
import { ItemsDirective } from './items.directive';

export const inputs: string[] = ['align','cssClass','enablePersistence','enableRtl','items','locale','orientation','reverse','template'];
export const outputs: string[] = ['beforeItemRender','created'];
export const twoWays: string[] = [];

/**
 * Represents the EJ2 Angular Timeline Component.
 * ```html
 * <div ejs-timeline [items]='timelineItems'></div>
 * ```
 */
@Component({
    selector: 'ejs-timeline',
    inputs: inputs,
    outputs: outputs,
    template: `<ng-content select='div'></ng-content>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    queries: {
        childItems: new ContentChild(ItemsDirective)
    }
})
@ComponentMixins([ComponentBase])
export class TimelineComponent extends Timeline implements IComponentBase {
    public containerContext : any;
    public tagObjects: any;
	beforeItemRender: any;
	public created: any;
    public childItems: QueryList<ItemsDirective>;
    public tags: string[] = ['items'];
    /** 
     * Defines the template content for each timeline item. The template context will contain the item model.
     * 
     * {% codeBlock src='timeline/template/index.md' %}{% endcodeBlock %}
     *     
     * @default ''
     * @angulartype string | object
     * @reacttype string | function | JSX.Element
     * @vuetype string | function
     * @asptype string
     */
    @ContentChild('template')
    @Template()
    public template: any;
    @ContentChild('content')
    @Template()
    public content: any;
    @ContentChild('oppositeContent')
    @Template()
    public oppositeContent: any;

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

