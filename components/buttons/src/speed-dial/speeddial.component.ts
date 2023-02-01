import { Component, ElementRef, ViewContainerRef, Renderer2, Injector, ChangeDetectionStrategy, QueryList, ValueProvider, ContentChild } from '@angular/core';
import { ComponentBase, ComponentMixins, IComponentBase, applyMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { SpeedDial } from '@syncfusion/ej2-buttons';
import { Template } from '@syncfusion/ej2-angular-base';
import { SpeedDialItemsDirective } from './items.directive';

export const inputs: string[] = ['animation','closeIconCss','content','cssClass','direction','disabled','enablePersistence','enableRtl','iconPosition','itemTemplate','items','locale','modal','mode','openIconCss','opensOnHover','popupTemplate','position','radialSettings','target','visible'];
export const outputs: string[] = ['beforeClose','beforeItemRender','beforeOpen','clicked','created','onClose','onOpen','visibleChange'];
export const twoWays: string[] = ['visible'];

/**
 * Represents the Angular SpeedDial Component.
 * ```html
 * <button ejs-speeddial content='Edit'></button>
 * ```
 */
@Component({
    selector: '[ejs-speeddial]',
    inputs: inputs,
    outputs: outputs,
    template: `<ng-content ></ng-content>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    queries: {
        childItems: new ContentChild(SpeedDialItemsDirective)
    }
})
@ComponentMixins([ComponentBase])
export class SpeedDialComponent extends SpeedDial implements IComponentBase {
    public containerContext : any;
    public tagObjects: any;
	beforeClose: any;
	beforeItemRender: any;
	beforeOpen: any;
	clicked: any;
	created: any;
	onClose: any;
	onOpen: any;
	public visibleChange: any;
    public childItems: QueryList<SpeedDialItemsDirective>;
    public tags: string[] = ['items'];
    /** 
     * Defines the template content for the speed dial item. 
     * {% codeBlock src='speeddial/itemTemplate/index.md' %}{% endcodeBlock %}
     * @default ''
     */
    @ContentChild('itemTemplate')
    @Template()
    public itemTemplate: any;
    /** 
     * Defines a template content for popup of SpeedDial.
     * @default ''
     */
    @ContentChild('popupTemplate')
    @Template()
    public popupTemplate: any;

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

