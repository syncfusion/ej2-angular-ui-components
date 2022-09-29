import { Component, ElementRef, ViewContainerRef, Renderer2, Injector, ChangeDetectionStrategy, QueryList, ValueProvider, ContentChild } from '@angular/core';
import { ComponentBase, ComponentMixins, IComponentBase, applyMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { Mention } from '@syncfusion/ej2-dropdowns';
import { Template } from '@syncfusion/ej2-angular-base';


export const inputs: string[] = ['allowSpaces','cssClass','dataSource','displayTemplate','fields','filterType','highlight','ignoreCase','itemTemplate','locale','mentionChar','minLength','noRecordsTemplate','popupHeight','popupWidth','query','showMentionChar','sortOrder','spinnerTemplate','suffixText','suggestionCount','target'];
export const outputs: string[] = ['actionBegin','actionComplete','actionFailure','beforeOpen','change','closed','created','destroyed','filtering','opened','select'];
export const twoWays: string[] = [''];

/**
*The Mention component contains a list of predefined values, from which the user can choose a single value.
*```html
*<ejs-mention></ejs-mention>
*```
*/
@Component({
    selector: 'ejs-mention',
    inputs: inputs,
    outputs: outputs,
    template: `<ng-content ></ng-content>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    queries: {

    }
})
@ComponentMixins([ComponentBase])
export class MentionComponent extends Mention implements IComponentBase {
    public containerContext : any;
    public tagObjects: any;
	actionBegin: any;
	actionComplete: any;
	actionFailure: any;
	beforeOpen: any;
	change: any;
	closed: any;
	created: any;
	destroyed: any;
	filtering: any;
	opened: any;
	public select: any;


    /** 
     * Specifies the template for the selected value from the suggestion list.
     * @default null
     */
    @ContentChild('displayTemplate')
    @Template()
    public displayTemplate: any;
    /** 
     * Specifies the template for the suggestion list.
     * @default null
     */
    @ContentChild('itemTemplate')
    @Template()
    public itemTemplate: any;
    /** 
     * Specifies the template for showing until data is loaded in the popup.
     * @default null
     */
    @ContentChild('spinnerTemplate')
    @Template()
    public spinnerTemplate: any;
    @ContentChild('noRecordsTemplate')
    @Template('No records found')
    public noRecordsTemplate: any;

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
        
        this.containerContext.ngAfterContentChecked(this);
    }

    public registerEvents: (eventList: string[]) => void;
    public addTwoWay: (propList: string[]) => void;
}

