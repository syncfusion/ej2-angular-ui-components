import { Component, ElementRef, ViewContainerRef, Renderer2, Injector, ChangeDetectionStrategy, QueryList, ValueProvider, ContentChild } from '@angular/core';
import { ComponentBase, ComponentMixins, IComponentBase, applyMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { Tooltip } from '@syncfusion/ej2-popups';
import { Template } from '@syncfusion/ej2-angular-base';


export const inputs: string[] = ['animation','closeDelay','container','content','cssClass','enableHtmlParse','enableHtmlSanitizer','enablePersistence','enableRtl','height','isSticky','locale','mouseTrail','offsetX','offsetY','openDelay','opensOn','position','showTipPointer','target','tipPointerPosition','width','windowCollision'];
export const outputs: string[] = ['afterClose','afterOpen','beforeClose','beforeCollision','beforeOpen','beforeRender','created','destroyed'];
export const twoWays: string[] = [''];

/**
 * Represents the Angular Tooltip component that displays a piece of information about the target element on mouse hover.
 * ```html
 * <ejs-tooltip content='Tooltip content'>Show Tooltip</ejs-tooltip>
 * ```
 */
@Component({
    selector: 'ejs-tooltip',
    inputs: inputs,
    outputs: outputs,
    template: `<ng-content ></ng-content>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    queries: {

    }
})
@ComponentMixins([ComponentBase])
export class TooltipComponent extends Tooltip implements IComponentBase {
    public containerContext : any;
    public tagObjects: any;
	afterClose: any;
	afterOpen: any;
	beforeClose: any;
	beforeCollision: any;
	beforeOpen: any;
	beforeRender: any;
	created: any;
	public destroyed: any;


    /** 
     * It is used to display the content of Tooltip which can be both string and HTML Elements. 
     * Refer the documentation [here](https://ej2.syncfusion.com/documentation/tooltip/content/) 
     *  to know more about this property with demo.
     * 
     * {% codeBlock src="tooltip/content-api/index.ts" %}{% endcodeBlock %}
     *
     *     
     */
    @ContentChild('content')
    @Template()
    public content: any;

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

